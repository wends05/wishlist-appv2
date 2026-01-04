import { createFileRoute, Outlet } from "@tanstack/react-router";
import { authQueryOptions } from "@/feature/auth/options";
import SidebarWrapper from "@/feature/home/components/sidebar/SidebarWrapper";
import { wishQueryOptions } from "@/feature/wish/options";

export const Route = createFileRoute("/_home")({
  loader: async ({ context }) => {
    await context.queryClient.ensureQueryData(authQueryOptions.me);
    await context.queryClient.ensureQueryData(wishQueryOptions.getCategories);
  },
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <SidebarWrapper>
      <Outlet />
    </SidebarWrapper>
  );
}
