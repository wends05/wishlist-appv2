import type { IMessage } from "@repo/common/schemas";
import { ChatStatusRef } from "@/graphql/enums/ChatStatus.ts";
import builder from "@/lib/pothos.ts";
import type { DocumentType } from "@/lib/utils/DocumentType.ts";
import type { Chat } from "@/models/chat.ts";
import { UserModel } from "@/models/user.ts";
import { WishModel } from "@/models/wish.ts";
import { UserRef } from "./User.ts";
import { WishRef } from "./Wish.ts";

export const MessageRef = builder.objectRef<IMessage>("Message");

MessageRef.implement({
  description: "A message sent in a chat between a wisher and a grantor",
  fields: (t) => ({
    senderId: t.field({
      type: "ID",
      resolve: (parent) => {
        return parent.senderId.toString();
      },
    }),
    sender: t.field({
      type: UserRef,
      resolve: (parent) => {
        return UserModel.findById(parent.senderId).exec();
      },
    }),
    content: t.exposeString("content"),
    createdAt: t.expose("createdAt", {
      type: "Date",
    }),
    updatedAt: t.expose("updatedAt", {
      type: "Date",
    }),
  }),
});

export type ChatDbType = DocumentType<Chat>;

export const ChatRef = builder.objectRef<ChatDbType>("Chat");

ChatRef.implement({
  description: "A chat between a wisher and a grantor about a wish",
  fields: (t) => ({
    _id: t.field({
      type: "ID",
      resolve: (parent) => parent._id.toString(),
    }),

    // Grantor Fields
    grantorId: t.field({
      type: "ID",
      resolve: (parent) => {
        return parent.grantorId.toString();
      },
    }),
    grantor: t.field({
      type: UserRef,
      resolve: (parent) => {
        return UserModel.findById(parent.grantorId).exec();
      },
    }),

    // Wisher Fields
    wisherId: t.field({
      type: "ID",
      resolve: (parent) => {
        return parent.wisherId.toString();
      },
    }),
    wisher: t.field({
      type: UserRef,
      resolve: (parent) => {
        return UserModel.findById(parent.wisherId).exec();
      },
    }),

    // Wish Fields
    wishId: t.field({
      type: "ID",
      resolve: (parent) => {
        return parent.wishId.toString();
      },
    }),
    wish: t.field({
      type: WishRef,
      resolve: (parent) => {
        return WishModel.findById(parent.wishId).exec();
      },
    }),

    status: t.expose("status", { type: ChatStatusRef }),
    messages: t.field({
      type: [MessageRef],
      resolve: (parent) => parent.messages ??[],
    }),
  }),
});
