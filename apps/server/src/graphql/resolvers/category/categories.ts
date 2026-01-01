import { CategoryRef } from "@/graphql/types/Category.ts";
import builder from "@/lib/pothos.ts";
import { CategoryModel } from "@/models/category.ts";

builder.queryField("categories", (t) =>
  t.field({
    type: [CategoryRef],
    resolve: () => {
      return CategoryModel.find({});
    },
  })
);
