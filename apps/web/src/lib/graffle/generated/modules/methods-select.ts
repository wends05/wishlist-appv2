import * as $$SelectionSets from "./selection-sets/_.js";
import type * as $$Utilities from "graffle/utilities-for-generated";

//
//
//
//
//
//
// ==================================================================================================
//                                      Select Methods Interface
// ==================================================================================================
//
//
//
//
//
//

/**
 * Selection method types for building native GraphQL documents.
 *
 * Maps each GraphQL schema type to its corresponding selection method interface.
 * These methods are available on `.select()` to build type-safe selection sets
 * that return the selection set itself (for document building).
 */

export interface $MethodsSelect {
  Query: Query;
  Mutation: Mutation;
  Category: Category;
  Chat: Chat;
  Message: Message;
  User: User;
  Wish: Wish;
}

//
//
//
//
//
//
// ==================================================================================================
//                                                Root
// ==================================================================================================
//
//
//
//
//
//

/**
 * Build type-safe selection set for Query.
 */
export interface Query {
  <$SelectionSet>(
    selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Query>,
  ): $SelectionSet;
}

/**
 * Build type-safe selection set for Mutation.
 */
export interface Mutation {
  <$SelectionSet>(
    selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Mutation>,
  ): $SelectionSet;
}

//
//
//
//
//
//
// ==================================================================================================
//                                            OutputObject
// ==================================================================================================
//
//
//
//
//
//

/**
 * A category for organizing wishes
 *
 * Build type-safe selection set for Category.
 */
export interface Category {
  <$SelectionSet>(
    selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Category>,
  ): $SelectionSet;
}

/**
 * A chat between a wisher and a grantor about a wish
 *
 * Build type-safe selection set for Chat.
 */
export interface Chat {
  <$SelectionSet>(
    selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Chat>,
  ): $SelectionSet;
}

/**
 * A message sent in a chat between a wisher and a grantor
 *
 * Build type-safe selection set for Message.
 */
export interface Message {
  <$SelectionSet>(
    selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Message>,
  ): $SelectionSet;
}

/**
 * A user of the wishlist application
 *
 * Build type-safe selection set for User.
 */
export interface User {
  <$SelectionSet>(
    selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.User>,
  ): $SelectionSet;
}

/**
 * A wish item that will be on a user's wishlist
 *
 * Build type-safe selection set for Wish.
 */
export interface Wish {
  <$SelectionSet>(
    selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Wish>,
  ): $SelectionSet;
}

//
//
//
//
//
//
// ==================================================================================================
//                                               Union
// ==================================================================================================
//
//
//
//
//
//

//
//
//
//
//
//
// ==================================================================================================
//                                             Interface
// ==================================================================================================
//
//
//
//
//
//
