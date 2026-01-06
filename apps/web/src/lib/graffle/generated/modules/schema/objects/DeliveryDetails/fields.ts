import type { Schema as $Schema } from "../../_.js";

/**
 * GraphQL `__typename` meta-field. The name of the object type currently being queried.
 *
 * Type: `"DeliveryDetails"`
 *
 * {@link https://graphql.org/learn/queries/#meta-fields | GraphQL __typename documentation}
 */
export interface __typename {
  kind: "OutputField";
  name: "__typename";
  arguments: {};
  inlineType: [1];
  namedType: {
    kind: "__typename";
    value: "DeliveryDetails";
  };
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.DeliveryDetails}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.String} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.DeliveryDetails} |
 * | **Path** | `DeliveryDetails.carrier` |
 * | **Nullability** | Optional |
 */
export interface carrier {
  kind: "OutputField";
  name: "carrier";
  arguments: {};
  inlineType: [0];
  namedType: $Schema.String;
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.DeliveryDetails}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Date} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
 * | **Parent** | {@link $Schema.DeliveryDetails} |
 * | **Path** | `DeliveryDetails.estimatedDeliveryDate` |
 * | **Nullability** | Optional |
 */
export interface estimatedDeliveryDate {
  kind: "OutputField";
  name: "estimatedDeliveryDate";
  arguments: {};
  inlineType: [0];
  namedType: $Schema.Date;
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.DeliveryDetails}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.String} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.DeliveryDetails} |
 * | **Path** | `DeliveryDetails.trackingNumber` |
 * | **Nullability** | Optional |
 */
export interface trackingNumber {
  kind: "OutputField";
  name: "trackingNumber";
  arguments: {};
  inlineType: [0];
  namedType: $Schema.String;
}
