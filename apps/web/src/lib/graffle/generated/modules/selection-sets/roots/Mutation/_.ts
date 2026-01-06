import type * as $$Utilities from "graffle/utilities-for-generated";
import type { GraphqlKit } from "graffle/utilities-for-generated";
import type * as $Fields from "./fields.js";
import type { $DefaultSelectionContext } from "../../_context.js";
import type { $FragmentInline } from "./fragment.js";

export type * as Mutation from "./__.js";

/**
 * GraphQL root {@link https://graphql.org/learn/schema/#the-mutation-and-mutation-types | Mutation} type.
 */
export interface Mutation<
  _$Context extends GraphqlKit.Document.Object.Select.SelectionContext =
    $DefaultSelectionContext,
>
  extends GraphqlKit.Document.Object.Select.Bases.RootObjectLike {
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Category} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $NamedTypes.$Mutation} |
   * | **Path** | `Mutation.createCategory` |
   * | **Nullability** | Optional |
   * | **Arguments** | 2 |
   */
  createCategory?:
    | $Fields.createCategory<_$Context>
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<
        $Fields.createCategory<_$Context>
      >;
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$BaseWish} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface ↗} |
   * | **Parent** | {@link $NamedTypes.$Mutation} |
   * | **Path** | `Mutation.createWish` |
   * | **Nullability** | Optional |
   * | **Arguments** | 4 |
   */
  createWish?:
    | $Fields.createWish<_$Context>
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<
        $Fields.createWish<_$Context>
      >;

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments}
   */
  ___?: $FragmentInline<_$Context> | $FragmentInline<_$Context>[];
  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see {@link https://graphql.org/learn/queries/#meta-fields | Meta Fields}
   */
  __typename?:
    | GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator>
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString;
}
