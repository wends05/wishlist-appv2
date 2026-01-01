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
    Message: $Types.Message;
    User: $Types.User;
    Wish: $Types.Wish;
  };
  objects: {
    Category: $Types.Category;
    Chat: $Types.Chat;
    Message: $Types.Message;
    User: $Types.User;
    Wish: $Types.Wish;
  };
  unions: {};
  interfaces: {};
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
