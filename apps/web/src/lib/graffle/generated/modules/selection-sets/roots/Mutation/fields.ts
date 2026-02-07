import type * as $$Utilities from "graffle/utilities-for-generated";
import type { GraphqlKit } from "graffle/utilities-for-generated";
import type { $DefaultSelectionContext } from "../../_context.js";
import type * as $Named from "../../$named.js";
import type * as $Scalars from "../../scalars/_.js";

export type createCategory<
  _$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext,
> = createCategory.$SelectionSet<_$Context>;

export namespace createCategory {
  export interface $SelectionSet<
    _$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends GraphqlKit.Document.Object.Select.Bases.Base,
      $Named.Category<_$Context> {
    /**
     * Arguments for `createCategory` field. All arguments are required so you must include this.
     */
    readonly $: $Arguments<_$Context>;
  }

  export interface $Arguments<
    _$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext,
  > {
    /**
     * # Info
     *
     * | | |
     * | - | - |
     * | **GraphQL Type** | `String!` |
     * | **Parent** | {@link $NamedTypes.$Mutation}.createCategory |
     * | **Path** | `Mutation.createCategory(description)` |
     * | **Nullability** | Required |
     */
    readonly description: $Scalars.String$NonNull<_$Context>;
    /**
     * # Info
     *
     * | | |
     * | - | - |
     * | **GraphQL Type** | `String!` |
     * | **Parent** | {@link $NamedTypes.$Mutation}.createCategory |
     * | **Path** | `Mutation.createCategory(name)` |
     * | **Nullability** | Required |
     */
    readonly name: $Scalars.String$NonNull<_$Context>;
  }

  /**
   * This is the "expanded" version of the `createCategory` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<$SelectionSet<_$Context>>;
}

export type createWish<
  _$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext,
> = createWish.$SelectionSet<_$Context>;

export namespace createWish {
  export interface $SelectionSet<
    _$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends GraphqlKit.Document.Object.Select.Bases.Base,
      $Named.OpenWish<_$Context> {
    /**
     * Arguments for `createWish` field. All arguments are required so you must include this.
     */
    readonly $: $Arguments<_$Context>;
  }

  export interface $Arguments<
    _$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext,
  > {
    /**
     * # Info
     *
     * | | |
     * | - | - |
     * | **GraphQL Type** | `String!` |
     * | **Parent** | {@link $NamedTypes.$Mutation}.createWish |
     * | **Path** | `Mutation.createWish(categoryId)` |
     * | **Nullability** | Required |
     */
    readonly categoryId: $Scalars.String$NonNull<_$Context>;
    /**
     * # Info
     *
     * | | |
     * | - | - |
     * | **GraphQL Type** | `String!` |
     * | **Parent** | {@link $NamedTypes.$Mutation}.createWish |
     * | **Path** | `Mutation.createWish(description)` |
     * | **Nullability** | Required |
     */
    readonly description: $Scalars.String$NonNull<_$Context>;
    /**
     * # Info
     *
     * | | |
     * | - | - |
     * | **GraphQL Type** | `String!` |
     * | **Parent** | {@link $NamedTypes.$Mutation}.createWish |
     * | **Path** | `Mutation.createWish(name)` |
     * | **Nullability** | Required |
     */
    readonly name: $Scalars.String$NonNull<_$Context>;
  }

  /**
   * This is the "expanded" version of the `createWish` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<$SelectionSet<_$Context>>;
}

export type requestGrant<
  _$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext,
> = requestGrant.$SelectionSet<_$Context>;

export namespace requestGrant {
  export interface $SelectionSet<
    _$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends GraphqlKit.Document.Object.Select.Bases.Base,
      $Named.Chat<_$Context> {
    /**
     * Arguments for `requestGrant` field. All arguments are required so you must include this.
     */
    readonly $: $Arguments<_$Context>;
  }

  export interface $Arguments<
    _$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext,
  > {
    /**
     * # Info
     *
     * | | |
     * | - | - |
     * | **GraphQL Type** | `String!` |
     * | **Parent** | {@link $NamedTypes.$Mutation}.requestGrant |
     * | **Path** | `Mutation.requestGrant(message)` |
     * | **Nullability** | Required |
     */
    readonly message: $Scalars.String$NonNull<_$Context>;
    /**
     * # Info
     *
     * | | |
     * | - | - |
     * | **GraphQL Type** | `ID!` |
     * | **Parent** | {@link $NamedTypes.$Mutation}.requestGrant |
     * | **Path** | `Mutation.requestGrant(wishId)` |
     * | **Nullability** | Required |
     */
    readonly wishId: $Scalars.ID$NonNull<_$Context>;
  }

  /**
   * This is the "expanded" version of the `requestGrant` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<$SelectionSet<_$Context>>;
}
