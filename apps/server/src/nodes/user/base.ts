import builder from "@/lib/pothos.ts";
import { UserRef } from "@/models/user.ts";

builder.queryField("user", (t) =>
  t.field({
    type: [UserRef],
    resolve: async (_p, _a, c) => {
      return c.UserModel.find().exec();
    },
  })
);
