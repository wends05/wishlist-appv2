import type * as $Fields from "./fields.js";

export * as FulfilledWish from "./fields.js";

/**
 * GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
 *
 * A wish that has been fulfilled
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
 * | **Fields** | 12 |
 * | **Implements** | {@link $Schema.BaseWish} |
 */
export interface FulfilledWish {
  kind: "Object";
  name: "FulfilledWish";
  fields: {
    __typename: $Fields.__typename;
    _id: $Fields._id;
    category: $Fields.category;
    categoryId: $Fields.categoryId;
    deliveryDetails: $Fields.deliveryDetails;
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
