import z from "zod";
import { ChatStatus } from "../enums/ChatStatus";
import { withID, withTimestamps } from "../functions";

export const MessageSchema = withTimestamps({
  senderId: z.string().min(1),
  content: z.string().min(1).max(1000),
});

export interface IMessage extends z.infer<typeof MessageSchema> {}

export const ChatSchema = withID({
  wishId: z.string().min(1),
  wisherId: z.string().min(1),
  grantorId: z.string().min(1),
  status: ChatStatus,
  messages: z.array(MessageSchema),
});

export interface IChat extends z.infer<typeof ChatSchema> {}
