import type { IUser } from "@repo/common/schemas";
import builder from "@/lib/pothos.ts";
import type { DocumentType } from "@/lib/utils/DocumentType.ts";

export const UserRef = builder.objectRef<DocumentType<IUser>>("User");

UserRef.implement({
  description: "A user of the wishlist application",
  fields: (t) => ({
    _id: t.field({
      type: "ID",
      resolve: (parent) => parent._id.toString(),
    }),
    name: t.exposeString("name"),
    email: t.exposeString("email"),
  }),
});
