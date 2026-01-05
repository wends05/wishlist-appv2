import { createFileRoute } from "@tanstack/react-router";
import ProfilePage from "@/feature/profile/components/ProfilePage";

export const Route = createFileRoute("/_home/profile/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <ProfilePage />;
}
