import type { Schema as $Schema } from "../../_.js";

/**
 * GraphQL `__typename` meta-field. The name of the object type currently being queried.
 *
 * Type: `"Mutation"`
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
    value: "Mutation";
  };
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Mutation}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Category} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
 * | **Parent** | {@link $Schema.Mutation} |
 * | **Path** | `Mutation.createCategory` |
 * | **Nullability** | Optional |
 * | **Arguments** | 2 |
 */
export interface createCategory {
  kind: "OutputField";
  name: "createCategory";
  arguments: {
    description: {
      kind: "InputField";
      name: "description";
      inlineType: [1];
      namedType: $Schema.String;
    };
    name: {
      kind: "InputField";
      name: "name";
      inlineType: [1];
      namedType: $Schema.String;
    };
  };
  inlineType: [0];
  namedType: $Schema.Category;
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Mutation}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.OpenWish} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
 * | **Parent** | {@link $Schema.Mutation} |
 * | **Path** | `Mutation.createWish` |
 * | **Nullability** | Optional |
 * | **Arguments** | 3 |
 */
export interface createWish {
  kind: "OutputField";
  name: "createWish";
  arguments: {
    categoryId: {
      kind: "InputField";
      name: "categoryId";
      inlineType: [1];
      namedType: $Schema.String;
    };
    description: {
      kind: "InputField";
      name: "description";
      inlineType: [1];
      namedType: $Schema.String;
    };
    name: {
      kind: "InputField";
      name: "name";
      inlineType: [1];
      namedType: $Schema.String;
    };
  };
  inlineType: [0];
  namedType: $Schema.OpenWish;
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Mutation}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Chat} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
 * | **Parent** | {@link $Schema.Mutation} |
 * | **Path** | `Mutation.requestGrant` |
 * | **Nullability** | Optional |
 * | **Arguments** | 2 |
 */
export interface requestGrant {
  kind: "OutputField";
  name: "requestGrant";
  arguments: {
    message: {
      kind: "InputField";
      name: "message";
      inlineType: [1];
      namedType: $Schema.String;
    };
    wishId: {
      kind: "InputField";
      name: "wishId";
      inlineType: [1];
      namedType: $Schema.ID;
    };
  };
  inlineType: [0];
  namedType: $Schema.Chat;
}
