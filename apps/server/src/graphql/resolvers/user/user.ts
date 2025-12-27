import { UserRef } from "@/graphql/types/User.ts";
import builder from "@/lib/pothos.ts";
import { UserModel } from "@/models/user.ts";

builder.queryField("user", (t) =>
  t.field({
    type: [UserRef],
    resolve: () => {
      return UserModel.find().exec();
    },
  })
);
