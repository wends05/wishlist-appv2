import { WishSchema } from "@repo/common/schemas";
import builder from "@/lib/pothos.ts";
import { WishRef } from "@/models/wish.ts";

builder.queryField("wishes", (t) =>
  t.field({
    type: [WishRef],
    nullable: true,
    resolve: async (_p, _a, c) => {
      return c.WishModel.find({});
    },
  })
);

builder.mutationField("createWish", (t) =>
  t.field({
    type: WishRef,
    args: {
      name: t.arg.string({ required: true }),
      description: t.arg.string({ required: true }),
      ownerId: t.arg.string({ required: true }),
      categoryId: t.arg.string({ required: true }),
    },
    validate: WishSchema,
    resolve: async (_p, a, c) => {
      return c.WishModel.create({
        name: a.name,
        description: a.description,
        ownerId: a.ownerId,
        categoryId: a.categoryId,
      });
    },
  })
);
