import type * as $$Utilities from "graffle/utilities-for-generated";
import type { GraphqlKit } from "graffle/utilities-for-generated";
import * as $$Data from "./data.js";
import type * as $$Schema from "./schema/_.js";
import type * as $$SelectionSets from "./selection-sets/_.js";

//
//
//
//
//
//
// ==================================================================================================
//                                              Runtime
// ==================================================================================================
//
//
//
//
//
//

import { createSelect } from "graffle/client";

/**
 * Runtime utilities for native GraphQL document selection.
 *
 * Used with the `.select()` method to build type-safe native GraphQL documents.
 *
 * @example
 * ```ts
 * import { Select } from './graffle/select.js'
 *
 * const document = Select.Query({ pokemon: { name: true } })
 * ```
 */
export const Select = createSelect($$Data.Name);

//
//
//
//
//
//
// ==================================================================================================
//                                             Buildtime
// ==================================================================================================
//
//
//
//
//
//

/**
 * Type utilities for inferring result types from selection sets.
 *
 * Given a selection set, these types compute the exact TypeScript type
 * of the result data returned from a GraphQL operation.
 *
 * # Usage
 *
 * Each type corresponds to a GraphQL schema type and takes a selection set
 * generic parameter, returning the inferred result type.
 *
 * @example
 * ```ts
 * import type { Select } from './graffle/select.js'
 *
 * type Result = Select.Query<{ pokemon: { name: true } }>
 * // Result: { pokemon: { name: string } }
 * ```
 */
export namespace Select {
  //                                                Root
  // --------------------------------------------------------------------------------------------------
  //

  /**
   * Infer result type for Query operations.
   */
  export type Query<$SelectionSet extends $$SelectionSets.Query> = GraphqlKit.Document.Object.InferResult.Operation<
    $SelectionSet,
    $$Schema.Schema,
    $$Utilities.GraphqlKit.Schema.OperationType.QUERY
  >;
  /**
   * Infer result type for Mutation operations.
   */
  export type Mutation<$SelectionSet extends $$SelectionSets.Mutation> =
    GraphqlKit.Document.Object.InferResult.Operation<
      $SelectionSet,
      $$Schema.Schema,
      $$Utilities.GraphqlKit.Schema.OperationType.MUTATION
    >;

  //                                            OutputObject
  // --------------------------------------------------------------------------------------------------
  //

  /**
   * A category for organizing wishes
   *
   * Infer result type for Category selection sets.
   */
  export type Category<$SelectionSet extends $$SelectionSets.Category> =
    GraphqlKit.Document.Object.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema["allTypes"]["Category"]
    >;
  /**
   * A chat between a wisher and a grantor about a wish
   *
   * Infer result type for Chat selection sets.
   */
  export type Chat<$SelectionSet extends $$SelectionSets.Chat> =
    GraphqlKit.Document.Object.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema["allTypes"]["Chat"]
    >;
  /**
   * A wish that is currently being delivered
   *
   * Infer result type for DeliveringWish selection sets.
   */
  export type DeliveringWish<$SelectionSet extends $$SelectionSets.DeliveringWish> =
    GraphqlKit.Document.Object.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema["allTypes"]["DeliveringWish"]
    >;
  /**
   * Details about the delivery of a wish item
   *
   * Infer result type for DeliveryDetails selection sets.
   */
  export type DeliveryDetails<$SelectionSet extends $$SelectionSets.DeliveryDetails> =
    GraphqlKit.Document.Object.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema["allTypes"]["DeliveryDetails"]
    >;
  /**
   * A wish that has been fulfilled
   *
   * Infer result type for FulfilledWish selection sets.
   */
  export type FulfilledWish<$SelectionSet extends $$SelectionSets.FulfilledWish> =
    GraphqlKit.Document.Object.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema["allTypes"]["FulfilledWish"]
    >;
  /**
   * A message sent in a chat between a wisher and a grantor
   *
   * Infer result type for Message selection sets.
   */
  export type Message<$SelectionSet extends $$SelectionSets.Message> =
    GraphqlKit.Document.Object.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema["allTypes"]["Message"]
    >;
  /**
   * An open wish that is available for requests
   *
   * Infer result type for OpenWish selection sets.
   */
  export type OpenWish<$SelectionSet extends $$SelectionSets.OpenWish> =
    GraphqlKit.Document.Object.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema["allTypes"]["OpenWish"]
    >;
  /**
   * A pending wish that has an accepted grantor
   *
   * Infer result type for PendingWish selection sets.
   */
  export type PendingWish<$SelectionSet extends $$SelectionSets.PendingWish> =
    GraphqlKit.Document.Object.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema["allTypes"]["PendingWish"]
    >;
  /**
   * A user of the wishlist application
   *
   * Infer result type for User selection sets.
   */
  export type User<$SelectionSet extends $$SelectionSets.User> =
    GraphqlKit.Document.Object.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema["allTypes"]["User"]
    >;

  //                                               Union
  // --------------------------------------------------------------------------------------------------
  //

  //                                             Interface
  // --------------------------------------------------------------------------------------------------
  //

  /**
   * A wish item that will be on a user's wishlist
   *
   * Infer result type for BaseWish selection sets.
   */
  export type BaseWish<$SelectionSet extends $$SelectionSets.BaseWish> =
    GraphqlKit.Document.Object.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema["allTypes"]["BaseWish"]
    >;
}
