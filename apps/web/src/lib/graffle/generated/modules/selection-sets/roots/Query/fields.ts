import type * as $$Utilities from "graffle/utilities-for-generated";
import type { GraphqlKit } from "graffle/utilities-for-generated";
import type { $DefaultSelectionContext } from "../../_context.js";
import type * as $Named from "../../$named.js";
import type * as $Scalars from "../../scalars/_.js";

export type authenticated<
  _$Context extends GraphqlKit.Document.Object.Select.SelectionContext =
    $DefaultSelectionContext,
> =
  | GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
  | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
  | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
  | authenticated.$SelectionSet<_$Context>;

export namespace authenticated {
  export interface $SelectionSet<
    _$Context extends GraphqlKit.Document.Object.Select.SelectionContext =
      $DefaultSelectionContext,
  >
    extends GraphqlKit.Document.Object.Select.Bases.Base {}

  /**
   * This is the "expanded" version of the `authenticated` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends GraphqlKit.Document.Object.Select.SelectionContext =
      $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
    | $SelectionSet<_$Context>
  >;
}

export type categories<
  _$Context extends GraphqlKit.Document.Object.Select.SelectionContext =
    $DefaultSelectionContext,
> = categories.$SelectionSet<_$Context>;

export namespace categories {
  export interface $SelectionSet<
    _$Context extends GraphqlKit.Document.Object.Select.SelectionContext =
      $DefaultSelectionContext,
  >
    extends
      GraphqlKit.Document.Object.Select.Bases.Base,
      $Named.Category<_$Context> {}

  /**
   * This is the "expanded" version of the `categories` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends GraphqlKit.Document.Object.Select.SelectionContext =
      $DefaultSelectionContext,
  > = $$Utilities.Simplify<$SelectionSet<_$Context>>;
}

export type home<
  _$Context extends GraphqlKit.Document.Object.Select.SelectionContext =
    $DefaultSelectionContext,
> = home.$SelectionSet<_$Context>;

export namespace home {
  export interface $SelectionSet<
    _$Context extends GraphqlKit.Document.Object.Select.SelectionContext =
      $DefaultSelectionContext,
  >
    extends
      GraphqlKit.Document.Object.Select.Bases.Base,
      $Named.OpenWish<_$Context> {
    /**
     * Arguments for `home` field. No arguments are required so you may omit this.
     */
    readonly $?: $Arguments<_$Context>;
  }

  export interface $Arguments<
    _$Context extends GraphqlKit.Document.Object.Select.SelectionContext =
      $DefaultSelectionContext,
  > {
    /**
     * # Info
     *
     * | | |
     * | - | - |
     * | **GraphQL Type** | `String` |
     * | **Parent** | {@link $NamedTypes.$Query}.home |
     * | **Path** | `Query.home(categoryId)` |
     * | **Nullability** | Optional |
     */
    readonly categoryId?: $Scalars.String<_$Context>;
    /**
     * # Info
     *
     * | | |
     * | - | - |
     * | **GraphQL Type** | `Int` |
     * | **Parent** | {@link $NamedTypes.$Query}.home |
     * | **Path** | `Query.home(limit)` |
     * | **Nullability** | Optional |
     */
    readonly limit?: $Scalars.Int<_$Context>;
    /**
     * # Info
     *
     * | | |
     * | - | - |
     * | **GraphQL Type** | `String` |
     * | **Parent** | {@link $NamedTypes.$Query}.home |
     * | **Path** | `Query.home(search)` |
     * | **Nullability** | Optional |
     */
    readonly search?: $Scalars.String<_$Context>;
    /**
     * # Info
     *
     * | | |
     * | - | - |
     * | **GraphQL Type** | `Int` |
     * | **Parent** | {@link $NamedTypes.$Query}.home |
     * | **Path** | `Query.home(skip)` |
     * | **Nullability** | Optional |
     */
    readonly skip?: $Scalars.Int<_$Context>;
  }

  /**
   * This is the "expanded" version of the `home` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends GraphqlKit.Document.Object.Select.SelectionContext =
      $DefaultSelectionContext,
  > = $$Utilities.Simplify<$SelectionSet<_$Context>>;
}

export type me<
  _$Context extends GraphqlKit.Document.Object.Select.SelectionContext =
    $DefaultSelectionContext,
> = me.$SelectionSet<_$Context>;

export namespace me {
  export interface $SelectionSet<
    _$Context extends GraphqlKit.Document.Object.Select.SelectionContext =
      $DefaultSelectionContext,
  >
    extends
      GraphqlKit.Document.Object.Select.Bases.Base,
      $Named.User<_$Context> {}

  /**
   * This is the "expanded" version of the `me` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends GraphqlKit.Document.Object.Select.SelectionContext =
      $DefaultSelectionContext,
  > = $$Utilities.Simplify<$SelectionSet<_$Context>>;
}

export type myWishes<
  _$Context extends GraphqlKit.Document.Object.Select.SelectionContext =
    $DefaultSelectionContext,
> = myWishes.$SelectionSet<_$Context>;

export namespace myWishes {
  export interface $SelectionSet<
    _$Context extends GraphqlKit.Document.Object.Select.SelectionContext =
      $DefaultSelectionContext,
  >
    extends
      GraphqlKit.Document.Object.Select.Bases.Base,
      $Named.BaseWish<_$Context> {}

  /**
   * This is the "expanded" version of the `myWishes` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends GraphqlKit.Document.Object.Select.SelectionContext =
      $DefaultSelectionContext,
  > = $$Utilities.Simplify<$SelectionSet<_$Context>>;
}

export type users<
  _$Context extends GraphqlKit.Document.Object.Select.SelectionContext =
    $DefaultSelectionContext,
> = users.$SelectionSet<_$Context>;

export namespace users {
  export interface $SelectionSet<
    _$Context extends GraphqlKit.Document.Object.Select.SelectionContext =
      $DefaultSelectionContext,
  >
    extends
      GraphqlKit.Document.Object.Select.Bases.Base,
      $Named.User<_$Context> {}

  /**
   * This is the "expanded" version of the `users` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends GraphqlKit.Document.Object.Select.SelectionContext =
      $DefaultSelectionContext,
  > = $$Utilities.Simplify<$SelectionSet<_$Context>>;
}

export type wish<
  _$Context extends GraphqlKit.Document.Object.Select.SelectionContext =
    $DefaultSelectionContext,
> = wish.$SelectionSet<_$Context>;

export namespace wish {
  export interface $SelectionSet<
    _$Context extends GraphqlKit.Document.Object.Select.SelectionContext =
      $DefaultSelectionContext,
  >
    extends
      GraphqlKit.Document.Object.Select.Bases.Base,
      $Named.BaseWish<_$Context> {
    /**
     * Arguments for `wish` field. All arguments are required so you must include this.
     */
    readonly $: $Arguments<_$Context>;
  }

  export interface $Arguments<
    _$Context extends GraphqlKit.Document.Object.Select.SelectionContext =
      $DefaultSelectionContext,
  > {
    /**
     * # Info
     *
     * | | |
     * | - | - |
     * | **GraphQL Type** | `String!` |
     * | **Parent** | {@link $NamedTypes.$Query}.wish |
     * | **Path** | `Query.wish(wishId)` |
     * | **Nullability** | Required |
     */
    readonly wishId: $Scalars.String$NonNull<_$Context>;
  }

  /**
   * This is the "expanded" version of the `wish` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends GraphqlKit.Document.Object.Select.SelectionContext =
      $DefaultSelectionContext,
  > = $$Utilities.Simplify<$SelectionSet<_$Context>>;
}
