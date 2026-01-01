import type z from "zod";
import { WishSchema } from "../schemas";

export const CreateWishDTO = WishSchema.omit({
  _id: true,
});
export type CreateWishDTO = z.infer<typeof CreateWishDTO>;
