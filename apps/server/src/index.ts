import { createYoga } from "graphql-yoga";
import { Hono } from "hono";
import { schema } from "./graphql/schema.ts";
import { connectToDatabase } from "./lib/mongoose.ts";

await connectToDatabase();

const app = new Hono();

const yoga = createYoga({
  schema,
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
