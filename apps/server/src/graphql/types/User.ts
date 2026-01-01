import builder from "@/lib/pothos.ts";
import type { DocumentType } from "@/lib/utils/DocumentType.ts";
import type { User } from "@/models/user.ts";

type UserRefType = DocumentType<User>;

export const UserRef = builder.objectRef<UserRefType>("User");

UserRef.implement({
  description: "A user of the wishlist application",
  fields: (t) => ({
    _id: t.field({
      type: "ID",
      resolve: (parent) => parent._id.toString(),
    }),
    name: t.exposeString("name"),
    email: t.exposeString("email"),
    clerkId: t.exposeString("clerkId"),
  }),
});
