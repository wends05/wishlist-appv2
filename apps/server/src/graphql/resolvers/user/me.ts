import { UserRef } from "@/graphql/types/User.ts";
import builder from "@/lib/pothos.ts";
import { UserModel } from "@/models/user.ts";

builder.queryField("me", (t) =>
  t.field({
    type: UserRef,
    nullable: true,
    authScopes: {
      isAuthenticated: true,
    },
    resolve: (_parent, _args, context) => {
      const dbUser = UserModel.findById(context.DbUser._id).exec();
      return dbUser;
    },
  })
);
