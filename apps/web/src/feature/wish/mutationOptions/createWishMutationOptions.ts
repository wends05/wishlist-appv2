import type { CreateWishDTO } from "@repo/common/dto";
import { mutationOptions, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "@tanstack/react-router";
import { toast } from "sonner";
import createWish from "../functions/query/createWish";
import { getMyWishesQueryOptions } from "../queryOptions/getMyWishesQueryOptions";

export const createWishMutationOptions = () => {
  const _queryClient = useQueryClient();
  const router = useRouter();

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
      // queryClient.refetchQueries(getMyWishesQueryOptions);

      toast.success(message);
      router.invalidate();
    },
    onError: (error) => {
      toast.error("Failed to create wish. Please try again.");
      console.error("Create Wish Error:", error);
    },
  });
};
