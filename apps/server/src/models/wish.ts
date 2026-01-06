import { WishStatus } from "@repo/common/enums";
import type {
  IBaseWish,
  IDeliveringWish,
  IDeliveringWishDetails,
  IFulfilledWish,
  IOpenWish,
  IPendingWish,
} from "@repo/common/schemas";
import {
  getDiscriminatorModelForClass,
  getModelForClass,
  modelOptions,
  prop,
  type Ref,
  Severity,
} from "@typegoose/typegoose";
import type { Types } from "mongoose";
import { Category } from "./category.ts";
import { User } from "./user.ts";

/**
 * Delivery Details Sub Document
 */
@modelOptions({
  schemaOptions: {
    _id: false,
  },
})
export class DeliveryDetails implements IDeliveringWishDetails {
  @prop({ type: () => String })
  public trackingNumber!: string;

  @prop({ type: () => String })
  public carrier!: string;

  @prop({ type: () => Date })
  public estimatedDeliveryDate!: Date;
}

type OmitWishFields = "_id" | "ownerId" | "categoryId" | "grantorId";

/**
 * Base Wish Model
 */
@modelOptions({
  schemaOptions: {
    timestamps: true,
    discriminatorKey: "status",
    collection: "wishes",
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
export class BaseWish implements Omit<IBaseWish, OmitWishFields> {
  public _id!: Types.ObjectId;

  @prop({ type: () => String })
  public name!: string;

  @prop({ type: () => String })
  public description!: string;

  @prop({ ref: () => User })
  public ownerId!: Ref<User>;

  @prop({ ref: () => Category })
  public categoryId!: Ref<Category>;

  @prop({ type: () => Date })
  public createdAt!: Date;

  @prop({ type: () => Date })
  public updatedAt!: Date;

  @prop({
    type: () => String,
    enum: WishStatus.options,
    default: WishStatus.enum.open,
  })
  public status!: string;
}

/**
 * Open Wish - No grantor yet, available for requests
 */
export class OpenWish
  extends BaseWish
  implements Omit<IOpenWish, OmitWishFields> {}

/**
 * Pending Wish - Owner accepted a grantor
 */
export class PendingWish
  extends BaseWish
  implements Omit<IPendingWish, OmitWishFields>
{
  @prop({ type: () => Date })
  public fulfilledAt!: Date;

  @prop({ ref: () => User })
  public grantorId!: Ref<User>;
}

/**
 * Delivering Wish - Item is being delivered
 */
export class DeliveringWish
  extends BaseWish
  implements
    Omit<IDeliveringWish, "_id" | "ownerId" | "categoryId" | "grantorId">
{
  @prop({ ref: () => User })
  public grantorId!: Ref<User>;

  @prop({ type: () => DeliveryDetails })
  public deliveryDetails!: DeliveryDetails;
}

/**
 * Fulfilled Wish - Item has been delivered/received
 */
export class FulfilledWish
  extends BaseWish
  implements Omit<IFulfilledWish, OmitWishFields>
{
  @prop({ type: () => Date })
  public fulfilledAt!: Date;

  @prop({ ref: () => User })
  public grantorId!: Ref<User>;

  @prop({ type: () => DeliveryDetails })
  public deliveryDetails!: DeliveryDetails;
}

export const WishModel = getModelForClass(BaseWish);

export const OpenWishModel = getDiscriminatorModelForClass(
  WishModel,
  OpenWish,
  WishStatus.enum.open
);

export const PendingWishModel = getDiscriminatorModelForClass(
  WishModel,
  PendingWish,
  WishStatus.enum.pending
);

export const DeliveringWishModel = getDiscriminatorModelForClass(
  WishModel,
  DeliveringWish,
  WishStatus.enum.delivering
);

export const FulfilledWishModel = getDiscriminatorModelForClass(
  WishModel,
  FulfilledWish,
  WishStatus.enum.fulfilled
);
