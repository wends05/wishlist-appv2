import { MessageSchema } from "@repo/common/schemas";
import { ChatModel } from "@/models/chat.ts";

interface RequestGrantInput {
  grantorId: string;
  wishId: string;
  message?: string;
}

export const requestGrant = async ({
  grantorId,
  wishId,
  message,
}: RequestGrantInput) => {
  const parsedMessage = MessageSchema.parse({
    senderId: grantorId,
    content: message || "I'd like to request a grant for this wish.",
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  const chat = await ChatModel.create({
    grantorId,
    wishId,
    messages: [parsedMessage],
  });

  return chat;
};
