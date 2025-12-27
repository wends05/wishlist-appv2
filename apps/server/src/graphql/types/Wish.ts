import type { IWish } from "@repo/common/schemas";
import type { Ref } from "@typegoose/typegoose";
import builder from "@/lib/pothos.ts";
import type { DocumentType } from "@/lib/utils/DocumentType.ts";
import { type Category, CategoryModel } from "@/models/category.ts";
import { type User, UserModel } from "@/models/user.ts";
import { CategoryRef } from "./Category.ts";
import { UserRef } from "./User.ts";

type WishDbType = Omit<DocumentType<IWish>, "ownerId" | "categoryId"> & {
  ownerId: Ref<User>;
  categoryId: Ref<Category>;
};

export const WishRef = builder.objectRef<WishDbType>("Wish");

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
      resolve: (parent) => parent.ownerId.toString(),
    }),
    owner: t.field({
      type: UserRef,
      resolve: async (parent) => {
        return UserModel.findById(parent.ownerId).exec();
      },
    }),
    categoryId: t.field({
      type: "ID",
      resolve: (parent) => parent.categoryId.toString(),
    }),
    category: t.field({
      type: CategoryRef,
      resolve: async (parent) => {
        return CategoryModel.findById(parent.categoryId).exec();
      },
    }),
  }),
});
