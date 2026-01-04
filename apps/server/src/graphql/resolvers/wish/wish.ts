import { HomeWishesInputSchema } from "@repo/common/dto";
import type { QueryFilter } from "mongoose";
import { WishRef } from "@/graphql/types/Wish.ts";
import builder from "@/lib/pothos.ts";
import { type Wish, WishModel } from "@/models/wish.ts";

builder.queryField("wish", (t) =>
  t.field({
    type: WishRef,
    args: {
      wishId: t.arg.string({ required: true }),
    },
    nullable: true,
    authScopes: {
      isAuthenticated: true,
    },
    resolve: (_parent, args) => {
      return WishModel.findOne({ _id: args.wishId });
    },
  })
);

builder.queryField("home", (t) =>
  t.field({
    type: [WishRef],
    nullable: false,
    args: {
      search: t.arg.string(),
      limit: t.arg.int(),
      skip: t.arg.int(),
      categoryId: t.arg.string(),
    },
    authScopes: {
      isAuthenticated: true,
    },
    validate: HomeWishesInputSchema,
    resolve: async (_parent, args, context) => {
      const { search, limit, skip, categoryId } = args;

      if (search) {
        // Use aggregation to search across wish fields and category name in one query
        const homeWishes = await WishModel.aggregate([
          {
            $match: {
              ownerId: {
                $ne: context.DbUser,
              },
              ...(categoryId && categoryId !== "all" ? { categoryId } : {}),
            },
          },
          {
            $lookup: {
              from: "categories",
              localField: "categoryId",
              foreignField: "_id",
              as: "category",
            },
          },
          {
            $match: {
              $or: [
                { name: { $regex: search, $options: "i" } },
                { description: { $regex: search, $options: "i" } },
                { "category.name": { $regex: search, $options: "i" } },
              ],
            },
          },
          { $sort: { createdAt: -1 } },
          { $skip: skip || 0 },
          { $limit: limit || 10 },
          {
            $project: {
              category: 0, // Remove the joined category field from results
            },
          },
        ]);

        return homeWishes;
      }

      // No search - simple query
      const filter: QueryFilter<Wish> = {
        ownerId: { $ne: context.DbUser },
      };

      if (args.categoryId && args.categoryId !== "all") {
        (filter as Record<string, unknown>).categoryId = args.categoryId;
      }

      const homeWishes = await WishModel.find(filter)
        .sort({ createdAt: -1 })
        .limit(limit || 10)
        .skip(skip || 0);

      return homeWishes;
    },
  })
);
