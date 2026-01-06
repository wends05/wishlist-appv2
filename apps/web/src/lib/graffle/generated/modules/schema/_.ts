import type * as $ from "graffle/utilities-for-generated";
import * as $$Data from "../data.js";
import * as $$Scalar from "../scalar.js";
import * as $Types from "./__.js";

export * as Schema from "./__.js";

export interface Schema<
  $Scalars extends $.Schema.Scalars.Registry = $$Scalar.$Registry,
> {
  name: $$Data.Name;
  operationsAvailable: [
    $.GraphqlKit.Schema.OperationType.QUERY,
    $.GraphqlKit.Schema.OperationType.MUTATION,
  ];
  RootUnion: $Types.Query | $Types.Mutation;
  Root: {
    query: $Types.Query;
    mutation: $Types.Mutation;
    subscription: null;
  };
  allTypes: {
    Query: $Types.Query;
    Mutation: $Types.Mutation;
    ChatStatus: $Types.ChatStatus;
    Category: $Types.Category;
    Chat: $Types.Chat;
    DeliveringWish: $Types.DeliveringWish;
    DeliveryDetails: $Types.DeliveryDetails;
    FulfilledWish: $Types.FulfilledWish;
    Message: $Types.Message;
    OpenWish: $Types.OpenWish;
    PendingWish: $Types.PendingWish;
    User: $Types.User;
    BaseWish: $Types.BaseWish;
  };
  objects: {
    Category: $Types.Category;
    Chat: $Types.Chat;
    DeliveringWish: $Types.DeliveringWish;
    DeliveryDetails: $Types.DeliveryDetails;
    FulfilledWish: $Types.FulfilledWish;
    Message: $Types.Message;
    OpenWish: $Types.OpenWish;
    PendingWish: $Types.PendingWish;
    User: $Types.User;
  };
  unions: {};
  interfaces: {
    BaseWish: $Types.BaseWish;
  };
  scalarNamesUnion:
    | "Date"
    | "JSON"
    | "Boolean"
    | "Float"
    | "ID"
    | "Int"
    | "String";
  scalars: {
    Date: $Types.Date;
    JSON: $Types.JSON;
    Boolean: $Types.Boolean;
    Float: $Types.Float;
    ID: $Types.ID;
    Int: $Types.Int;
    String: $Types.String;
  };
  scalarRegistry: $Scalars;
  extensions: $.GlobalRegistry.TypeExtensions;
}
