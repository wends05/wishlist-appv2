import SchemaBuilder from "@pothos/core";
import ValidationPlugin from "@pothos/plugin-validation";
import { DateResolver, JSONResolver } from "graphql-scalars";

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
  hello:"world"
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
