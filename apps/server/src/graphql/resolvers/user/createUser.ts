import { UserSchema } from "@repo/common/schemas";
import { UserRef } from "@/graphql/types/User.ts";
import builder from "@/lib/pothos.ts";
import { UserModel } from "@/models/user.ts";

builder.mutationField("createUser", (t) =>
  t.field({
    type: UserRef,
    args: {
      name: t.arg.string({ required: true }),
      email: t.arg.string({ required: true }),
    },
    validate: UserSchema,
    resolve: async (_parent, args) => {
      return UserModel.create({
        name: args.name,
        email: args.email,
      });
    },
  })
);
