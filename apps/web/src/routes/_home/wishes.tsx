import { createFileRoute } from "@tanstack/react-router";
import WishList from "@/feature/wish/components/WishList";
import { wishQueryOptions } from "@/feature/wish/options";

export const Route = createFileRoute("/_home/wishes")({
  staleTime: Infinity,
  component: RouteComponent,
  loader: async ({ context }) => {
    await context.queryClient.ensureQueryData(wishQueryOptions.myWishes);
  },
});

function RouteComponent() {
  return (
    <div>
      <WishList />
    </div>
  );
}
