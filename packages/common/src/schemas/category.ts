import z from "zod";
import { withID } from "../functions";

export const CategorySchema = withID({
  name: z.string().min(1).max(100),
  description: z.string().max(500)
});

export interface ICategory extends z.infer<typeof CategorySchema> {}

export const CategoryDocumentSchema = CategorySchema.extend({
  _id: z.string()
})

export interface ICategoryDocumentSchema extends z.infer<typeof CategoryDocumentSchema> {}
