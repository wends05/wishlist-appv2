import { queryOptions } from "@tanstack/react-query";
import getCategories from "../functions/query/getCategories";

export const getCategoriesQueryOptions = queryOptions({
  queryKey: ["categories"],
  queryFn: () => getCategories(),
});
