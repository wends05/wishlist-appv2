import { WishSchema } from "@repo/common/schemas";
import { BaseWishRef } from "@/graphql/types/Wish.ts";
import builder from "@/lib/pothos.ts";
import { createWish } from "@/services/Wish.service.ts";

builder.mutationField("createWish", (t) =>
  t.field({
    type: BaseWishRef,
    args: {
      name: t.arg.string({ required: true }),
      description: t.arg.string({ required: true }),
      ownerId: t.arg.string({ required: true }),
      categoryId: t.arg.string({ required: true }),
    },
    validate: WishSchema,
    resolve: (_parent, args) => {
      return createWish({
        name: args.name,
        description: args.description,
        ownerId: args.ownerId,
        categoryId: args.categoryId,
      });
    },
  })
);
