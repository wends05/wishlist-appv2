import { createFileRoute } from "@tanstack/react-router";
import WishList from "@/feature/wish/components/WishList";
import { wishQueryOptions } from "@/feature/wish/options";

export const Route = createFileRoute("/_home/wishes")({
  staleTime: Infinity,
  component: RouteComponent,
  loader: async ({ context }) => {
    return {
      wishes: await context.queryClient.fetchQuery(wishQueryOptions.myWishes),
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
