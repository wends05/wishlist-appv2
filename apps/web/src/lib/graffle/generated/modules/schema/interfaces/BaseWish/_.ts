import type * as $Fields from "./fields.js";
import type {
  DeliveringWish,
  FulfilledWish,
  OpenWish,
  PendingWish,
} from "../../__.js";

export * as BaseWish from "./fields.js";

/**
 * GraphQL {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface}.
 *
 * A wish item that will be on a user's wishlist
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface ↗} |
 * | **Fields** | 8 |
 * | **Implementors** | {@link $Schema.DeliveringWish}, {@link $Schema.FulfilledWish}, {@link $Schema.OpenWish}, {@link $Schema.PendingWish} |
 */
export interface BaseWish {
  kind: "Interface";
  name: "BaseWish";
  fields: {
    __typename: $Fields.__typename;
    _id: $Fields._id;
    category: $Fields.category;
    categoryId: $Fields.categoryId;
    description: $Fields.description;
    name: $Fields.name;
    owner: $Fields.owner;
    ownerId: $Fields.ownerId;
    status: $Fields.status;
  };
  implementors: [DeliveringWish, FulfilledWish, OpenWish, PendingWish];
  implementorsUnion: DeliveringWish | FulfilledWish | OpenWish | PendingWish;
  implementorsIndex: {
    DeliveringWish: DeliveringWish;
    FulfilledWish: FulfilledWish;
    OpenWish: OpenWish;
    PendingWish: PendingWish;
  };
}
