import { WishRef } from "@/graphql/types/Wish.ts";
import builder from "@/lib/pothos.ts";
import { WishModel } from "@/models/wish.ts";

builder.queryField("wishes", (t) =>
  t.field({
    type: [WishRef],
    nullable: true,
    resolve: () => {
      return WishModel.find({});
    },
  })
);
