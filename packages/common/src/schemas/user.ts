import z from "zod";
import { withID } from "../functions";

export const UserSchema = withID({
  name: z.string().min(1).max(100),
  email: z.email(),
});

export interface IUser extends z.infer<typeof UserSchema> {}
