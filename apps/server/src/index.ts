import { createYoga } from "graphql-yoga";
import { Hono } from "hono";
import { schema } from "./graphql/schema.ts";
import { getUserFromRequest } from "./lib/clerk.ts";
import { connectToDatabase } from "./lib/mongoose.ts";

await connectToDatabase();

const app = new Hono();

const yoga = createYoga({
  schema,
  context: async ({ request }) => {
    const user = await getUserFromRequest(request);
    return {
      ClerkUser: user?.ClerkUser,
      DbUser: user?.DbUser,
    };
  },
  cors: {
    origin: ["http://localhost:3000"],
    credentials: true,
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
  port: 4000,
};
