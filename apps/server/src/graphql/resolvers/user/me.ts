import { UserRef } from "@/graphql/types/User.ts";
import builder from "@/lib/pothos.ts";
import { getUserById } from "@/services/User.service.ts";

builder.queryField("me", (t) =>
  t.field({
    type: UserRef,
    nullable: true,
    authScopes: {
      isAuthenticated: true,
    },
    resolve: (_parent, _args, context) => {
      return getUserById(context.DbUser._id);
    },
  })
);
