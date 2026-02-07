import { UserDocumentSchema } from "@repo/common/schemas";
import { createServerFn } from "@tanstack/react-start";
import createClient from "@/lib/graffle/client";

export const getUser = createServerFn().handler(async () => {
  const client = await createClient();

  const query = await client
    .gql(
      `
    query me {
      me {
        _id
        name
        email
        clerkId
      }
    }`,
    )
    .$send();

  if (!query?.me) {
    throw new Error("Unauthorized");
  }

  const parsedUser = UserDocumentSchema.parse(query.me);

  return parsedUser;
});
