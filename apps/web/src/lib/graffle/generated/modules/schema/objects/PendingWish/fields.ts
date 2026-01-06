import type { Schema as $Schema } from "../../_.js";

/**
 * GraphQL `__typename` meta-field. The name of the object type currently being queried.
 *
 * Type: `"PendingWish"`
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
    value: "PendingWish";
  };
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.PendingWish}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.ID} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.PendingWish} |
 * | **Path** | `PendingWish._id` |
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
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.PendingWish}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Category} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
 * | **Parent** | {@link $Schema.PendingWish} |
 * | **Path** | `PendingWish.category` |
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
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.PendingWish}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.ID} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.PendingWish} |
 * | **Path** | `PendingWish.categoryId` |
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
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.PendingWish}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.String} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.PendingWish} |
 * | **Path** | `PendingWish.description` |
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
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.PendingWish}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Date} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
 * | **Parent** | {@link $Schema.PendingWish} |
 * | **Path** | `PendingWish.fulfilledAt` |
 * | **Nullability** | Optional |
 */
export interface fulfilledAt {
  kind: "OutputField";
  name: "fulfilledAt";
  arguments: {};
  inlineType: [0];
  namedType: $Schema.Date;
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.PendingWish}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.User} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
 * | **Parent** | {@link $Schema.PendingWish} |
 * | **Path** | `PendingWish.grantor` |
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
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.PendingWish}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.ID} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.PendingWish} |
 * | **Path** | `PendingWish.grantorId` |
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
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.PendingWish}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.String} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.PendingWish} |
 * | **Path** | `PendingWish.name` |
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
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.PendingWish}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.User} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
 * | **Parent** | {@link $Schema.PendingWish} |
 * | **Path** | `PendingWish.owner` |
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
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.PendingWish}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.ID} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.PendingWish} |
 * | **Path** | `PendingWish.ownerId` |
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
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.PendingWish}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.String} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.PendingWish} |
 * | **Path** | `PendingWish.status` |
 * | **Nullability** | Optional |
 */
export interface status {
  kind: "OutputField";
  name: "status";
  arguments: {};
  inlineType: [0];
  namedType: $Schema.String;
}
