import type * as $Fields from "./fields.js";

export * as User from "./fields.js";

/**
 * GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
 *
 * A user of the wishlist application
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
 * | **Fields** | 4 |
 */
export interface User {
  kind: "Object";
  name: "User";
  fields: {
    __typename: $Fields.__typename;
    _id: $Fields._id;
    clerkId: $Fields.clerkId;
    email: $Fields.email;
    name: $Fields.name;
  };
}
