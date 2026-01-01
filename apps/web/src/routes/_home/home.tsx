import HomePage from "@/feature/home/components/HomePage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_home/home")({
  component: HomePage,
});
