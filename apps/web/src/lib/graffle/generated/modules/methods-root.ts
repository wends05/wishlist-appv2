import type * as $$SelectionSets from "./selection-sets/_.js";
import type * as $$Schema from "./schema/_.js";
import type * as $$Utilities from "graffle/utilities-for-generated";
import type { GraphqlKit } from "graffle/utilities-for-generated";
import type * as $$SchemaMap from "./schema-driven-data-map.js";

/**
 * GraphQL {@link https://graphql.org/learn/schema/#the-query-and-mutation-types | Query} root methods.
 *
 * All methods return Promises. Use `.query.$batch(...)` to select multiple fields at once.
 */
export interface QueryMethods<$Context extends $$Utilities.Context> {
  /**
   * Select multiple Query fields at once.
   *
   * Pass a selection set object that includes the fields you want.
   * Use this method to request multiple fields in a single request for better performance.
   */

  $batch: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.NoExcess<
        $SelectionSet,
        $$SelectionSets.Query<{ scalars: $Context["scalars"] }>
      >,
    ) => GraphqlKit.Document.Object.Var.MethodReturn<
      GraphqlKit.Document.Object.Var.InferFromQuery<
        $$Utilities.AssertExtendsObject<$SelectionSet>,
        $$SchemaMap.SchemaDrivenDataMap
      >,
      (null | {}) &
        $$Utilities.HandleOutput<
          $Context,
          GraphqlKit.Document.Object.InferResult.OperationQuery<
            $$Utilities.AssertExtendsObject<$SelectionSet>,
            $$Schema.Schema<$Context["scalars"]>
          >
        >,
      $$Utilities.DocumentRunnerDeferred<
        GraphqlKit.Document.Object.Var.InferFromQuery<
          $$Utilities.AssertExtendsObject<$SelectionSet>,
          $$SchemaMap.SchemaDrivenDataMap
        >,
        (null | {}) &
          $$Utilities.HandleOutput<
            $Context,
            GraphqlKit.Document.Object.InferResult.OperationQuery<
              $$Utilities.AssertExtendsObject<$SelectionSet>,
              $$Schema.Schema<$Context["scalars"]>
            >
          >
      >
    >
  >;

  /**
   * Request the {@link https://graphql.org/learn/schema/#the-__typename-field | __typename} meta-field.
   *
   * The `__typename` field returns the name of the object type. In this case, it will always return `"Query"`.
   */

  __typename: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    () => Promise<
      (null | {}) &
        $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          { __typename: "Query" },
          "__typename"
        >
    >
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
   */

  authenticated: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.NoExcess<
        $SelectionSet,
        $$SelectionSets.Query.authenticated<{ scalars: $Context["scalars"] }>
      >,
    ) => GraphqlKit.Document.Object.Var.MethodReturn<
      GraphqlKit.Document.Object.Var.InferFromQuery<
        { authenticated: $SelectionSet },
        $$SchemaMap.SchemaDrivenDataMap
      >,
      (null | {}) &
        $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          GraphqlKit.Document.Object.InferResult.OperationQuery<
            { authenticated: $SelectionSet },
            $$Schema.Schema<$Context["scalars"]>
          >,
          "authenticated"
        >,
      $$Utilities.DocumentRunnerDeferred<
        GraphqlKit.Document.Object.Var.InferFromQuery<
          { authenticated: $SelectionSet },
          $$SchemaMap.SchemaDrivenDataMap
        >,
        (null | {}) &
          $$Utilities.HandleOutputDocumentBuilderRootField<
            $Context,
            GraphqlKit.Document.Object.InferResult.OperationQuery<
              { authenticated: $SelectionSet },
              $$Schema.Schema<$Context["scalars"]>
            >,
            "authenticated"
          >
      >
    >
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
   */

  categories: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.NoExcess<
        $SelectionSet,
        $$SelectionSets.Query.categories<{ scalars: $Context["scalars"] }>
      >,
    ) => GraphqlKit.Document.Object.Var.MethodReturn<
      GraphqlKit.Document.Object.Var.InferFromQuery<
        { categories: $SelectionSet },
        $$SchemaMap.SchemaDrivenDataMap
      >,
      (null | {}) &
        $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          GraphqlKit.Document.Object.InferResult.OperationQuery<
            { categories: $SelectionSet },
            $$Schema.Schema<$Context["scalars"]>
          >,
          "categories"
        >,
      $$Utilities.DocumentRunnerDeferred<
        GraphqlKit.Document.Object.Var.InferFromQuery<
          { categories: $SelectionSet },
          $$SchemaMap.SchemaDrivenDataMap
        >,
        (null | {}) &
          $$Utilities.HandleOutputDocumentBuilderRootField<
            $Context,
            GraphqlKit.Document.Object.InferResult.OperationQuery<
              { categories: $SelectionSet },
              $$Schema.Schema<$Context["scalars"]>
            >,
            "categories"
          >
      >
    >
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
   */

  me: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.NoExcess<
        $SelectionSet,
        $$SelectionSets.Query.me<{ scalars: $Context["scalars"] }>
      >,
    ) => GraphqlKit.Document.Object.Var.MethodReturn<
      GraphqlKit.Document.Object.Var.InferFromQuery<
        { me: $SelectionSet },
        $$SchemaMap.SchemaDrivenDataMap
      >,
      (null | {}) &
        $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          GraphqlKit.Document.Object.InferResult.OperationQuery<
            { me: $SelectionSet },
            $$Schema.Schema<$Context["scalars"]>
          >,
          "me"
        >,
      $$Utilities.DocumentRunnerDeferred<
        GraphqlKit.Document.Object.Var.InferFromQuery<
          { me: $SelectionSet },
          $$SchemaMap.SchemaDrivenDataMap
        >,
        (null | {}) &
          $$Utilities.HandleOutputDocumentBuilderRootField<
            $Context,
            GraphqlKit.Document.Object.InferResult.OperationQuery<
              { me: $SelectionSet },
              $$Schema.Schema<$Context["scalars"]>
            >,
            "me"
          >
      >
    >
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
   */

  myWishes: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.NoExcess<
        $SelectionSet,
        $$SelectionSets.Query.myWishes<{ scalars: $Context["scalars"] }>
      >,
    ) => GraphqlKit.Document.Object.Var.MethodReturn<
      GraphqlKit.Document.Object.Var.InferFromQuery<
        { myWishes: $SelectionSet },
        $$SchemaMap.SchemaDrivenDataMap
      >,
      (null | {}) &
        $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          GraphqlKit.Document.Object.InferResult.OperationQuery<
            { myWishes: $SelectionSet },
            $$Schema.Schema<$Context["scalars"]>
          >,
          "myWishes"
        >,
      $$Utilities.DocumentRunnerDeferred<
        GraphqlKit.Document.Object.Var.InferFromQuery<
          { myWishes: $SelectionSet },
          $$SchemaMap.SchemaDrivenDataMap
        >,
        (null | {}) &
          $$Utilities.HandleOutputDocumentBuilderRootField<
            $Context,
            GraphqlKit.Document.Object.InferResult.OperationQuery<
              { myWishes: $SelectionSet },
              $$Schema.Schema<$Context["scalars"]>
            >,
            "myWishes"
          >
      >
    >
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
   */

  users: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.NoExcess<
        $SelectionSet,
        $$SelectionSets.Query.users<{ scalars: $Context["scalars"] }>
      >,
    ) => GraphqlKit.Document.Object.Var.MethodReturn<
      GraphqlKit.Document.Object.Var.InferFromQuery<
        { users: $SelectionSet },
        $$SchemaMap.SchemaDrivenDataMap
      >,
      (null | {}) &
        $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          GraphqlKit.Document.Object.InferResult.OperationQuery<
            { users: $SelectionSet },
            $$Schema.Schema<$Context["scalars"]>
          >,
          "users"
        >,
      $$Utilities.DocumentRunnerDeferred<
        GraphqlKit.Document.Object.Var.InferFromQuery<
          { users: $SelectionSet },
          $$SchemaMap.SchemaDrivenDataMap
        >,
        (null | {}) &
          $$Utilities.HandleOutputDocumentBuilderRootField<
            $Context,
            GraphqlKit.Document.Object.InferResult.OperationQuery<
              { users: $SelectionSet },
              $$Schema.Schema<$Context["scalars"]>
            >,
            "users"
          >
      >
    >
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
   */

  wish: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.NoExcess<
        $SelectionSet,
        $$SelectionSets.Query.wish<{ scalars: $Context["scalars"] }>
      >,
    ) => GraphqlKit.Document.Object.Var.MethodReturn<
      GraphqlKit.Document.Object.Var.InferFromQuery<
        { wish: $SelectionSet },
        $$SchemaMap.SchemaDrivenDataMap
      >,
      (null | {}) &
        $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          GraphqlKit.Document.Object.InferResult.OperationQuery<
            { wish: $SelectionSet },
            $$Schema.Schema<$Context["scalars"]>
          >,
          "wish"
        >,
      $$Utilities.DocumentRunnerDeferred<
        GraphqlKit.Document.Object.Var.InferFromQuery<
          { wish: $SelectionSet },
          $$SchemaMap.SchemaDrivenDataMap
        >,
        (null | {}) &
          $$Utilities.HandleOutputDocumentBuilderRootField<
            $Context,
            GraphqlKit.Document.Object.InferResult.OperationQuery<
              { wish: $SelectionSet },
              $$Schema.Schema<$Context["scalars"]>
            >,
            "wish"
          >
      >
    >
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
   */

  wishes: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.NoExcess<
        $SelectionSet,
        $$SelectionSets.Query.wishes<{ scalars: $Context["scalars"] }>
      >,
    ) => GraphqlKit.Document.Object.Var.MethodReturn<
      GraphqlKit.Document.Object.Var.InferFromQuery<
        { wishes: $SelectionSet },
        $$SchemaMap.SchemaDrivenDataMap
      >,
      (null | {}) &
        $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          GraphqlKit.Document.Object.InferResult.OperationQuery<
            { wishes: $SelectionSet },
            $$Schema.Schema<$Context["scalars"]>
          >,
          "wishes"
        >,
      $$Utilities.DocumentRunnerDeferred<
        GraphqlKit.Document.Object.Var.InferFromQuery<
          { wishes: $SelectionSet },
          $$SchemaMap.SchemaDrivenDataMap
        >,
        (null | {}) &
          $$Utilities.HandleOutputDocumentBuilderRootField<
            $Context,
            GraphqlKit.Document.Object.InferResult.OperationQuery<
              { wishes: $SelectionSet },
              $$Schema.Schema<$Context["scalars"]>
            >,
            "wishes"
          >
      >
    >
  >;
}

/**
 * GraphQL {@link https://graphql.org/learn/schema/#the-mutation-and-mutation-types | Mutation} root methods.
 *
 * All methods return Promises. Use `.mutation.$batch(...)` to select multiple fields at once.
 */
export interface MutationMethods<$Context extends $$Utilities.Context> {
  /**
   * Select multiple Mutation fields at once.
   *
   * Pass a selection set object that includes the fields you want.
   * Use this method to request multiple fields in a single request for better performance.
   */

  $batch: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.NoExcess<
        $SelectionSet,
        $$SelectionSets.Mutation<{ scalars: $Context["scalars"] }>
      >,
    ) => GraphqlKit.Document.Object.Var.MethodReturn<
      GraphqlKit.Document.Object.Var.InferFromMutation<
        $$Utilities.AssertExtendsObject<$SelectionSet>,
        $$SchemaMap.SchemaDrivenDataMap
      >,
      (null | {}) &
        $$Utilities.HandleOutput<
          $Context,
          GraphqlKit.Document.Object.InferResult.OperationMutation<
            $$Utilities.AssertExtendsObject<$SelectionSet>,
            $$Schema.Schema<$Context["scalars"]>
          >
        >,
      $$Utilities.DocumentRunnerDeferred<
        GraphqlKit.Document.Object.Var.InferFromMutation<
          $$Utilities.AssertExtendsObject<$SelectionSet>,
          $$SchemaMap.SchemaDrivenDataMap
        >,
        (null | {}) &
          $$Utilities.HandleOutput<
            $Context,
            GraphqlKit.Document.Object.InferResult.OperationMutation<
              $$Utilities.AssertExtendsObject<$SelectionSet>,
              $$Schema.Schema<$Context["scalars"]>
            >
          >
      >
    >
  >;

  /**
   * Request the {@link https://graphql.org/learn/schema/#the-__typename-field | __typename} meta-field.
   *
   * The `__typename` field returns the name of the object type. In this case, it will always return `"Mutation"`.
   */

  __typename: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    () => Promise<
      (null | {}) &
        $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          { __typename: "Mutation" },
          "__typename"
        >
    >
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
   */

  createCategory: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.NoExcess<
        $SelectionSet,
        $$SelectionSets.Mutation.createCategory<{
          scalars: $Context["scalars"];
        }>
      >,
    ) => GraphqlKit.Document.Object.Var.MethodReturn<
      GraphqlKit.Document.Object.Var.InferFromMutation<
        { createCategory: $SelectionSet },
        $$SchemaMap.SchemaDrivenDataMap
      >,
      (null | {}) &
        $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          GraphqlKit.Document.Object.InferResult.OperationMutation<
            { createCategory: $SelectionSet },
            $$Schema.Schema<$Context["scalars"]>
          >,
          "createCategory"
        >,
      $$Utilities.DocumentRunnerDeferred<
        GraphqlKit.Document.Object.Var.InferFromMutation<
          { createCategory: $SelectionSet },
          $$SchemaMap.SchemaDrivenDataMap
        >,
        (null | {}) &
          $$Utilities.HandleOutputDocumentBuilderRootField<
            $Context,
            GraphqlKit.Document.Object.InferResult.OperationMutation<
              { createCategory: $SelectionSet },
              $$Schema.Schema<$Context["scalars"]>
            >,
            "createCategory"
          >
      >
    >
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
   */

  createUser: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.NoExcess<
        $SelectionSet,
        $$SelectionSets.Mutation.createUser<{ scalars: $Context["scalars"] }>
      >,
    ) => GraphqlKit.Document.Object.Var.MethodReturn<
      GraphqlKit.Document.Object.Var.InferFromMutation<
        { createUser: $SelectionSet },
        $$SchemaMap.SchemaDrivenDataMap
      >,
      (null | {}) &
        $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          GraphqlKit.Document.Object.InferResult.OperationMutation<
            { createUser: $SelectionSet },
            $$Schema.Schema<$Context["scalars"]>
          >,
          "createUser"
        >,
      $$Utilities.DocumentRunnerDeferred<
        GraphqlKit.Document.Object.Var.InferFromMutation<
          { createUser: $SelectionSet },
          $$SchemaMap.SchemaDrivenDataMap
        >,
        (null | {}) &
          $$Utilities.HandleOutputDocumentBuilderRootField<
            $Context,
            GraphqlKit.Document.Object.InferResult.OperationMutation<
              { createUser: $SelectionSet },
              $$Schema.Schema<$Context["scalars"]>
            >,
            "createUser"
          >
      >
    >
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
   */

  createWish: $$Utilities.GraffleKit.Context.Configuration.Check.Preflight<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.NoExcess<
        $SelectionSet,
        $$SelectionSets.Mutation.createWish<{ scalars: $Context["scalars"] }>
      >,
    ) => GraphqlKit.Document.Object.Var.MethodReturn<
      GraphqlKit.Document.Object.Var.InferFromMutation<
        { createWish: $SelectionSet },
        $$SchemaMap.SchemaDrivenDataMap
      >,
      (null | {}) &
        $$Utilities.HandleOutputDocumentBuilderRootField<
          $Context,
          GraphqlKit.Document.Object.InferResult.OperationMutation<
            { createWish: $SelectionSet },
            $$Schema.Schema<$Context["scalars"]>
          >,
          "createWish"
        >,
      $$Utilities.DocumentRunnerDeferred<
        GraphqlKit.Document.Object.Var.InferFromMutation<
          { createWish: $SelectionSet },
          $$SchemaMap.SchemaDrivenDataMap
        >,
        (null | {}) &
          $$Utilities.HandleOutputDocumentBuilderRootField<
            $Context,
            GraphqlKit.Document.Object.InferResult.OperationMutation<
              { createWish: $SelectionSet },
              $$Schema.Schema<$Context["scalars"]>
            >,
            "createWish"
          >
      >
    >
  >;
}

export interface BuilderMethodsRoot<$Context extends $$Utilities.Context> {
  /**
   * Access to {@link https://graphql.org/learn/schema/#the-query-and-mutation-types | Query} root field methods.
   *
   * Each method corresponds to a root field on the GraphQL schema and returns a Promise.
   * Use `.$batch(...)` to select multiple query fields in a single request.
   *
   * @example Single field
   * ```ts
   * const user = await graffle.query.user({ id: true, name: true })
   * ```
   * @example Multiple fields with $batch
   * ```ts
   * const data = await graffle.query.$batch({
   * user: { id: true, name: true },
   * posts: { title: true, content: true }
   * })
   * ```
   */
  query: QueryMethods<$Context>;
  /**
   * Access to {@link https://graphql.org/learn/schema/#the-mutation-and-mutation-types | Mutation} root field methods.
   *
   * Each method corresponds to a root field on the GraphQL schema and returns a Promise.
   * Use `.$batch(...)` to select multiple mutation fields in a single request.
   *
   * @example Single field
   * ```ts
   * const result = await graffle.mutation.createUser({
   * id: true,
   * name: true
   * })
   * ```
   * @example Multiple fields with $batch
   * ```ts
   * const data = await graffle.mutation.$batch({
   * createUser: { id: true, name: true },
   * createPost: { id: true, title: true }
   * })
   * ```
   */
  mutation: MutationMethods<$Context>;
}

export interface BuilderMethodsRootFn extends $$Utilities.Kind.Kind {
  // @ts-expect-error parameter is Untyped.
  return: BuilderMethodsRoot<this["parameters"]>;
}
