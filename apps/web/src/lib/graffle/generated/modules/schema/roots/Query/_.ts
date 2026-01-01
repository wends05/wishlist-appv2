import type * as $Fields from "./fields.js";

export * as Query from "./fields.js";

/**
 * GraphQL root {@link https://graphql.org/learn/schema/#the-query-and-mutation-types | Query} type.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
 * | **Fields** | 7 |
 */
export interface Query {
  kind: "Object";
  name: "Query";
  fields: {
    __typename: $Fields.__typename;
    authenticated: $Fields.authenticated;
    categories: $Fields.categories;
    me: $Fields.me;
    myWishes: $Fields.myWishes;
    users: $Fields.users;
    wish: $Fields.wish;
    wishes: $Fields.wishes;
  };
}
