import type { ICategory } from "@repo/common/schemas";
import builder from "@/lib/pothos.ts";
import type { DocumentType } from "@/lib/utils/DocumentType.ts";

export const CategoryRef =
  builder.objectRef<DocumentType<ICategory>>("Category");

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
