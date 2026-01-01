import type { Schema as $Schema } from "../../_.js";

/**
 * GraphQL `__typename` meta-field. The name of the object type currently being queried.
 *
 * Type: `"Message"`
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
    value: "Message";
  };
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Message}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.String} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.Message} |
 * | **Path** | `Message.content` |
 * | **Nullability** | Optional |
 */
export interface content {
  kind: "OutputField";
  name: "content";
  arguments: {};
  inlineType: [0];
  namedType: $Schema.String;
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Message}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Date} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
 * | **Parent** | {@link $Schema.Message} |
 * | **Path** | `Message.createdAt` |
 * | **Nullability** | Optional |
 */
export interface createdAt {
  kind: "OutputField";
  name: "createdAt";
  arguments: {};
  inlineType: [0];
  namedType: $Schema.Date;
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Message}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.User} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
 * | **Parent** | {@link $Schema.Message} |
 * | **Path** | `Message.sender` |
 * | **Nullability** | Optional |
 */
export interface sender {
  kind: "OutputField";
  name: "sender";
  arguments: {};
  inlineType: [0];
  namedType: $Schema.User;
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Message}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.ID} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.Message} |
 * | **Path** | `Message.senderId` |
 * | **Nullability** | Optional |
 */
export interface senderId {
  kind: "OutputField";
  name: "senderId";
  arguments: {};
  inlineType: [0];
  namedType: $Schema.ID;
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Message}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Date} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
 * | **Parent** | {@link $Schema.Message} |
 * | **Path** | `Message.updatedAt` |
 * | **Nullability** | Optional |
 */
export interface updatedAt {
  kind: "OutputField";
  name: "updatedAt";
  arguments: {};
  inlineType: [0];
  namedType: $Schema.Date;
}
