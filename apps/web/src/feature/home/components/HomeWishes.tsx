import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { wishInfiniteQueryOptions } from "@/feature/wish/options";
import HomeWishItem from "./HomeWishItem";

interface HomeWishesProps {
  searchTerm?: string;
  categoryId?: string;
}

export default function HomeWishes({
  searchTerm,
  categoryId,
}: HomeWishesProps) {
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useSuspenseInfiniteQuery(
      wishInfiniteQueryOptions.homeWishes({ searchTerm, categoryId })
    );
  return (
    <div className="flex flex-col px-4">
      {/* Wish List */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.pages.flat().map((wish) => (
          <HomeWishItem key={wish._id} wish={wish} />
        ))}
      </div>

      {/* Refresh */}
      <div className="mt-4 self-center">
        {hasNextPage ? (
          <Button disabled={isFetchingNextPage} onClick={() => fetchNextPage()}>
            {isFetchingNextPage ? "Loading..." : "Load More"}
          </Button>
        ) : (
          <p className="text-center text-gray-500 text-sm">
            No more wishes to load.
          </p>
        )}
      </div>
    </div>
  );
}
