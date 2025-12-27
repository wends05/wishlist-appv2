import z from "zod";
import { withID } from "../functions";

export const CategorySchema = withID({
  name: z.string().min(1).max(100),
  description: z.string().max(500).optional(),
});

export interface ICategory extends z.infer<typeof CategorySchema> {}
