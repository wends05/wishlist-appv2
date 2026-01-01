import createClient from "@/lib/graffle/client";
import { WishItemSchema } from "@repo/common/schemas";
import { createServerFn } from "@tanstack/react-start";

const getMyWishes = createServerFn().handler(async () => {
  const client = await createClient();

  const res = await client
    .gql(
      `
    query GetMyWishes {
      myWishes {
        _id
        name
        category {
          _id
          name
        }
      }
    }
  `
    )
    .$send();

  const parsedWishes = WishItemSchema.array().parse(res?.myWishes);

  return parsedWishes;
});
export default getMyWishes;
