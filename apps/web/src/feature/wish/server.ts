import {
  CreateWishDTO,
  HomeWishesInputSchema,
  HomeWishesResponseSchema,
} from "@repo/common/dto";
import {
  CategoryDocumentSchema,
  WishDetailsSchema,
  WishItemSchema,
} from "@repo/common/schemas";
import { createServerFn } from "@tanstack/react-start";
import createClient from "@/lib/graffle/client";

const createWish = createServerFn()
  .inputValidator(CreateWishDTO)
  .handler(async ({ data }) => {
    try {
      const client = await createClient();

      const res = await client.mutation.createWish({
        $: {
          ...data,
        },
        name: true,
        description: true,
      });

      return `Created Wish ${res?.name}`;
    } catch (error) {
      console.error(error);
    }
  });
export default createWish;

export const getCategories = createServerFn().handler(async () => {
  const client = await createClient();
  const res = await client
    .gql(
      `
    query GetCategories {
      categories {
        _id
        name
      }
    }
  `
    )
    .$send();

  const parsedCategories = CategoryDocumentSchema.pick({
    _id: true,
    name: true,
  })
    .array()
    .parse(res?.categories);

  return parsedCategories;
});

export const getMyWishes = createServerFn().handler(async () => {
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

export const getWishDetails = createServerFn()
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

export const getHomeWishes = createServerFn()
  .inputValidator(HomeWishesInputSchema)
  .handler(async ({ data }) => {
    try {
      const client = await createClient();
      const res = await client
        .gql(
          `
      query ($search: String, $limit: Int, $skip: Int, $categoryId: String) {
        home(search: $search, limit: $limit, skip: $skip, categoryId: $categoryId) {
          _id
          name
          description
          category {
            _id
            name
          }
        }
      }
    `
        )
        .$send({
          search: data.search,
          limit: data.limit,
          skip: data.skip,
          categoryId: data.categoryId,
        });

      const parsedWishes = HomeWishesResponseSchema.shape.wishes.parse(
        res?.home
      );

      return parsedWishes;
    } catch (error) {
      console.error("Error fetching home wishes:", error);
      return [];
    }
  });
