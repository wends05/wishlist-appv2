import type { ICategory } from "@repo/common/schemas";
import { getModelForClass, prop } from "@typegoose/typegoose";
import type { Types } from "mongoose";

export class Category implements Omit<ICategory, "_id"> {
  public _id!: Types.ObjectId;

  @prop({ type: () => String })
  public name!: string;

  @prop({ type: () => String })
  public description!: string;
}

export const CategoryModel = getModelForClass(Category);
