import type { IUser } from "@repo/common/schemas";
import { getModelForClass, prop } from "@typegoose/typegoose";
import builder from "@/lib/pothos.ts";
import type { DocumentType } from "@/lib/utils/DocumentType.ts";

export class User implements IUser {
  @prop({ type: () => String })
  public name!: string;

  @prop({ unique: true, type: () => String })
  public email!: string;

  @prop({ type: () => String })
  public passwordHash!: string;
}

export const UserRef = builder.objectRef<DocumentType<IUser>>("User");

UserRef.implement({
  description: "A user of the wishlist application",
  fields: (t) => ({
    _id: t.field({
      type: "ID",
      resolve: (parent) => parent._id.toString(),
    }),
    name: t.exposeString("name"),
    email: t.exposeString("email"),
  }),
});

export const UserModel = getModelForClass(User);
