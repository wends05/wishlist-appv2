import { CategoryRef } from "@/graphql/types/Category.ts";
import builder from "@/lib/pothos.ts";
import { getAllCategories } from "@/services/Category.service.ts";

builder.queryField("categories", (t) =>
  t.field({
    type: [CategoryRef],
    resolve: () => {
      return getAllCategories();
    },
  })
);
