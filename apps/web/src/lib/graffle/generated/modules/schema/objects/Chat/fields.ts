import type { Schema as $Schema } from "../../_.js";

/**
 * GraphQL `__typename` meta-field. The name of the object type currently being queried.
 *
 * Type: `"Chat"`
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
    value: "Chat";
  };
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Chat}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.ID} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.Chat} |
 * | **Path** | `Chat._id` |
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
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Chat}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.User} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
 * | **Parent** | {@link $Schema.Chat} |
 * | **Path** | `Chat.grantor` |
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
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Chat}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.ID} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.Chat} |
 * | **Path** | `Chat.grantorId` |
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
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Chat}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Message}[] |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
 * | **Parent** | {@link $Schema.Chat} |
 * | **Path** | `Chat.messages` |
 * | **Nullability** | Optional |
 * | **List** | Yes |
 */
export interface messages {
  kind: "OutputField";
  name: "messages";
  arguments: {};
  inlineType: [0, [1]];
  namedType: $Schema.Message;
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Chat}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.ChatStatus} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
 * | **Parent** | {@link $Schema.Chat} |
 * | **Path** | `Chat.status` |
 * | **Nullability** | Optional |
 */
export interface status {
  kind: "OutputField";
  name: "status";
  arguments: {};
  inlineType: [0];
  namedType: $Schema.ChatStatus;
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Chat}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Wish} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
 * | **Parent** | {@link $Schema.Chat} |
 * | **Path** | `Chat.wish` |
 * | **Nullability** | Optional |
 */
export interface wish {
  kind: "OutputField";
  name: "wish";
  arguments: {};
  inlineType: [0];
  namedType: $Schema.Wish;
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Chat}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.ID} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.Chat} |
 * | **Path** | `Chat.wishId` |
 * | **Nullability** | Optional |
 */
export interface wishId {
  kind: "OutputField";
  name: "wishId";
  arguments: {};
  inlineType: [0];
  namedType: $Schema.ID;
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Chat}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.User} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
 * | **Parent** | {@link $Schema.Chat} |
 * | **Path** | `Chat.wisher` |
 * | **Nullability** | Optional |
 */
export interface wisher {
  kind: "OutputField";
  name: "wisher";
  arguments: {};
  inlineType: [0];
  namedType: $Schema.User;
}

/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Chat}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.ID} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.Chat} |
 * | **Path** | `Chat.wisherId` |
 * | **Nullability** | Optional |
 */
export interface wisherId {
  kind: "OutputField";
  name: "wisherId";
  arguments: {};
  inlineType: [0];
  namedType: $Schema.ID;
}
