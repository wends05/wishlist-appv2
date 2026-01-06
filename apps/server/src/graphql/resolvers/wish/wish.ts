import { HomeWishesInputSchema } from "@repo/common/dto";
import { BaseWishRef, OpenWishRef } from "@/graphql/types/Wish.ts";
import builder from "@/lib/pothos.ts";
import { getHomeWishes, getWishById } from "@/services/Wish.service.ts";

builder.queryField("wish", (t) =>
  t.field({
    type: BaseWishRef,
    args: {
      wishId: t.arg.string({ required: true }),
    },
    nullable: true,
    authScopes: {
      isAuthenticated: true,
    },
    resolve: (_parent, args) => {
      return getWishById(args.wishId);
    },
  })
);

builder.queryField("home", (t) =>
  t.field({
    type: [OpenWishRef],
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
      return getHomeWishes({
        search: args.search,
        limit: args.limit,
        skip: args.skip,
        categoryId: args.categoryId,
        currentUserId: context.DbUser._id,
      });
    },
  })
);
