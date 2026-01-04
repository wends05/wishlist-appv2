import { queryOptions } from "@tanstack/react-query";
import { getUser } from "./server";

export const authQueryOptions = {
  me: queryOptions({
    queryKey: ["me"],
    queryFn: () => getUser(),
  }),
};
