import type * as $$Utilities from "graffle/utilities-for-generated";
import type { GraphqlKit } from "graffle/utilities-for-generated";
import type * as $Fields from "./fields.js";
import type { $DefaultSelectionContext } from "../../_context.js";
import type { $FragmentInline } from "./fragment.js";

export type * as Query from "./__.js";

/**
 * GraphQL root {@link https://graphql.org/learn/schema/#the-query-and-mutation-types | Query} type.
 */
export interface Query<
  _$Context extends GraphqlKit.Document.Object.Select.SelectionContext =
    $DefaultSelectionContext,
>
  extends GraphqlKit.Document.Object.Select.Bases.RootObjectLike {
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$String} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.authenticated` |
   * | **Nullability** | Optional |
   */
  authenticated?:
    | $Fields.authenticated.$Expanded<_$Context>
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<
        $Fields.authenticated<_$Context>
      >
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString;
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Category}[] |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.categories` |
   * | **Nullability** | Optional |
   * | **List** | Yes |
   */
  categories?:
    | $Fields.categories.$Expanded<_$Context>
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<
        $Fields.categories<_$Context>
      >;
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$User} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.me` |
   * | **Nullability** | Optional |
   */
  me?:
    | $Fields.me.$Expanded<_$Context>
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<
        $Fields.me<_$Context>
      >;
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Wish}[]! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.myWishes` |
   * | **Nullability** | Required |
   * | **List** | Yes |
   */
  myWishes?:
    | $Fields.myWishes.$Expanded<_$Context>
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<
        $Fields.myWishes<_$Context>
      >;
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$User}[] |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.users` |
   * | **Nullability** | Optional |
   * | **List** | Yes |
   */
  users?:
    | $Fields.users.$Expanded<_$Context>
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<
        $Fields.users<_$Context>
      >;
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Wish} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.wish` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   */
  wish?:
    | $Fields.wish<_$Context>
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<
        $Fields.wish<_$Context>
      >;
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Wish}[] |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.wishes` |
   * | **Nullability** | Optional |
   * | **List** | Yes |
   */
  wishes?:
    | $Fields.wishes.$Expanded<_$Context>
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<
        $Fields.wishes<_$Context>
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
