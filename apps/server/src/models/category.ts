import type { ICategory } from "@repo/common/schemas";
import { getModelForClass, prop } from "@typegoose/typegoose";

export class Category implements ICategory {
  @prop({ type: () => String })
  public name!: string;

  @prop({ type: () => String })
  public description?: string;
}

export const CategoryModel = getModelForClass(Category);
