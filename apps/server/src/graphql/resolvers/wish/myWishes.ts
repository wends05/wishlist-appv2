import { WishRef } from "@/graphql/types/Wish.ts";
import builder from "@/lib/pothos.ts";
import { WishModel } from "@/models/wish.ts";

builder.queryField("myWishes", (t) =>
  t.field({
    type: [WishRef],
    authScopes: {
      isAuthenticated: true,
    },
    nullable: false,
    resolve: (_parent, _args, context) => {
      return WishModel.find({
        ownerId: context.DbUser
      })
    }
  }))
