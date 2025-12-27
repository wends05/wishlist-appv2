import { ChatStatus } from "@repo/common/enums";
import type { IChat, IMessage } from "@repo/common/schemas";
import {
  getModelForClass,
  modelOptions,
  prop,
  type Ref,
  Severity,
} from "@typegoose/typegoose";
import { User } from "./user.ts";
import { Wish } from "./wish.ts";

@modelOptions({
  schemaOptions: {
    timestamps: true,
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

export class Chat implements Omit<IChat, "grantorId" | "wisherId" | "wishId"> {
  @prop({ ref: () => User })
  public grantorId!: Ref<User>;

  @prop({ ref: () => User })
  public wisherId!: Ref<User>;

  @prop({ ref: () => Wish })
  public wishId!: Ref<Wish>;

  @prop({ enum: ChatStatus.options })
  public status!: IChat["status"];

  @prop({ type: () => [Message] })
  public messages!: IChat["messages"];
}

export const ChatModel = getModelForClass(Chat);
