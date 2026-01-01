import { queryOptions } from "@tanstack/react-query";
import getMyWishes from "../functions/query/getMyWishes";

export const getMyWishesQueryOptions = queryOptions({
  queryKey: ["my-wishes"],
  queryFn: () => getMyWishes(),
});
