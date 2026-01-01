import type * as $Fields from "./fields.js";

export * as Message from "./fields.js";

/**
 * GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
 *
 * A message sent in a chat between a wisher and a grantor
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
 * | **Fields** | 5 |
 */
export interface Message {
  kind: "Object";
  name: "Message";
  fields: {
    __typename: $Fields.__typename;
    content: $Fields.content;
    createdAt: $Fields.createdAt;
    sender: $Fields.sender;
    senderId: $Fields.senderId;
    updatedAt: $Fields.updatedAt;
  };
}
