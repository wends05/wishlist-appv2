import type * as $Fields from "./fields.js";

export * as DeliveryDetails from "./fields.js";

/**
 * GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
 *
 * Details about the delivery of a wish item
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
 * | **Fields** | 3 |
 */
export interface DeliveryDetails {
  kind: "Object";
  name: "DeliveryDetails";
  fields: {
    __typename: $Fields.__typename;
    carrier: $Fields.carrier;
    estimatedDeliveryDate: $Fields.estimatedDeliveryDate;
    trackingNumber: $Fields.trackingNumber;
  };
}
