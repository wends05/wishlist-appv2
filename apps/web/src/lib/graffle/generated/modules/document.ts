import { createStaticRootType } from "graffle/extensions/document-builder";
import { schemaDrivenDataMap as sddm } from "./schema-driven-data-map.js";
import { GraphqlKit } from "graffle/utilities-for-generated";
import type * as SelectionSets from "./selection-sets/_.js";
import type * as $$Scalar from "./scalar.js";
import type * as SchemaMap from "./schema-driven-data-map.js";

import type * as $$Utilities from "graffle/utilities-for-generated";
import type * as $$Schema from "./schema/_.js";

/**
 * Context for static document type inference.
 *
 * Static documents have no runtime extensions, hence typeHookRequestResultDataTypes is never.
 */
interface StaticDocumentContext {
  typeHookRequestResultDataTypes: never;
  scalars: $$Scalar.$Registry;
}

/**
 * Static query builder for compile-time GraphQL document generation.
 *
 * @remarks
 * Each field method generates a fully typed GraphQL  document string with:
 * - Type-safe selection sets matching your schema
 * - Automatic variable inference from `$` usage
 * - Compile-time validation of field selections
 * - Zero runtime overhead - documents are generated at build time
 *
 * @example Basic query
 * ```ts
 * const getUserDoc = query.user({
 * id: true,
 * name: true,
 * email: true
 * })
 * // Generates: query { user { id name email } }
 * ```
 *
 * @example With variables
 * ```ts
 * import { Var } from 'graffle'
 *
 * const getUserByIdDoc = query.user({
 * $: { id: $ },
 * name: true,
 * posts: { title: true }
 * })
 * // Generates: query ($id: ID!) { user(id: $id) { name posts { title } } }
 * // Variables type: { id: string }
 * ```
 *
 * @see {@link https://graffle.js.org/guides/static-generation | Static Generation Guide}
 */

export interface QueryBuilder {
  $batch: <
    const $SelectionSet extends
      SelectionSets.Query<GraphqlKit.Document.Object.Select.StaticBuilderContext>,
  >(
    selection: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      GraphqlKit.Document.Object.InferResult.OperationQuery<
        $SelectionSet,
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      GraphqlKit.Document.Object.Var.InferFromQuery<
        $SelectionSet,
        SchemaMap.SchemaDrivenDataMap
      >
    >,
    true
  >;

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.String} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.authenticated` |
   * | **Nullability** | Optional |
   *
   * @example
   * ```ts
   * const doc = query.authenticated()
   * ```
   */
  authenticated: <
    const $SelectionSet extends
      SelectionSets.Query<GraphqlKit.Document.Object.Select.StaticBuilderContext>["authenticated"],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      GraphqlKit.Document.Object.InferResult.OperationQuery<
        { authenticated: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      GraphqlKit.Document.Object.Var.InferFromQuery<
        { authenticated: Exclude<$SelectionSet, undefined> },
        SchemaMap.SchemaDrivenDataMap
      >
    >,
    true
  >;

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Category}[] |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.categories` |
   * | **Nullability** | Optional |
   * | **List** | Yes |
   *
   * @example
   * ```ts
   * const doc = query.categories({
   * _id: true,
   * description: true,
   * name: true
   * })
   * ```
   */
  categories: <
    const $SelectionSet extends
      SelectionSets.Query<GraphqlKit.Document.Object.Select.StaticBuilderContext>["categories"],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      GraphqlKit.Document.Object.InferResult.OperationQuery<
        { categories: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      GraphqlKit.Document.Object.Var.InferFromQuery<
        { categories: Exclude<$SelectionSet, undefined> },
        SchemaMap.SchemaDrivenDataMap
      >
    >,
    true
  >;

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.User} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.me` |
   * | **Nullability** | Optional |
   *
   * @example
   * ```ts
   * const doc = query.me({
   * _id: true,
   * clerkId: true,
   * email: true,
   * // ...
   * })
   * ```
   */
  me: <
    const $SelectionSet extends
      SelectionSets.Query<GraphqlKit.Document.Object.Select.StaticBuilderContext>["me"],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      GraphqlKit.Document.Object.InferResult.OperationQuery<
        { me: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      GraphqlKit.Document.Object.Var.InferFromQuery<
        { me: Exclude<$SelectionSet, undefined> },
        SchemaMap.SchemaDrivenDataMap
      >
    >,
    true
  >;

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Wish}[]! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.myWishes` |
   * | **Nullability** | Required |
   * | **List** | Yes |
   *
   * @example
   * ```ts
   * const doc = query.myWishes({
   * _id: true,
   * category: true,
   * categoryId: true,
   * // ...
   * })
   * ```
   */
  myWishes: <
    const $SelectionSet extends
      SelectionSets.Query<GraphqlKit.Document.Object.Select.StaticBuilderContext>["myWishes"],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      GraphqlKit.Document.Object.InferResult.OperationQuery<
        { myWishes: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      GraphqlKit.Document.Object.Var.InferFromQuery<
        { myWishes: Exclude<$SelectionSet, undefined> },
        SchemaMap.SchemaDrivenDataMap
      >
    >,
    true
  >;

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.User}[] |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.users` |
   * | **Nullability** | Optional |
   * | **List** | Yes |
   *
   * @example
   * ```ts
   * const doc = query.users({
   * _id: true,
   * clerkId: true,
   * email: true,
   * // ...
   * })
   * ```
   */
  users: <
    const $SelectionSet extends
      SelectionSets.Query<GraphqlKit.Document.Object.Select.StaticBuilderContext>["users"],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      GraphqlKit.Document.Object.InferResult.OperationQuery<
        { users: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      GraphqlKit.Document.Object.Var.InferFromQuery<
        { users: Exclude<$SelectionSet, undefined> },
        SchemaMap.SchemaDrivenDataMap
      >
    >,
    true
  >;

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Wish} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.wish` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   *
   * @example
   * ```ts
   * const doc = query.wish({
   * // $: { ...variables }
   * _id: true,
   * category: true,
   * categoryId: true,
   * // ...
   * })
   * ```
   */
  wish: <
    const $SelectionSet extends
      SelectionSets.Query<GraphqlKit.Document.Object.Select.StaticBuilderContext>["wish"],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      GraphqlKit.Document.Object.InferResult.OperationQuery<
        { wish: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      GraphqlKit.Document.Object.Var.InferFromQuery<
        { wish: Exclude<$SelectionSet, undefined> },
        SchemaMap.SchemaDrivenDataMap
      >
    >,
    true
  >;

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Wish}[] |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.wishes` |
   * | **Nullability** | Optional |
   * | **List** | Yes |
   *
   * @example
   * ```ts
   * const doc = query.wishes({
   * _id: true,
   * category: true,
   * categoryId: true,
   * // ...
   * })
   * ```
   */
  wishes: <
    const $SelectionSet extends
      SelectionSets.Query<GraphqlKit.Document.Object.Select.StaticBuilderContext>["wishes"],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      GraphqlKit.Document.Object.InferResult.OperationQuery<
        { wishes: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      GraphqlKit.Document.Object.Var.InferFromQuery<
        { wishes: Exclude<$SelectionSet, undefined> },
        SchemaMap.SchemaDrivenDataMap
      >
    >,
    true
  >;
}

/**
 * Static query builder for compile-time GraphQL document generation.
 *
 * @remarks
 * Each field method generates a fully typed GraphQL  document string with:
 * - Type-safe selection sets matching your schema
 * - Automatic variable inference from `$` usage
 * - Compile-time validation of field selections
 * - Zero runtime overhead - documents are generated at build time
 *
 * @example Basic query
 * ```ts
 * const getUserDoc = query.user({
 * id: true,
 * name: true,
 * email: true
 * })
 * // Generates: query { user { id name email } }
 * ```
 *
 * @example With variables
 * ```ts
 * import { Var } from 'graffle'
 *
 * const getUserByIdDoc = query.user({
 * $: { id: $ },
 * name: true,
 * posts: { title: true }
 * })
 * // Generates: query ($id: ID!) { user(id: $id) { name posts { title } } }
 * // Variables type: { id: string }
 * ```
 *
 * @see {@link https://graffle.js.org/guides/static-generation | Static Generation Guide}
 */
export const query: QueryBuilder = createStaticRootType(
  GraphqlKit.Schema.OperationType.QUERY,
  { sddm },
) as any;

/**
 * Static mutation builder for compile-time GraphQL document generation.
 *
 * @remarks
 * Each field method generates a fully typed GraphQL mutation document  with:
 * - Type-safe selection sets and input types
 * - Automatic variable inference from `$` usage
 * - Compile-time validation of mutations
 * - Zero runtime overhead - documents are generated at build time
 *
 * @example
 * ```ts
 * import { Var } from 'graffle'
 *
 * const createUserDoc = mutation.createUser({
 * $: { input: $ },
 * id: true,
 * name: true
 * })
 * // Generates: mutation ($input: CreateUserInput!) { createUser(input: $input) { id name } }
 * ```
 *
 * @see {@link https://graffle.js.org/guides/static-generation | Static Generation Guide}
 */

export interface MutationBuilder {
  $batch: <
    const $SelectionSet extends
      SelectionSets.Mutation<GraphqlKit.Document.Object.Select.StaticBuilderContext>,
  >(
    selection: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      GraphqlKit.Document.Object.InferResult.OperationMutation<
        $SelectionSet,
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      GraphqlKit.Document.Object.Var.InferFromMutation<
        $SelectionSet,
        SchemaMap.SchemaDrivenDataMap
      >
    >,
    true
  >;

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Category} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.createCategory` |
   * | **Nullability** | Optional |
   * | **Arguments** | 2 |
   *
   * @example
   * ```ts
   * const doc = mutation.createCategory({
   * // $: { ...variables }
   * _id: true,
   * description: true,
   * name: true
   * })
   * ```
   */
  createCategory: <
    const $SelectionSet extends
      SelectionSets.Mutation<GraphqlKit.Document.Object.Select.StaticBuilderContext>["createCategory"],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      GraphqlKit.Document.Object.InferResult.OperationMutation<
        { createCategory: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      GraphqlKit.Document.Object.Var.InferFromMutation<
        { createCategory: Exclude<$SelectionSet, undefined> },
        SchemaMap.SchemaDrivenDataMap
      >
    >,
    true
  >;

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.User} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.createUser` |
   * | **Nullability** | Optional |
   * | **Arguments** | 2 |
   *
   * @example
   * ```ts
   * const doc = mutation.createUser({
   * // $: { ...variables }
   * _id: true,
   * clerkId: true,
   * email: true,
   * // ...
   * })
   * ```
   */
  createUser: <
    const $SelectionSet extends
      SelectionSets.Mutation<GraphqlKit.Document.Object.Select.StaticBuilderContext>["createUser"],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      GraphqlKit.Document.Object.InferResult.OperationMutation<
        { createUser: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      GraphqlKit.Document.Object.Var.InferFromMutation<
        { createUser: Exclude<$SelectionSet, undefined> },
        SchemaMap.SchemaDrivenDataMap
      >
    >,
    true
  >;

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Wish} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.createWish` |
   * | **Nullability** | Optional |
   * | **Arguments** | 4 |
   *
   * @example
   * ```ts
   * const doc = mutation.createWish({
   * // $: { ...variables }
   * _id: true,
   * category: true,
   * categoryId: true,
   * // ...
   * })
   * ```
   */
  createWish: <
    const $SelectionSet extends
      SelectionSets.Mutation<GraphqlKit.Document.Object.Select.StaticBuilderContext>["createWish"],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      GraphqlKit.Document.Object.InferResult.OperationMutation<
        { createWish: $SelectionSet },
        $$Schema.Schema
      >
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      GraphqlKit.Document.Object.Var.InferFromMutation<
        { createWish: Exclude<$SelectionSet, undefined> },
        SchemaMap.SchemaDrivenDataMap
      >
    >,
    true
  >;
}

/**
 * Static mutation builder for compile-time GraphQL document generation.
 *
 * @remarks
 * Each field method generates a fully typed GraphQL mutation document  with:
 * - Type-safe selection sets and input types
 * - Automatic variable inference from `$` usage
 * - Compile-time validation of mutations
 * - Zero runtime overhead - documents are generated at build time
 *
 * @example
 * ```ts
 * import { Var } from 'graffle'
 *
 * const createUserDoc = mutation.createUser({
 * $: { input: $ },
 * id: true,
 * name: true
 * })
 * // Generates: mutation ($input: CreateUserInput!) { createUser(input: $input) { id name } }
 * ```
 *
 * @see {@link https://graffle.js.org/guides/static-generation | Static Generation Guide}
 */
export const mutation: MutationBuilder = createStaticRootType(
  GraphqlKit.Schema.OperationType.MUTATION,
  { sddm },
) as any;
