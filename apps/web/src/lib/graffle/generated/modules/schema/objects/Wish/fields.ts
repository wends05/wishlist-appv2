import type { Schema as $Schema } from "../../_.js";

/**
 * GraphQL `__typename` meta-field. The name of the object type currently being queried.
 *
 * Type: `"Wish"`
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
    value: "Wish";
  };
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Wish}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.ID} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.Wish} |
 * | **Path** | `Wish._id` |
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
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Wish}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Category} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
 * | **Parent** | {@link $Schema.Wish} |
 * | **Path** | `Wish.category` |
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
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Wish}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.ID} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.Wish} |
 * | **Path** | `Wish.categoryId` |
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
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Wish}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.String} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.Wish} |
 * | **Path** | `Wish.description` |
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
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Wish}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.String} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.Wish} |
 * | **Path** | `Wish.name` |
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
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Wish}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.User} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
 * | **Parent** | {@link $Schema.Wish} |
 * | **Path** | `Wish.owner` |
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
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Wish}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.ID} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.Wish} |
 * | **Path** | `Wish.ownerId` |
 * | **Nullability** | Optional |
 */
export interface ownerId {
  kind: "OutputField";
  name: "ownerId";
  arguments: {};
  inlineType: [0];
  namedType: $Schema.ID;
}
