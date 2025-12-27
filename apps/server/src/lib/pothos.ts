import SchemaBuilder from "@pothos/core";
import ValidationPlugin from "@pothos/plugin-validation";
import { DateResolver, JSONResolver } from "graphql-scalars";
import type { Model } from "mongoose";
import type { Category } from "@/models/category.ts";
import type { User } from "@/models/user.ts";
import type { Wish } from "@/models/wish.ts";

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
  UserModel: Model<User>;
  CategoryModel: Model<Category>;
  WishModel: Model<Wish>;
};

const builder = new SchemaBuilder<{
  Scalars: ScalarBuilders;
  Context: ContextBuilder;
}>({
  plugins: [ValidationPlugin],
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
