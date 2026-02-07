import z from "zod";
import { withNonEmptyID } from "../functions";
import {
  BaseWishSchema,
  CategorySchema,
  UserSchema,
  WishItemSchema,
} from "../schemas";

//===
// Create Wish DTO
//===
export const CreateWishDTO = BaseWishSchema.omit({
  _id: true,
  ownerId: true,
  status: true
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

//===
// Get Wish Details Response DTO
//===
export const WishDetailsSchema = withNonEmptyID(
  BaseWishSchema.pick({
    _id: true,
    name: true,
    description: true,
  }).extend({
    category: withNonEmptyID(
      CategorySchema.pick({
        _id: true,
        name: true,
      }).shape
    ),
    owner: withNonEmptyID(
      UserSchema.pick({
        _id: true,
        name: true,
      }).shape
    ),
  }).shape
);
export type WishDetails = z.infer<typeof WishDetailsSchema>;

//===
// Request Grant Input DTOs
//===
export const RequestGrantInputSchema = z.object({
  wishId: z.string(),
  message: z.string().min(10).max(1000),
});
export type RequestGrantInput = z.infer<typeof RequestGrantInputSchema>;
