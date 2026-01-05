import { UserRef } from "@/graphql/types/User.ts";
import builder from "@/lib/pothos.ts";
import { getAllUsers } from "@/services/User.service.ts";

builder.queryField("users", (t) =>
  t.field({
    type: [UserRef],
    resolve: () => {
      return getAllUsers();
    },
  })
);
