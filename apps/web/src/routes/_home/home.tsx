import { createFileRoute } from "@tanstack/react-router";
import HomePage from "@/feature/home/components/HomePage";

export const Route = createFileRoute("/_home/home")({
  component: HomePage,
});
