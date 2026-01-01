import { WishRef } from "@/graphql/types/Wish.ts";
import builder from "@/lib/pothos.ts";
import { WishModel } from "@/models/wish.ts";

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
