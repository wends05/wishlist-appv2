import type { GraphqlKit } from "graffle/utilities-for-generated";
import type { $DefaultSelectionContext } from "../../_context.js";
import type * as $Named from "../../$named.js";
import type * as $Fields from "./fields.js";
import type { $FragmentInline } from "./fragment.js";

export type * as BaseWish from "./__.js";

/**
 * Selection set for {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface}.
 *
 * A wish item that will be on a user's wishlist
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface ↗} |
 * | **Fields** | 8 |
 * | **Implementors** | {@link $Schema.DeliveringWish}, {@link $Schema.FulfilledWish}, {@link $Schema.OpenWish}, {@link $Schema.PendingWish} |
 */
export interface BaseWish<
  _$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext,
> extends GraphqlKit.Document.Object.Select.Bases.ObjectLike {
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$ID} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $NamedTypes.$BaseWish} |
   * | **Path** | `BaseWish._id` |
   * | **Nullability** | Optional |
   */
  _id?:
    | $Fields._id.$Expanded<_$Context>
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields._id<_$Context>>
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString;
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Category} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $NamedTypes.$BaseWish} |
   * | **Path** | `BaseWish.category` |
   * | **Nullability** | Optional |
   */
  category?:
    | $Fields.category.$Expanded<_$Context>
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.category<_$Context>>;
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$ID} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $NamedTypes.$BaseWish} |
   * | **Path** | `BaseWish.categoryId` |
   * | **Nullability** | Optional |
   */
  categoryId?:
    | $Fields.categoryId.$Expanded<_$Context>
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.categoryId<_$Context>>
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString;
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$String} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $NamedTypes.$BaseWish} |
   * | **Path** | `BaseWish.description` |
   * | **Nullability** | Optional |
   */
  description?:
    | $Fields.description.$Expanded<_$Context>
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.description<_$Context>>
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString;
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$String} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $NamedTypes.$BaseWish} |
   * | **Path** | `BaseWish.name` |
   * | **Nullability** | Optional |
   */
  name?:
    | $Fields.name.$Expanded<_$Context>
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.name<_$Context>>
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString;
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$User} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $NamedTypes.$BaseWish} |
   * | **Path** | `BaseWish.owner` |
   * | **Nullability** | Optional |
   */
  owner?:
    | $Fields.owner.$Expanded<_$Context>
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.owner<_$Context>>;
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$ID} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $NamedTypes.$BaseWish} |
   * | **Path** | `BaseWish.ownerId` |
   * | **Nullability** | Optional |
   */
  ownerId?:
    | $Fields.ownerId.$Expanded<_$Context>
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.ownerId<_$Context>>
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString;
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$String} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $NamedTypes.$BaseWish} |
   * | **Path** | `BaseWish.status` |
   * | **Nullability** | Optional |
   */
  status?:
    | $Fields.status.$Expanded<_$Context>
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.status<_$Context>>
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString;
  /**
   * Inline fragment selection for {@link $Schema.DeliveringWish} implementor.
   *
   * When the runtime value is of type {@link $Schema.DeliveringWish}, this selection set is applied, allowing you to select fields specific to this implementor type.
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.DeliveringWish} |
   * | **Kind** | Interface Implementor |
   * | **Parent** | {@link $Schema.BaseWish} |
   * | **Path** | `BaseWish -> DeliveringWish` |
   *
   * @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments}
   * @see {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface Types}
   *
   * @example
   * ```ts
   * query.basewishs({
   * id: true,
   * name: true,
   * ___on_DeliveringWish: {
   * // ... DeliveringWish-specific fields
   * }
   * })
   * ```
   */
  ___on_DeliveringWish?: $Named.DeliveringWish<_$Context>;
  /**
   * Inline fragment selection for {@link $Schema.FulfilledWish} implementor.
   *
   * When the runtime value is of type {@link $Schema.FulfilledWish}, this selection set is applied, allowing you to select fields specific to this implementor type.
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.FulfilledWish} |
   * | **Kind** | Interface Implementor |
   * | **Parent** | {@link $Schema.BaseWish} |
   * | **Path** | `BaseWish -> FulfilledWish` |
   *
   * @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments}
   * @see {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface Types}
   *
   * @example
   * ```ts
   * query.basewishs({
   * id: true,
   * name: true,
   * ___on_FulfilledWish: {
   * // ... FulfilledWish-specific fields
   * }
   * })
   * ```
   */
  ___on_FulfilledWish?: $Named.FulfilledWish<_$Context>;
  /**
   * Inline fragment selection for {@link $Schema.OpenWish} implementor.
   *
   * When the runtime value is of type {@link $Schema.OpenWish}, this selection set is applied, allowing you to select fields specific to this implementor type.
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.OpenWish} |
   * | **Kind** | Interface Implementor |
   * | **Parent** | {@link $Schema.BaseWish} |
   * | **Path** | `BaseWish -> OpenWish` |
   *
   * @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments}
   * @see {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface Types}
   *
   * @example
   * ```ts
   * query.basewishs({
   * id: true,
   * name: true,
   * ___on_OpenWish: {
   * // ... OpenWish-specific fields
   * }
   * })
   * ```
   */
  ___on_OpenWish?: $Named.OpenWish<_$Context>;
  /**
   * Inline fragment selection for {@link $Schema.PendingWish} implementor.
   *
   * When the runtime value is of type {@link $Schema.PendingWish}, this selection set is applied, allowing you to select fields specific to this implementor type.
   *
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.PendingWish} |
   * | **Kind** | Interface Implementor |
   * | **Parent** | {@link $Schema.BaseWish} |
   * | **Path** | `BaseWish -> PendingWish` |
   *
   * @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments}
   * @see {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface Types}
   *
   * @example
   * ```ts
   * query.basewishs({
   * id: true,
   * name: true,
   * ___on_PendingWish: {
   * // ... PendingWish-specific fields
   * }
   * })
   * ```
   */
  ___on_PendingWish?: $Named.PendingWish<_$Context>;
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
   * A meta field. Is the name of the type being selected. Since this is a interface type and thus polymorphic,
   * the name is one of the implementor type names, whichever is ultimately returned at runtime.
   *
   * @see {@link https://graphql.org/learn/queries/#meta-fields | Meta Fields}
   */
  __typename?:
    | GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator>
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
    | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString;
}
