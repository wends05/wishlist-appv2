import { WishRef } from "@/graphql/types/Wish.ts";
import builder from "@/lib/pothos.ts";
import { getMyWishes } from "@/services/Wish.service.ts";

builder.queryField("myWishes", (t) =>
  t.field({
    type: [WishRef],
    authScopes: {
      isAuthenticated: true,
    },
    nullable: false,
    resolve: (_parent, _args, context) => {
      return getMyWishes(context.DbUser._id.toString());
    },
  })
);
