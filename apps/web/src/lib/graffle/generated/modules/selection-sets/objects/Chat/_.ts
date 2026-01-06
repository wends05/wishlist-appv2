import type * as $$Utilities from "graffle/utilities-for-generated";
import type { GraphqlKit } from "graffle/utilities-for-generated";
import type * as $Fields from "./fields.js";
import type { $DefaultSelectionContext } from "../../_context.js";
import type { $FragmentInline } from "./fragment.js";

export type * as Chat from "./__.js";

/**
 * Selection set for {@link https://graphql.org/learn/schema/#object-types | Object} type.
 *
 * A chat between a wisher and a grantor about a wish
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
 * | **Fields** | 9 |
 */
export interface Chat<
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
   * | **Parent** | {@link $NamedTypes.$Chat} |
   * | **Path** | `Chat._id` |
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
   * | **Type** | {@link $NamedTypes.$User} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $NamedTypes.$Chat} |
   * | **Path** | `Chat.grantor` |
   * | **Nullability** | Optional |
   */
  grantor?:
    | $Fields.grantor.$Expanded<_$Context>
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<
        $Fields.grantor<_$Context>
      >;
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$ID} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $NamedTypes.$Chat} |
   * | **Path** | `Chat.grantorId` |
   * | **Nullability** | Optional |
   */
  grantorId?:
    | $Fields.grantorId.$Expanded<_$Context>
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<
        $Fields.grantorId<_$Context>
      >
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString;
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Message}[] |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $NamedTypes.$Chat} |
   * | **Path** | `Chat.messages` |
   * | **Nullability** | Optional |
   * | **List** | Yes |
   */
  messages?:
    | $Fields.messages.$Expanded<_$Context>
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<
        $Fields.messages<_$Context>
      >;
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$ChatStatus} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
   * | **Parent** | {@link $NamedTypes.$Chat} |
   * | **Path** | `Chat.status` |
   * | **Nullability** | Optional |
   */
  status?:
    | $Fields.status.$Expanded<_$Context>
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<
        $Fields.status<_$Context>
      >
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString;
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$BaseWish} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface ↗} |
   * | **Parent** | {@link $NamedTypes.$Chat} |
   * | **Path** | `Chat.wish` |
   * | **Nullability** | Optional |
   */
  wish?:
    | $Fields.wish.$Expanded<_$Context>
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<
        $Fields.wish<_$Context>
      >;
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$ID} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $NamedTypes.$Chat} |
   * | **Path** | `Chat.wishId` |
   * | **Nullability** | Optional |
   */
  wishId?:
    | $Fields.wishId.$Expanded<_$Context>
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<
        $Fields.wishId<_$Context>
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
   * | **Parent** | {@link $NamedTypes.$Chat} |
   * | **Path** | `Chat.wisher` |
   * | **Nullability** | Optional |
   */
  wisher?:
    | $Fields.wisher.$Expanded<_$Context>
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<
        $Fields.wisher<_$Context>
      >;
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$ID} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $NamedTypes.$Chat} |
   * | **Path** | `Chat.wisherId` |
   * | **Nullability** | Optional |
   */
  wisherId?:
    | $Fields.wisherId.$Expanded<_$Context>
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<
        $Fields.wisherId<_$Context>
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
