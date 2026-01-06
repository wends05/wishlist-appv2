export * as $Named from "./$named.js";
export * as $Scalars from "./scalars/_.js";

export type * from "./_context.js";
export type * from "./_document.js";

export type * from "./roots/Query/_.js";
export type * from "./roots/Mutation/_.js";
export type * from "./objects/Category/_.js";
export type * from "./objects/Chat/_.js";
export type * from "./objects/DeliveringWish/_.js";
export type * from "./objects/DeliveryDetails/_.js";
export type * from "./objects/FulfilledWish/_.js";
export type * from "./objects/Message/_.js";
export type * from "./objects/OpenWish/_.js";
export type * from "./objects/PendingWish/_.js";
export type * from "./objects/User/_.js";
export type * from "./interfaces/BaseWish/_.js";
export type * from "./enums/ChatStatus.js";

import type * as $$Utilities from "graffle/utilities-for-generated";
import type { GraphqlKit } from "graffle/utilities-for-generated";
import type * as $$Schema from "../schema/_.js";

/**
 * Infer the result type of a Query selection set.
 *
 * Given a selection set object, this type computes the exact TypeScript type
 * of the data that will be returned from executing the Query operation.
 */
export type Query$Infer<$SelectionSet extends object> =
  GraphqlKit.Document.Object.InferResult.OperationQuery<
    $SelectionSet,
    $$Schema.Schema
  >;

/**
 * Infer the variables type for a Query selection set.
 *
 * @deprecated This is temporarily typed as `any` and will be replaced with the new analysis system.
 */
export type Query$Variables<_$SelectionSet> = any; // Temporarily any - will be replaced with new analysis system

/**
 * Infer the result type of a Mutation selection set.
 *
 * Given a selection set object, this type computes the exact TypeScript type
 * of the data that will be returned from executing the Mutation operation.
 */
export type Mutation$Infer<$SelectionSet extends object> =
  GraphqlKit.Document.Object.InferResult.OperationMutation<
    $SelectionSet,
    $$Schema.Schema
  >;

/**
 * Infer the variables type for a Mutation selection set.
 *
 * @deprecated This is temporarily typed as `any` and will be replaced with the new analysis system.
 */
export type Mutation$Variables<_$SelectionSet> = any; // Temporarily any - will be replaced with new analysis system
