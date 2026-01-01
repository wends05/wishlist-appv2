import type { IUser } from "@repo/common/schemas";
import { getModelForClass, prop } from "@typegoose/typegoose";

export class User implements IUser {
  @prop({ type: () => String })
  public name!: string;

  @prop({ unique: true, type: () => String })
  public email!: string;

  @prop({ unique: true, type: () => String })
  public clerkId!: string;
}

export const UserModel = getModelForClass(User);
