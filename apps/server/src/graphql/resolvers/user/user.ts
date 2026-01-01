import { UserRef } from "@/graphql/types/User.ts";
import builder from "@/lib/pothos.ts";
import { UserModel } from "@/models/user.ts";

builder.queryField("users", (t) =>
  t.field({
    type: [UserRef],
    resolve: () => {
      return UserModel.find().exec();
    },
  })
);
