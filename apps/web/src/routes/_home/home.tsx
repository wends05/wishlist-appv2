import { HomeWishesInputSchema } from "@repo/common/dto";
import { createFileRoute } from "@tanstack/react-router";
import HomeWishes from "@/feature/home/components/HomeWishes";
import WishSearchAndFilter from "@/feature/home/components/WishSearchAndFilter";
import { wishInfiniteQueryOptions } from "@/feature/wish/options";

export const Route = createFileRoute("/_home/home")({
  validateSearch: HomeWishesInputSchema.pick({
    search: true,
    categoryId: true,
  }),
  loaderDeps: ({ search }) => ({
    search,
  }),
  loader: async ({ context, deps }) => {
    await context.queryClient.prefetchInfiniteQuery(
      wishInfiniteQueryOptions.homeWishes({
        searchTerm: deps.search.search || undefined,
        categoryId: deps.search.categoryId || undefined,
      })
    );
  },
  component: HomePage,
});

function HomePage() {
  const { search, categoryId } = Route.useSearch();

  return (
    <div className="flex flex-col gap-3">
      <WishSearchAndFilter />
      <HomeWishes categoryId={categoryId} searchTerm={search} />
    </div>
  );
}
