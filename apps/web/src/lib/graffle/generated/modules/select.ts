import * as $$Data from "./data.js";
import * as $$Schema from "./schema/_.js";
import * as $$SelectionSets from "./selection-sets/_.js";
import type * as $$Utilities from "graffle/utilities-for-generated";
import type { GraphqlKit } from "graffle/utilities-for-generated";

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
  export type Query<$SelectionSet extends $$SelectionSets.Query> =
    GraphqlKit.Document.Object.InferResult.Operation<
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
  /**
   * A wish item that will be on a user's wishlist
   *
   * Infer result type for Wish selection sets.
   */
  export type Wish<$SelectionSet extends $$SelectionSets.Wish> =
    GraphqlKit.Document.Object.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema["allTypes"]["Wish"]
    >;

  //                                               Union
  // --------------------------------------------------------------------------------------------------
  //

  //                                             Interface
  // --------------------------------------------------------------------------------------------------
  //
}
