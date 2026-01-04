import type { CreateWishDTO } from "@repo/common/dto";
import {
  mutationOptions,
  queryOptions,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";
import getCategories from "./functions/query/getCategories";
import getMyWishes from "./functions/query/getMyWishes";
import getWishDetails from "./functions/query/getWishDetails";
import createWish from "./server";

export const wishQueryOptions = {
  getCategories: queryOptions({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
  }),

  myWishes: queryOptions({
    queryKey: ["my-wishes"],
    queryFn: () => getMyWishes(),
  }),

  wishDetails: (id: string) =>
    queryOptions({
      queryKey: ["wish", id],
      queryFn: () => getWishDetails({ data: id }),
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
        queryClient.refetchQueries(wishQueryOptions.myWishes);

        toast.success(message);
        // router.invalidate();
      },
      onError: (error) => {
        toast.error("Failed to create wish. Please try again.");
        console.error("Create Wish Error:", error);
      },
    });
  },
};
