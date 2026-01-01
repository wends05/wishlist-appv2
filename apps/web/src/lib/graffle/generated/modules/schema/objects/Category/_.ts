import type * as $Fields from "./fields.js";

export * as Category from "./fields.js";

/**
 * GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
 *
 * A category for organizing wishes
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
 * | **Fields** | 3 |
 */
export interface Category {
  kind: "Object";
  name: "Category";
  fields: {
    __typename: $Fields.__typename;
    _id: $Fields._id;
    description: $Fields.description;
    name: $Fields.name;
  };
}
