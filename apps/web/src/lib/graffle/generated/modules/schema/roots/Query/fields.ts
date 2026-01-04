import type { Schema as $Schema } from "../../_.js";

/**
 * GraphQL `__typename` meta-field. The name of the object type currently being queried.
 *
 * Type: `"Query"`
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
    value: "Query";
  };
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.String} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.authenticated` |
 * | **Nullability** | Optional |
 */
export interface authenticated {
  kind: "OutputField";
  name: "authenticated";
  arguments: {};
  inlineType: [0];
  namedType: $Schema.String;
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Category}[] |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.categories` |
 * | **Nullability** | Optional |
 * | **List** | Yes |
 */
export interface categories {
  kind: "OutputField";
  name: "categories";
  arguments: {};
  inlineType: [0, [1]];
  namedType: $Schema.Category;
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Wish}[]! |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.home` |
 * | **Nullability** | Required |
 * | **List** | Yes |
 * | **Arguments** | 4 |
 */
export interface home {
  kind: "OutputField";
  name: "home";
  arguments: {
    categoryId: {
      kind: "InputField";
      name: "categoryId";
      inlineType: [0];
      namedType: $Schema.String;
    };
    limit: {
      kind: "InputField";
      name: "limit";
      inlineType: [0];
      namedType: $Schema.Int;
    };
    search: {
      kind: "InputField";
      name: "search";
      inlineType: [0];
      namedType: $Schema.String;
    };
    skip: {
      kind: "InputField";
      name: "skip";
      inlineType: [0];
      namedType: $Schema.Int;
    };
  };
  inlineType: [1, [1]];
  namedType: $Schema.Wish;
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.User} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.me` |
 * | **Nullability** | Optional |
 */
export interface me {
  kind: "OutputField";
  name: "me";
  arguments: {};
  inlineType: [0];
  namedType: $Schema.User;
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Wish}[]! |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.myWishes` |
 * | **Nullability** | Required |
 * | **List** | Yes |
 */
export interface myWishes {
  kind: "OutputField";
  name: "myWishes";
  arguments: {};
  inlineType: [1, [1]];
  namedType: $Schema.Wish;
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.User}[] |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.users` |
 * | **Nullability** | Optional |
 * | **List** | Yes |
 */
export interface users {
  kind: "OutputField";
  name: "users";
  arguments: {};
  inlineType: [0, [1]];
  namedType: $Schema.User;
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Wish} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.wish` |
 * | **Nullability** | Optional |
 * | **Arguments** | 1 |
 */
export interface wish {
  kind: "OutputField";
  name: "wish";
  arguments: {
    wishId: {
      kind: "InputField";
      name: "wishId";
      inlineType: [1];
      namedType: $Schema.String;
    };
  };
  inlineType: [0];
  namedType: $Schema.Wish;
}
