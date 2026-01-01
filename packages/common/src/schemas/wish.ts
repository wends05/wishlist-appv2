import z from "zod";
import { documentType, withID } from "../functions";
import { CategorySchema } from "./category";
import { UserSchema } from "./user";

export const WishSchema = withID({
  name: z.string().min(1).max(200),
  description: z.string().min(10).max(1000),
  ownerId: z.string(),
  categoryId: z.string(),
});

export interface IWish extends z.infer<typeof WishSchema> {}


export const WishDocumentSchema = documentType(WishSchema.shape);

export interface IWishDocumentSchema extends z.infer<typeof WishDocumentSchema>{}

/**
 * Used for rendering the Wish Item Card in the Wishes
 */
export const WishItemSchema = WishSchema.pick({
  name: true,
}).extend({
  _id: WishSchema.shape._id.nonoptional(),
  category: CategorySchema.pick({
    _id: true,
    name: true,
  }),
});

export interface IWishItem extends z.infer<typeof WishItemSchema> {}

/**
 * Full Details of the Wish for Wish Details Page
 */
export const WishDetailsSchema = WishSchema.omit({
  categoryId: true,
  ownerId: true,
}).extend({
  category: CategorySchema,
  owner: UserSchema.pick({
    _id: true,
    name: true,
    email: true,
  }),
});

export interface IWishDetails extends z.infer<typeof WishDetailsSchema> {}
