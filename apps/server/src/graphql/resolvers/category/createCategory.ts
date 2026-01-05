import { CategorySchema } from "@repo/common/schemas";
import { CategoryRef } from "@/graphql/types/Category.ts";
import builder from "@/lib/pothos.ts";
import { createCategory } from "@/services/Category.service.ts";

builder.mutationField("createCategory", (t) =>
  t.field({
    type: CategoryRef,
    args: {
      name: t.arg.string({ required: true }),
      description: t.arg.string({ required: true }),
    },
    validate: CategorySchema,
    resolve: (_parent, args) => {
      return createCategory({
        name: args.name,
        description: args.description,
      });
    },
  })
);
