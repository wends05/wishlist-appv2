import createClient from "@/lib/graffle/client";
import { WishDetailsSchema } from "@repo/common/schemas";
import { createServerFn } from "@tanstack/react-start";

const getWishDetails = createServerFn()
  .inputValidator((id: string) => id)
  .handler(async ({ data: id }) => {
    try {
      const client = await createClient();
      console.log("Fetching wish details for ID:", id);
      const res = await client
        .gql(
          `
      query ($wishId: String!) {
        wish(wishId: $wishId) {
          _id
          name
          description
          owner {
            _id
            name
            email
          }
          category {
            _id
            name
            description
          }
        }
      }
    `
        )
        .$send({
          wishId: id,
        });

      console.log("wish received:", res?.wish);

      const parsedWishDetails = WishDetailsSchema.parse(res?.wish);

      return parsedWishDetails;
    } catch (error) {
      console.error("Error fetching wish details:", error);
    }
  });

export default getWishDetails;
