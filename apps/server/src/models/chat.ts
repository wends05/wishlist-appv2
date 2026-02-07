import { ChatStatus } from "@repo/common/enums";
import type { IChat, IMessage } from "@repo/common/schemas";
import {
  getModelForClass,
  index,
  modelOptions,
  prop,
  type Ref,
  Severity,
} from "@typegoose/typegoose";
import type { Types } from "mongoose";
import { User } from "./user.ts";
import { BaseWish } from "./wish.ts";

@modelOptions({
  schemaOptions: {
    timestamps: true,
    _id: false,
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
export class Message implements Omit<IMessage, "senderId"> {
  @prop({ ref: () => User })
  public senderId!: Ref<User>;

  @prop({ type: () => String })
  public content!: string;

  @prop({ type: () => Date })
  public createdAt!: Date;

  @prop({ type: () => Date })
  public updatedAt!: Date;
}

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
@index({ grantorId: 1, wishId: 1 }, { unique: true })
export class Chat
  implements Omit<IChat, "_id" | "grantorId" | "wisherId" | "wishId">
{
  public _id!: Types.ObjectId;

  @prop({ ref: () => User })
  public grantorId!: Ref<User>;

  @prop({ ref: () => BaseWish })
  public wishId!: Ref<BaseWish>;

  @prop({
    type: () => String,
    enum: ChatStatus.options,
    default: ChatStatus.enum.PENDING,
  })
  public status!: IChat["status"];

  @prop({ type: () => [Message] })
  public messages!: IChat["messages"];
}

export const ChatModel = getModelForClass(Chat);
