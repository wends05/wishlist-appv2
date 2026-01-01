import { createClerkClient } from "@clerk/backend";
import { createServerOnlyFn } from "@tanstack/react-start";

const clerkClient = createServerOnlyFn(() => {
  const secretKey = process.env.CLERK_SECRET_KEY;
  if (!secretKey) {
    throw new Error("CLERK_SECRET_KEY is not defined");
  }
  return createClerkClient({
    secretKey,
  });
});

export default clerkClient;
