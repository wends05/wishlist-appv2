import z from "zod";
import { WishItemSchema, WishSchema } from "../schemas";

//===
// Create Wish DTO
//===
export const CreateWishDTO = WishSchema.omit({
  _id: true,
});
export type CreateWishDTO = z.infer<typeof CreateWishDTO>;

//===
// Get Wishes Input & Response DTOs
//===
export const HomeWishesInputSchema = z.object({
  search: z.string().optional(),
  limit: z.number().min(1).max(100).optional().default(10),
  skip: z.number().optional(),
  categoryId: z.string().optional(),
});
export type HomeWishesInput = z.infer<typeof HomeWishesInputSchema>;

export const HomeWishesResponseSchema = z.object({
  wishes: z.array(WishItemSchema),
  nextCursor: z.string().optional().nullable(),
});
export type HomeWishesResponse = z.infer<typeof HomeWishesResponseSchema>;
