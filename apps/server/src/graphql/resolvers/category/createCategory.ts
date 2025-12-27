import { CategorySchema } from "@repo/common/schemas";
import { CategoryRef } from "@/graphql/types/Category.ts";
import builder from "@/lib/pothos.ts";
import { CategoryModel } from "@/models/category.ts";

builder.mutationField("createCategory", (t) =>
  t.field({
    type: CategoryRef,
    args: {
      name: t.arg.string({ required: true }),
      description: t.arg.string({ required: true }),
    },
    validate: CategorySchema,
    resolve: (_parent, args) => {
      return CategoryModel.create({
        name: args.name,
        description: args.description,
      });
    },
  })
);
