import builder from "@/lib/pothos.ts";
import type { DocumentType } from "@/lib/utils/DocumentType.ts";
import { CategoryModel } from "@/models/category.ts";
import { UserModel } from "@/models/user.ts";
import {
  BaseWish,
  DeliveringWish,
  DeliveryDetails,
  FulfilledWish,
  OpenWish,
  PendingWish,
} from "@/models/wish.ts";
import { CategoryRef } from "./Category.ts";
import { UserRef } from "./User.ts";

export const DeliveryDetailsRef = builder.objectRef<DeliveryDetails>(
  DeliveryDetails.name
);

DeliveryDetailsRef.implement({
  description: "Details about the delivery of a wish item",
  fields: (t) => ({
    trackingNumber: t.exposeString("trackingNumber"),
    carrier: t.exposeString("carrier"),
    estimatedDeliveryDate: t.expose("estimatedDeliveryDate", { type: "Date" }),
  }),
});

/**
 * Implementing the Base Wish GraphQL Type (Interface)
 */
export const BaseWishRef = builder.interfaceRef<DocumentType<BaseWish>>(
  BaseWish.name
);

BaseWishRef.implement({
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

    status: t.exposeString("status"),
  }),
});

//======================================================================
// Implementing the Wish Sub Types
//======================================================================

function isWish(item: unknown): item is BaseWish {
  return typeof item === "object" && item !== null && "status" in item;
}

export const OpenWishRef = builder.objectRef<DocumentType<OpenWish>>(
  OpenWish.name
);

OpenWishRef.implement({
  description: "An open wish that is available for requests",
  interfaces: [BaseWishRef],
  isTypeOf: (data) => isWish(data) && data.status === "open",
});

export const PendingWishRef = builder.objectRef<DocumentType<PendingWish>>(
  PendingWish.name
);
PendingWishRef.implement({
  description: "A pending wish that has an accepted grantor",
  interfaces: [BaseWishRef],
  isTypeOf: (data) => isWish(data) && data.status === "pending",
  fields: (t) => ({
    fulfilledAt: t.expose("fulfilledAt", { type: "Date" }),
    grantorId: t.field({
      type: "ID",
      resolve: (parent) => parent.grantorId.toString(),
    }),
    grantor: t.field({
      type: UserRef,
      resolve: async (parent) => {
        return UserModel.findById(parent.grantorId).exec();
      },
    }),
  }),
});

export const DeliveringWishRef = builder.objectRef<
  DocumentType<DeliveringWish>
>(DeliveringWish.name);

DeliveringWishRef.implement({
  description: "A wish that is currently being delivered",
  interfaces: [BaseWishRef],
  isTypeOf: (data) => isWish(data) && data.status === "delivering",
  fields: (t) => ({
    grantorId: t.field({
      type: "ID",
      resolve: (parent) => parent.grantorId.toString(),
    }),
    grantor: t.field({
      type: UserRef,
      resolve: async (parent) => {
        return UserModel.findById(parent.grantorId).exec();
      },
    }),
    deliveryDetails: t.field({
      type: DeliveryDetailsRef,
      resolve: (parent) => parent.deliveryDetails,
    }),
  }),
});

export const FulfilledWishRef = builder.objectRef<DocumentType<FulfilledWish>>(
  FulfilledWish.name
);
FulfilledWishRef.implement({
  description: "A wish that has been fulfilled",
  interfaces: [BaseWishRef],
  isTypeOf: (data) => isWish(data) && data.status === "fulfilled",
  fields: (t) => ({
    fulfilledAt: t.expose("fulfilledAt", { type: "Date" }),
    grantorId: t.field({
      type: "ID",
      resolve: (parent) => parent.grantorId.toString(),
    }),
    grantor: t.field({
      type: UserRef,
      resolve: async (parent) => {
        return UserModel.findById(parent.grantorId).exec();
      },
    }),
    deliveryDetails: t.field({
      type: DeliveryDetailsRef,
      resolve: (parent) => parent.deliveryDetails,
    }),
  }),
});
