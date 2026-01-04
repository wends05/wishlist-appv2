import { useSuspenseQuery } from "@tanstack/react-query";
import { wishQueryOptions } from "../options";
import WishCard from "./WishCard";

export default function WishList() {
  const { data: wishes } = useSuspenseQuery(wishQueryOptions.myWishes);
  return (
    <div className="grid grid-cols-1 gap-4 px-4 md:grid-cols-2 lg:grid-cols-3">
      {wishes.map((wish) => (
        <WishCard {...wish} key={wish._id} />
      ))}
    </div>
  );
}
