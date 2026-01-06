import type * as $Fields from "./fields.js";

export * as DeliveringWish from "./fields.js";

/**
 * GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
 *
 * A wish that is currently being delivered
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
 * | **Fields** | 11 |
 * | **Implements** | {@link $Schema.BaseWish} |
 */
export interface DeliveringWish {
  kind: "Object";
  name: "DeliveringWish";
  fields: {
    __typename: $Fields.__typename;
    _id: $Fields._id;
    category: $Fields.category;
    categoryId: $Fields.categoryId;
    deliveryDetails: $Fields.deliveryDetails;
    description: $Fields.description;
    grantor: $Fields.grantor;
    grantorId: $Fields.grantorId;
    name: $Fields.name;
    owner: $Fields.owner;
    ownerId: $Fields.ownerId;
    status: $Fields.status;
  };
}
