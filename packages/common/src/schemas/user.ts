import z from "zod";
import { documentType, withID } from "../functions";

export const UserSchema = withID({
  name: z.string().min(1).max(100),
  email: z.email(),
  clerkId: z.string(),
});

export interface IUser extends z.infer<typeof UserSchema> {}

export const UserDocumentSchema = documentType(UserSchema.shape);

export interface IUserDocumentSchema extends z.infer<typeof UserDocumentSchema> {}
