import {
  CreateWishDTO,
  HomeWishesInputSchema,
  HomeWishesResponseSchema,
  RequestGrantInputSchema,
  WishDetailsSchema,
} from "@repo/common/dto";
import { tryCatch } from "@repo/common/functions";
import { CategoryDocumentSchema, WishItemSchema } from "@repo/common/schemas";
import { createServerFn } from "@tanstack/react-start";
import createClient from "@/lib/graffle/client";

const createWish = createServerFn()
  .inputValidator(CreateWishDTO)
  .handler(async ({ data }) => {
    const client = await createClient();

    const { data: res, error } = await tryCatch(
      client.mutation.createWish({
        $: {
          ...data,
        },
        name: true,
        description: true,
      }),
    );

    if (error) {
      console.error("Error creating wish:", error);
      throw new Error("Failed to create wish");
    }

    return `Created Wish ${res?.name}`;
  });
export default createWish;

export const getCategories = createServerFn().handler(async () => {
  const client = await createClient();

  const { data: res, error } = await tryCatch(
    client
      .gql(
        `
      query GetCategories {
        categories {
          _id
          name
        }
      }
    `,
      )
      .$send(),
  );

  if (error) {
    console.error("Error fetching categories:", error);
    throw new Error("Failed to fetch categories");
  }

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

  const { data: res, error } = await tryCatch(
    client
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
          owner {
            _id
            name
          }
        }
      }
    `,
      )
      .$send(),
  );

  if (error) {
    console.error("Error fetching my wishes:", error);
    throw new Error("Failed to fetch my wishes");
  }

  const parsedWishes = WishItemSchema.array().parse(res?.myWishes);

  return parsedWishes;
});

export const getWishDetails = createServerFn()
  .inputValidator((id: string) => id)
  .handler(async ({ data: id }) => {
    const client = await createClient();
    console.log("Fetching wish details for ID:", id);

    const { data: res, error } = await tryCatch(
      client
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
      `,
        )
        .$send({
          wishId: id,
        }),
    );

    if (error) {
      console.error("Error fetching wish details:", error);
      throw new Error("Failed to fetch wish details");
    }

    console.log("wish received:", res?.wish);

    const parsedWishDetails = WishDetailsSchema.parse(res?.wish);

    return parsedWishDetails;
  });

export const getHomeWishes = createServerFn()
  .inputValidator(HomeWishesInputSchema)
  .handler(async ({ data }) => {
    const client = await createClient();

    const { data: res, error } = await tryCatch(
      client
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
            owner {
              _id
              name
            }
          }
        }
      `,
        )
        .$send({
          search: data.search,
          limit: data.limit,
          skip: data.skip,
          categoryId: data.categoryId,
        }),
    );

    if (error) {
      console.error("Error fetching home wishes:", error);
      return [];
    }

    const parsedWishes = HomeWishesResponseSchema.shape.wishes.parse(res?.home);

    return parsedWishes;
  });

export const requestGrant = createServerFn()
  .inputValidator(RequestGrantInputSchema)
  .handler(async ({ data: { wishId, message } }) => {
    const client = await createClient();

    console.log("Requesting grant for wish ID:", wishId);
    console.log("With message:", message);

    const {
      data: res,
      error,
      success,
    } = await tryCatch(
      client.mutation.requestGrant({
        $: {
          wishId,
          message,
        },
        wish: {
          name: true,
          owner: {
            name: true,
          },
        },
      }),
    );

    console.log(res);

    if (error || !success) {
      console.error("Error requesting grant:", error);
      throw new Error("Failed to request grant");
    }

    return `Requested grant for wish: ${res?.wish?.name} by ${res?.wish?.owner?.name}`;
  });
