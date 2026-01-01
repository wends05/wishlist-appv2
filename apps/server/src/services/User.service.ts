import { DocumentType } from "@/lib/utils/DocumentType.ts";
import { UserModel } from "@/models/user.ts";
import { IUser } from "@repo/common/schemas";

export const fetchOrCreateUserByClerkId = async (
  clerkId: string,
  data: IUser
) => {
  let user: DocumentType<IUser>;

  const existingUser = await UserModel.findOne({ clerkId }).exec();
  if (existingUser) {
    user = existingUser;
  } else {
    user = await UserModel.create({ ...data, clerkId });
  }

  return user;
};
