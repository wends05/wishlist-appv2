import { ChatStatus } from "@repo/common/enums";
import builder from "@/lib/pothos.ts";

export const ChatStatusRef = builder.enumType("ChatStatus", {
  values: ChatStatus.options,
});
