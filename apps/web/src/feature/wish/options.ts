import type { CreateWishDTO, RequestGrantInput } from "@repo/common/dto";
import { infiniteQueryOptions, mutationOptions, queryOptions, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import createWish, { getCategories, getHomeWishes, getMyWishes, getWishDetails, requestGrant } from "./server";

// Query key factory - centralize keys to avoid typos
export const wishKeys = {
  all: ["wishes"] as const,
  categories: () => [...wishKeys.all, "categories"] as const,
  myWishes: () => [...wishKeys.all, "my-wishes"] as const,
  homeWishes: (search?: string, categoryId?: string) => [...wishKeys.all, "home", { search, categoryId }] as const,
  details: () => [...wishKeys.all, "detail"] as const,
  detail: (id: string) => [...wishKeys.details(), id] as const,
};

export const wishQueryOptions = {
  getCategories: queryOptions({
    queryKey: wishKeys.categories(),
    queryFn: () => getCategories(),
    staleTime: Infinity,
  }),

  myWishes: queryOptions({
    queryKey: wishKeys.myWishes(),
    queryFn: () => getMyWishes(),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000, // Keep for 10 minutes after unmount
    refetchOnWindowFocus: true, // Refresh when user returns to tab
  }),

  wishDetails: (id: string) =>
    queryOptions({
      queryKey: wishKeys.detail(id),
      queryFn: () => getWishDetails({ data: id }),
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
      enabled: !!id, // Only run if id exists
      retry: 2, // Retry failed requests twice
    }),
};

export const wishInfiniteQueryOptions = {
  homeWishes: ({ categoryId, searchTerm, limit = 3 }: { categoryId?: string; searchTerm?: string; limit?: number }) =>
    infiniteQueryOptions({
      queryKey: wishKeys.homeWishes(searchTerm, categoryId),
      initialPageParam: 0,
      queryFn: ({ pageParam }) => {
        const homeWishes = getHomeWishes({
          data: {
            limit,
            skip: pageParam ?? 0,
            search: searchTerm,
            categoryId,
          },
        });
        return homeWishes;
      },
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.length === limit) {
          return pages.length * limit;
        }
        return undefined;
      },
      staleTime: 2 * 60 * 1000, // 2 minutes - home feed changes as others add wishes
      gcTime: 5 * 60 * 1000,
      refetchOnWindowFocus: true, // Refresh feed when user returns
    }),
};

export const wishMutationOptions = {
  createWish: () => {
    const queryClient = useQueryClient();
    return mutationOptions({
      mutationFn: async (data: CreateWishDTO) => {
        try {
          return await createWish({ data });
        } catch (error) {
          console.error(error);
          throw error;
        }
      },
      onSuccess: (message) => {
        // Invalidate related queries
        queryClient.invalidateQueries({ queryKey: wishKeys.myWishes() });
        // Also invalidate home feed since your new wish might appear there for others
        queryClient.invalidateQueries({ queryKey: wishKeys.all });

        toast.success(message);
      },
      onError: (error) => {
        toast.error("Failed to create wish. Please try again.");
        console.error("Create Wish Error:", error);
      },
      // Optional: Add optimistic update for instant UI feedback
      // onMutate: async (newWish) => {
      //   await queryClient.cancelQueries({ queryKey: wishKeys.myWishes() });
      //   const previousWishes = queryClient.getQueryData(wishKeys.myWishes());
      //   queryClient.setQueryData(wishKeys.myWishes(), (old) => [...(old ?? []), newWish]);
      //   return { previousWishes };
      // },
    });
  },
  requestGrant: (wishId: string) => {
    const queryClient = useQueryClient();

    return mutationOptions({
      mutationFn: async ({ message }: { message: RequestGrantInput["message"] }) => {
        return await requestGrant({ data: { wishId, message } });
      },
      onSuccess: (message) => {
        // Invalidate wish details to reflect new request status
        queryClient.invalidateQueries({ queryKey: wishKeys.detail(wishId) });

        // Invalidate home wishes in case the wish status affects its visibility
        queryClient.invalidateQueries({ queryKey: wishKeys.homeWishes() });
        toast.success(message);
      },
      onError: (error) => {
        toast.error("Failed to request grant. Please try again.");
        console.error("Request Grant Error:", error);
      },
    });
  },
};
