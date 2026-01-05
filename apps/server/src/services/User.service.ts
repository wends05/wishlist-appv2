import type { IUser } from "@repo/common/schemas";
import type { Types } from "mongoose";
import type { DocumentType } from "@/lib/utils/DocumentType.ts";
import { UserModel } from "@/models/user.ts";

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

export const getAllUsers = async () => {
  return UserModel.find().exec();
};

export const getUserById = async (userId: Types.ObjectId) => {
  return UserModel.findById(userId).exec();
};

export const createUser = async (data: IUser) => {
  return UserModel.create({
    name: data.name,
    email: data.email,
  });
};
