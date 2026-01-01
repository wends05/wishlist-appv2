import type { User } from "@clerk/backend";
import SchemaBuilder from "@pothos/core";
import ScopeAuthPlugin from "@pothos/plugin-scope-auth";
import ValidationPlugin from "@pothos/plugin-validation";
import type { IUser } from "@repo/common/schemas";
import { DateResolver, JSONResolver } from "graphql-scalars";
import type { DocumentType } from "./utils/DocumentType.ts";

//================================
/**
 * Type definitions for Schemas
 */
//================================
type ScalarBuilders = {
  Date: {
    Input: Date;
    Output: Date;
  };
  JSON: {
    Input: unknown;
    Output: unknown;
  };
};

//================================
/**
 * Pothos Schema Builder
 */
//================================
type ContextBuilder = {
  ClerkUser: User;
  DbUser: DocumentType<IUser>;
};

//=================================
/**
 * Auth Scopes
 */
//================================
type AuthScopes = {
  isAuthenticated: boolean;
};

const builder = new SchemaBuilder<{
  AuthScopes: AuthScopes;
  Scalars: ScalarBuilders;
  Context: ContextBuilder;
}>({
  plugins: [ScopeAuthPlugin, ValidationPlugin],
  scopeAuth: {
    authScopes: async (context) => ({
      isAuthenticated: !!context.ClerkUser || !!context.DbUser,
    }),
  },
});

//================================
/**
 * Root Query types
 */
//================================
builder.queryType({});
builder.mutationType({});

//================================
/**
 * Custom Scalars
 */
//================================
builder.addScalarType("Date", DateResolver);
builder.addScalarType("JSON", JSONResolver);

export default builder;
