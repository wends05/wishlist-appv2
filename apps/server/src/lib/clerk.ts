import { fetchOrCreateUserByClerkId } from "@/services/User.service.ts";
import { createClerkClient } from "@clerk/backend";
import { parse } from "cookie";
import { createRemoteJWKSet, jwtVerify } from "jose";

export const clerkClient = () => {
  const secretKey = process.env.CLERK_SECRET_KEY;
  if (!secretKey) {
    throw new Error("CLERK_SECRET_KEY is not defined");
  }
  return createClerkClient({
    secretKey: secretKey,
  });
};

export const getUserFromRequest = async (request: Request) => {
  // get the jwks url
  const CLERK_JWKS_URL = process.env.CLERK_JWKS_URL;
  if (!CLERK_JWKS_URL) {
    throw new Error("CLERK_JWKS_URL is not defined");
  }

  // create a clerk client
  const client = clerkClient();

  // fetch the __session cookie from the request header
  const cookieHeader = request.headers.get("cookie");
  const cookies = parse(cookieHeader || "");
  const sessionToken = cookies["__session"];

  if (!sessionToken) {
    return null;
  }

  try {
    // attempt to verify the session manually
    const { payload } = await jwtVerify(
      sessionToken,
      createRemoteJWKSet(new URL(CLERK_JWKS_URL))
    );

    if (!payload) {
      return null;
    }
    const userId = payload.sub as string;
    const user = await client.users.getUser(userId);

    // fetch or create the user in the database
    const DbUser = await fetchOrCreateUserByClerkId(userId, {
      email: user.emailAddresses[0]?.emailAddress || "",
      name: user.username || "",
      clerkId: user.id,
    });

    return {
      ClerkUser: user,
      DbUser,
    };
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};
