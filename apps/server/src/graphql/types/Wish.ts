import builder from "@/lib/pothos.ts";
import type { DocumentType } from "@/lib/utils/DocumentType.ts";
import { CategoryModel } from "@/models/category.ts";
import { UserModel } from "@/models/user.ts";
import type { Wish } from "@/models/wish.ts";
import { CategoryRef } from "./Category.ts";
import { UserRef } from "./User.ts";

type WishDbType = DocumentType<Wish>;

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
