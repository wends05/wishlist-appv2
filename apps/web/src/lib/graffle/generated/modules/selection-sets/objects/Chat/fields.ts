import type * as $$Utilities from "graffle/utilities-for-generated";
import type { GraphqlKit } from "graffle/utilities-for-generated";
import type { $DefaultSelectionContext } from "../../_context.js";
import type * as $Named from "../../$named.js";

export type _id<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> =
  | GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
  | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
  | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
  | _id.$SelectionSet<_$Context>;

export namespace _id {
  export interface $SelectionSet<
    _$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends GraphqlKit.Document.Object.Select.Bases.Base {}

  /**
   * This is the "expanded" version of the `_id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
    | $SelectionSet<_$Context>
  >;
}

export type grantor<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> =
  grantor.$SelectionSet<_$Context>;

export namespace grantor {
  export interface $SelectionSet<
    _$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends GraphqlKit.Document.Object.Select.Bases.Base,
      $Named.User<_$Context> {}

  /**
   * This is the "expanded" version of the `grantor` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<$SelectionSet<_$Context>>;
}

export type grantorId<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> =
  | GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
  | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
  | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
  | grantorId.$SelectionSet<_$Context>;

export namespace grantorId {
  export interface $SelectionSet<
    _$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends GraphqlKit.Document.Object.Select.Bases.Base {}

  /**
   * This is the "expanded" version of the `grantorId` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
    | $SelectionSet<_$Context>
  >;
}

export type messages<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> =
  messages.$SelectionSet<_$Context>;

export namespace messages {
  export interface $SelectionSet<
    _$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends GraphqlKit.Document.Object.Select.Bases.Base,
      $Named.Message<_$Context> {}

  /**
   * This is the "expanded" version of the `messages` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<$SelectionSet<_$Context>>;
}

export type status<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> =
  | GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
  | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
  | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
  | status.$SelectionSet<_$Context>;

export namespace status {
  export interface $SelectionSet<
    _$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends GraphqlKit.Document.Object.Select.Bases.Base {}

  /**
   * This is the "expanded" version of the `status` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
    | $SelectionSet<_$Context>
  >;
}

export type wish<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> =
  wish.$SelectionSet<_$Context>;

export namespace wish {
  export interface $SelectionSet<
    _$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends GraphqlKit.Document.Object.Select.Bases.Base,
      $Named.BaseWish<_$Context> {}

  /**
   * This is the "expanded" version of the `wish` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<$SelectionSet<_$Context>>;
}

export type wishId<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> =
  | GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
  | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
  | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
  | wishId.$SelectionSet<_$Context>;

export namespace wishId {
  export interface $SelectionSet<
    _$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext,
  > extends GraphqlKit.Document.Object.Select.Bases.Base {}

  /**
   * This is the "expanded" version of the `wishId` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type $Expanded<
    _$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext,
  > = $$Utilities.Simplify<
    | GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
    | $SelectionSet<_$Context>
  >;
}
