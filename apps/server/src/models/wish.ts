import type { IWish } from "@repo/common/schemas";
import {
  getModelForClass,
  isDocument,
  prop,
  type Ref,
} from "@typegoose/typegoose";
import builder from "@/lib/pothos.ts";
import type { DocumentType } from "@/lib/utils/DocumentType.ts";
import { Category, CategoryRef } from "./category.ts";
import { User, UserRef } from "./user.ts";

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

export const WishRef = builder.objectRef<
  Omit<DocumentType<IWish>, "ownerId" | "categoryId"> & {
    ownerId: Ref<User>;
    categoryId: Ref<Category>;
  }
>("Wish");

WishRef.implement({
  description: "A wish item that will be on a user's wishlist",
  fields: (t) => ({
    _id: t.field({
      type: "ID",
      resolve: (parent) => parent._id.toString(),
    }),
    name: t.exposeString("name"),
    description: t.exposeString("description"),
    ownerId: t.field({
      type: "ID",
      resolve: (parent) => {
        return isDocument(parent.ownerId)
          ? parent.ownerId._id.toString()
          : parent.ownerId.toString();
      },
    }),
    owner: t.field({
      type: UserRef,
      resolve: async (parent, _args, context) => {
        return context.UserModel.findById(parent.ownerId).exec();
      },
    }),
    categoryId: t.field({
      type: "ID",
      resolve: (parent) => {
        return isDocument(parent.categoryId)
          ? parent.categoryId._id.toString()
          : parent.categoryId.toString();
      },
    }),
    category: t.field({
      type: CategoryRef,
      resolve: async (parent, _args, context) => {
        return context.CategoryModel.findById(parent.categoryId).exec();
      },
    }),
  }),
});

export const WishModel = getModelForClass(Wish);
