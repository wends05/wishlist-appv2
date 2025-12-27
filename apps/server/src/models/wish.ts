import type { IWish } from "@repo/common/schemas";
import { getModelForClass, prop, type Ref } from "@typegoose/typegoose";
import { Category } from "./category.ts";
import { User } from "./user.ts";

export class Wish implements Omit<IWish, "ownerId" | "categoryId"> {
  @prop({ type: () => String })
  public name!: string;

  @prop({ type: () => String })
  public description!: string;

  @prop({ ref: () => User })
  public ownerId!: Ref<User>;

  @prop({ ref: () => Category })
  public categoryId!: Ref<Category>;
}

export const WishModel = getModelForClass(Wish);
