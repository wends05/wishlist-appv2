import { queryOptions } from "@tanstack/react-query";
import { getUser } from "../functions/query/getUser";

const meQueryOptions = queryOptions({
  queryKey: ["me"],
  queryFn: () => getUser()
})
export default meQueryOptions;
