import { SignIn } from "@clerk/clerk-react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/sign-in/$")({
  component: SignIn
});
