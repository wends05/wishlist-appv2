import WishList from "@/feature/wish/components/WishList";
import { getMyWishesQueryOptions } from "@/feature/wish/queryOptions/getMyWishesQueryOptions";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_home/wishes")({
  staleTime: Infinity,
  component: RouteComponent,
  loader: async ({ context }) => {
    return {
      wishes: await context.queryClient.fetchQuery(getMyWishesQueryOptions),
    };
  },
});

function RouteComponent() {
  const { wishes } = Route.useLoaderData();
  return (
    <div>
      <WishList wishes={wishes} />
    </div>
  );
}
