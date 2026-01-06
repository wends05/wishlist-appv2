import type { CreateWishDTO } from "@repo/common/dto";
import type { PipelineStage, QueryFilter, Types } from "mongoose";
import { type OpenWish, OpenWishModel, WishModel } from "@/models/wish.ts";

interface GetHomeWishesInput {
  search?: string | null;
  limit?: number | null;
  skip?: number | null;
  categoryId?: string | null;
  currentUserId: Types.ObjectId;
}

export const createWish = async (data: CreateWishDTO) => {
  return WishModel.create({
    name: data.name,
    description: data.description,
    ownerId: data.ownerId,
    categoryId: data.categoryId,
  });
};

export const getWishById = async (wishId: string) => {
  return WishModel.findOne({ _id: wishId });
};

export const getMyWishes = async (userId: string) => {
  return WishModel.where("ownerId").equals(userId);
};

export const getHomeWishes = async (input: GetHomeWishesInput) => {
  const { search, categoryId, currentUserId } = input;
  const limit = input.limit ?? 10;
  const skip = input.skip ?? 0;

  // Build base filter - used in both search and non-search paths
  const baseFilter: QueryFilter<OpenWish> = {
    ...(categoryId && categoryId !== "all" && { "categoryId._id": categoryId }),
  };

  // No search - use simple query (more performant)
  if (!search) {
    return OpenWishModel.find(baseFilter)
      .where("ownerId")
      .ne(currentUserId)
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip);
  }

  // With search - use aggregation to search across wish fields and category name
  const pipeline: PipelineStage[] = [
    { $match: baseFilter },
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
    { $skip: skip },
    { $limit: limit },
    { $project: { category: 0 } },
  ];

  return WishModel.aggregate(pipeline);
};
