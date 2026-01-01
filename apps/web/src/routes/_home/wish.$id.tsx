import { createFileRoute } from "@tanstack/react-router";
import WishDetails from "@/feature/wish/components/WishDetails";
import { getWishDetailsQueryOptions } from "@/feature/wish/queryOptions/getWishDetailsQueryOptions";

export const Route = createFileRoute("/_home/wish/$id")({
  component: RouteComponent,
  beforeLoad: async ({ context, params: { id } }) => {
    return {
      wish: await context.queryClient.fetchQuery(
        getWishDetailsQueryOptions(id)
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
