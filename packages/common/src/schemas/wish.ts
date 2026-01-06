import z from "zod";
import { WishStatus } from "../enums/WishStatus";
import { documentType, withID, withNonEmptyID } from "../functions";
import { CategorySchema } from "./category";
import { UserSchema } from "./user";

const BaseWishFields = {
  name: z.string().min(1).max(200),
  description: z.string().min(10).max(1000),
  ownerId: z.string(),
  categoryId: z.string(),
};

export const BaseWishSchema = withID(BaseWishFields);

export interface IBaseWish extends z.infer<typeof BaseWishSchema> {}

export const OpenWishSchema = BaseWishSchema.extend({
  status: WishStatus.enum.open,
});

export interface IOpenWish extends z.infer<typeof OpenWishSchema> {}

export const PendingWishSchema = BaseWishSchema.extend({
  status: WishStatus.enum.pending,
  fulfilledAt: z.date(),
  grantorId: z.string(),
});

export interface IPendingWish extends z.infer<typeof PendingWishSchema> {}

export const DeliveringWishDetailsSchema = z.object({
  trackingNumber: z.string().min(1).max(100),
  carrier: z.string().min(1).max(100),
  estimatedDeliveryDate: z.date(),
});

export interface IDeliveringWishDetails
  extends z.infer<typeof DeliveringWishDetailsSchema> {}

export const DeliveringWishSchema = BaseWishSchema.extend({
  status: WishStatus.enum.delivering,
  grantorId: z.string(),
  deliveryDetails: DeliveringWishDetailsSchema,
});

export interface IDeliveringWish extends z.infer<typeof DeliveringWishSchema> {}

export const FulfilledWishSchema = BaseWishSchema.extend({
  status: WishStatus.enum.fulfilled,
  fulfilledAt: z.date(),
  grantorId: z.string(),
  deliveryDetails: DeliveringWishDetailsSchema,
});

export interface IFulfilledWish extends z.infer<typeof FulfilledWishSchema> {}

export const WishSchema = z.discriminatedUnion("status", [
  OpenWishSchema,
  PendingWishSchema,
  DeliveringWishSchema,
  FulfilledWishSchema,
]);

export const WishDocumentSchema = z.discriminatedUnion("status", [
  documentType(
    BaseWishSchema.extend({
      status: z.literal("open"),
    }).shape
  ),
  documentType(
    BaseWishSchema.extend({
      status: z.literal("pending"),
      fulfilledAt: z.date(),
      grantorId: z.string(),
    }).shape
  ),
  documentType(
    BaseWishSchema.extend({
      status: z.literal("delivering"),
      grantorId: z.string(),
      deliveryDetails: z.object({
        trackingNumber: z.string().min(1).max(100),
        carrier: z.string().min(1).max(100),
        estimatedDeliveryDate: z.date(),
      }),
    }).shape
  ),
  documentType(
    BaseWishSchema.extend({
      status: z.literal("fulfilled"),
      fulfilledAt: z.date(),
      grantorId: z.string(),
    }).shape
  ),
]);

/**
 * Used for rendering the Wish Item Card in the Wishes
 */
export const WishItemSchema = withNonEmptyID(
  BaseWishSchema.pick({
    _id: true,
    name: true,
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

export interface IWishItem extends z.infer<typeof WishItemSchema> {}
