import { CategoryRef } from "@/graphql/types/Category.ts";
import builder from "@/lib/pothos.ts";
import { CategoryModel } from "@/models/category.ts";

builder.queryField("categories", (t) =>
  t.field({
    type: [CategoryRef],
    nullable: true,
    resolve: () => {
      return CategoryModel.find({});
    },
  })
);
