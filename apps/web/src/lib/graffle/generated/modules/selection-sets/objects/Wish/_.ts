import type * as $$Utilities from "graffle/utilities-for-generated";
import type { GraphqlKit } from "graffle/utilities-for-generated";
import type * as $Fields from "./fields.js";
import type { $DefaultSelectionContext } from "../../_context.js";
import type { $FragmentInline } from "./fragment.js";

export type * as Wish from "./__.js";

/**
 * Selection set for {@link https://graphql.org/learn/schema/#object-types | Object} type.
 *
 * A wish item that will be on a user's wishlist
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
 * | **Fields** | 7 |
 */
export interface Wish<
  _$Context extends GraphqlKit.Document.Object.Select.SelectionContext =
    $DefaultSelectionContext,
>
  extends GraphqlKit.Document.Object.Select.Bases.ObjectLike {
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$ID} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $NamedTypes.$Wish} |
   * | **Path** | `Wish._id` |
   * | **Nullability** | Optional |
   */
  _id?:
    | $Fields._id.$Expanded<_$Context>
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<
        $Fields._id<_$Context>
      >
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString;
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Category} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $NamedTypes.$Wish} |
   * | **Path** | `Wish.category` |
   * | **Nullability** | Optional |
   */
  category?:
    | $Fields.category.$Expanded<_$Context>
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<
        $Fields.category<_$Context>
      >;
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$ID} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $NamedTypes.$Wish} |
   * | **Path** | `Wish.categoryId` |
   * | **Nullability** | Optional |
   */
  categoryId?:
    | $Fields.categoryId.$Expanded<_$Context>
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<
        $Fields.categoryId<_$Context>
      >
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString;
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$String} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $NamedTypes.$Wish} |
   * | **Path** | `Wish.description` |
   * | **Nullability** | Optional |
   */
  description?:
    | $Fields.description.$Expanded<_$Context>
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<
        $Fields.description<_$Context>
      >
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString;
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$String} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $NamedTypes.$Wish} |
   * | **Path** | `Wish.name` |
   * | **Nullability** | Optional |
   */
  name?:
    | $Fields.name.$Expanded<_$Context>
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<
        $Fields.name<_$Context>
      >
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString;
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$User} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $NamedTypes.$Wish} |
   * | **Path** | `Wish.owner` |
   * | **Nullability** | Optional |
   */
  owner?:
    | $Fields.owner.$Expanded<_$Context>
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<
        $Fields.owner<_$Context>
      >;
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$ID} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $NamedTypes.$Wish} |
   * | **Path** | `Wish.ownerId` |
   * | **Nullability** | Optional |
   */
  ownerId?:
    | $Fields.ownerId.$Expanded<_$Context>
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<
        $Fields.ownerId<_$Context>
      >
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString;

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
