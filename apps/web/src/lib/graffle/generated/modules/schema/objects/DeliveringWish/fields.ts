import type { Schema as $Schema } from "../../_.js";

/**
 * GraphQL `__typename` meta-field. The name of the object type currently being queried.
 *
 * Type: `"DeliveringWish"`
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
    value: "DeliveringWish";
  };
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.DeliveringWish}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.ID} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.DeliveringWish} |
 * | **Path** | `DeliveringWish._id` |
 * | **Nullability** | Optional |
 */
export interface _id {
  kind: "OutputField";
  name: "_id";
  arguments: {};
  inlineType: [0];
  namedType: $Schema.ID;
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.DeliveringWish}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Category} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
 * | **Parent** | {@link $Schema.DeliveringWish} |
 * | **Path** | `DeliveringWish.category` |
 * | **Nullability** | Optional |
 */
export interface category {
  kind: "OutputField";
  name: "category";
  arguments: {};
  inlineType: [0];
  namedType: $Schema.Category;
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.DeliveringWish}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.ID} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.DeliveringWish} |
 * | **Path** | `DeliveringWish.categoryId` |
 * | **Nullability** | Optional |
 */
export interface categoryId {
  kind: "OutputField";
  name: "categoryId";
  arguments: {};
  inlineType: [0];
  namedType: $Schema.ID;
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.DeliveringWish}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.DeliveryDetails} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
 * | **Parent** | {@link $Schema.DeliveringWish} |
 * | **Path** | `DeliveringWish.deliveryDetails` |
 * | **Nullability** | Optional |
 */
export interface deliveryDetails {
  kind: "OutputField";
  name: "deliveryDetails";
  arguments: {};
  inlineType: [0];
  namedType: $Schema.DeliveryDetails;
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.DeliveringWish}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.String} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.DeliveringWish} |
 * | **Path** | `DeliveringWish.description` |
 * | **Nullability** | Optional |
 */
export interface description {
  kind: "OutputField";
  name: "description";
  arguments: {};
  inlineType: [0];
  namedType: $Schema.String;
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.DeliveringWish}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.User} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
 * | **Parent** | {@link $Schema.DeliveringWish} |
 * | **Path** | `DeliveringWish.grantor` |
 * | **Nullability** | Optional |
 */
export interface grantor {
  kind: "OutputField";
  name: "grantor";
  arguments: {};
  inlineType: [0];
  namedType: $Schema.User;
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.DeliveringWish}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.ID} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.DeliveringWish} |
 * | **Path** | `DeliveringWish.grantorId` |
 * | **Nullability** | Optional |
 */
export interface grantorId {
  kind: "OutputField";
  name: "grantorId";
  arguments: {};
  inlineType: [0];
  namedType: $Schema.ID;
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.DeliveringWish}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.String} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.DeliveringWish} |
 * | **Path** | `DeliveringWish.name` |
 * | **Nullability** | Optional |
 */
export interface name {
  kind: "OutputField";
  name: "name";
  arguments: {};
  inlineType: [0];
  namedType: $Schema.String;
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.DeliveringWish}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.User} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
 * | **Parent** | {@link $Schema.DeliveringWish} |
 * | **Path** | `DeliveringWish.owner` |
 * | **Nullability** | Optional |
 */
export interface owner {
  kind: "OutputField";
  name: "owner";
  arguments: {};
  inlineType: [0];
  namedType: $Schema.User;
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.DeliveringWish}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.ID} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.DeliveringWish} |
 * | **Path** | `DeliveringWish.ownerId` |
 * | **Nullability** | Optional |
 */
export interface ownerId {
  kind: "OutputField";
  name: "ownerId";
  arguments: {};
  inlineType: [0];
  namedType: $Schema.ID;
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.DeliveringWish}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.String} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.DeliveringWish} |
 * | **Path** | `DeliveringWish.status` |
 * | **Nullability** | Optional |
 */
export interface status {
  kind: "OutputField";
  name: "status";
  arguments: {};
  inlineType: [0];
  namedType: $Schema.String;
}
