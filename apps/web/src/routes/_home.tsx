import meQueryOptions from "@/feature/auth/queryOptions/me";
import SidebarWrapper from "@/feature/home/components/sidebar/SidebarWrapper";
import { getCategoriesQueryOptions } from "@/feature/wish/queryOptions/getCategoriesQueryOptions";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_home")({
  loader: async ({ context }) => {
    await context.queryClient.ensureQueryData(meQueryOptions);
    await context.queryClient.ensureQueryData(getCategoriesQueryOptions );
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
