import type * as $Fields from "./fields.js";

export * as Chat from "./fields.js";

/**
 * GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
 *
 * A chat between a wisher and a grantor about a wish
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
 * | **Fields** | 9 |
 */
export interface Chat {
  kind: "Object";
  name: "Chat";
  fields: {
    __typename: $Fields.__typename;
    _id: $Fields._id;
    grantor: $Fields.grantor;
    grantorId: $Fields.grantorId;
    messages: $Fields.messages;
    status: $Fields.status;
    wish: $Fields.wish;
    wishId: $Fields.wishId;
    wisher: $Fields.wisher;
    wisherId: $Fields.wisherId;
  };
}
