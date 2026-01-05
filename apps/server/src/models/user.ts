import type { IUser } from "@repo/common/schemas";
import { getModelForClass, prop } from "@typegoose/typegoose";
import type { Types } from "mongoose";

export class User implements Omit<IUser, "_id"> {
  public _id!: Types.ObjectId;

  @prop({ type: () => String })
  public name!: string;

  @prop({ unique: true, type: () => String })
  public email!: string;

  @prop({ unique: true, type: () => String })
  public clerkId!: string;
}

export const UserModel = getModelForClass(User);
