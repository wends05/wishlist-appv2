import type * as $Fields from "./fields.js";

export * as OpenWish from "./fields.js";

/**
 * GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
 *
 * An open wish that is available for requests
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
 * | **Fields** | 8 |
 * | **Implements** | {@link $Schema.BaseWish} |
 */
export interface OpenWish {
  kind: "Object";
  name: "OpenWish";
  fields: {
    __typename: $Fields.__typename;
    _id: $Fields._id;
    category: $Fields.category;
    categoryId: $Fields.categoryId;
    description: $Fields.description;
    name: $Fields.name;
    owner: $Fields.owner;
    ownerId: $Fields.ownerId;
    status: $Fields.status;
  };
}
