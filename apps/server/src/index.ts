import { createYoga } from "graphql-yoga";
import { Hono } from "hono";
import { connectToDatabase } from "./lib/mongoose.ts";
import builder from "./lib/pothos.ts";
import { CategoryModel } from "./models/category.ts";
import { UserModel } from "./models/user.ts";
import { WishModel } from "./models/wish.ts";

/**
 * Import all nodes to register them with the schema builder
 */
import "./nodes/index.ts";

await connectToDatabase();

const app = new Hono();

const yoga = createYoga({
  schema: builder.toSchema(),
  context: {
    UserModel,
    CategoryModel,
    WishModel,
  },
});

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.all("/graphql", async (c) => {
  return yoga.handle(c.req.raw);
});

export default {
  fetch: app.fetch,
  port: 3050,
};
