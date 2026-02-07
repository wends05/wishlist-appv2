import { RequestGrantInputSchema } from "@repo/common/dto";
import { ChatRef } from "@/graphql/types/Chat.ts";
import builder from "@/lib/pothos.ts";
import { requestGrant } from "@/services/Chat.service.ts";

builder.mutationField("requestGrant", (t) =>
  t.field({
    type: ChatRef,
    args: {
      wishId: t.arg.id({ required: true }),
      message: t.arg.string({ required: true }),
    },
    validate: RequestGrantInputSchema,
    resolve: (_parent, { wishId, message }, context) => {
      console.log("Creating requestGrant chat with:", {
        wishId,
        grantorId: context.DbUser._id.toString(),
        message,
      });
      return requestGrant({
        wishId,
        grantorId: context.DbUser._id.toString(),
        message,
      });
    },
  })
);
