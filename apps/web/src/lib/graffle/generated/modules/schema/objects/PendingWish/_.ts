import type * as $Fields from "./fields.js";

export * as PendingWish from "./fields.js";

/**
 * GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
 *
 * A pending wish that has an accepted grantor
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
 * | **Fields** | 11 |
 * | **Implements** | {@link $Schema.BaseWish} |
 */
export interface PendingWish {
  kind: "Object";
  name: "PendingWish";
  fields: {
    __typename: $Fields.__typename;
    _id: $Fields._id;
    category: $Fields.category;
    categoryId: $Fields.categoryId;
    description: $Fields.description;
    fulfilledAt: $Fields.fulfilledAt;
    grantor: $Fields.grantor;
    grantorId: $Fields.grantorId;
    name: $Fields.name;
    owner: $Fields.owner;
    ownerId: $Fields.ownerId;
    status: $Fields.status;
  };
}
