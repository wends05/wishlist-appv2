import z from "zod";
import { withID } from "../functions";

export const WishSchema = withID({
  name: z.string().min(1).max(200),
  description: z.string().min(10).max(1000),
  ownerId: z.string(),
  categoryId: z.string()
});
export interface IWish extends z.infer<typeof WishSchema> {}
