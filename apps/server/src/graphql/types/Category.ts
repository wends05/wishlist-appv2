import builder from "@/lib/pothos.ts";
import type { DocumentType } from "@/lib/utils/DocumentType.ts";
import type { Category } from "@/models/category.ts";

export const CategoryRef =
  builder.objectRef<DocumentType<Category>>("Category");

CategoryRef.implement({
  description: "A category for organizing wishes",
  fields: (t) => ({
    _id: t.field({
      type: "ID",
      resolve: (parent) => parent._id.toString(),
    }),
    name: t.exposeString("name"),
    description: t.exposeString("description", { nullable: true }),
  }),
});
