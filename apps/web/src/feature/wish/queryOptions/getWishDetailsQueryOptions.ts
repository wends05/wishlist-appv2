import { queryOptions } from "@tanstack/react-query";
import getWishDetails from "../functions/query/getWishDetails";

export const getWishDetailsQueryOptions = (id: string) =>
  queryOptions({
    queryKey: ["wish", id],
    queryFn: () => getWishDetails({ data: id }),
  });
