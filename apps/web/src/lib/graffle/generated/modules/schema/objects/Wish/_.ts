import type * as $Fields from "./fields.js";

export * as Wish from "./fields.js";

/**
 * GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
 *
 * A wish item that will be on a user's wishlist
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
 * | **Fields** | 7 |
 */
export interface Wish {
  kind: "Object";
  name: "Wish";
  fields: {
    __typename: $Fields.__typename;
    _id: $Fields._id;
    category: $Fields.category;
    categoryId: $Fields.categoryId;
    description: $Fields.description;
    name: $Fields.name;
    owner: $Fields.owner;
    ownerId: $Fields.ownerId;
  };
}
