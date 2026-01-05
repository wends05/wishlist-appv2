import type { IWish } from "@repo/common/schemas";
import {
  getModelForClass,
  modelOptions,
  prop,
  type Ref,
} from "@typegoose/typegoose";
import type { Types } from "mongoose";
import { Category } from "./category.ts";
import { User } from "./user.ts";

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Wish implements Omit<IWish, "_id" | "ownerId" | "categoryId"> {
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
}

export const WishModel = getModelForClass(Wish);
