import { createFileRoute } from "@tanstack/react-router";
import WishDetails from "@/feature/wish/components/WishDetails";
import { wishQueryOptions } from "@/feature/wish/options";

export const Route = createFileRoute("/_home/wish/$id")({
  component: RouteComponent,
  beforeLoad: async ({ context, params: { id } }) => {
    return {
      wish: await context.queryClient.fetchQuery(
        wishQueryOptions.wishDetails(id)
      ),
    };
  },
});

function RouteComponent() {
  const { wish } = Route.useRouteContext();
  if (!wish) {
    return <div>Wish not found</div>;
  }
  return (
    <div>
      <WishDetails wish={wish} />
    </div>
  );
}
