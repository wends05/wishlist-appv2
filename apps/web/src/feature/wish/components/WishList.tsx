import type { IWishItem } from "@repo/common/schemas";
import WishCard from "./WishCard";

interface WishListProps {
  wishes: IWishItem[];
}

export default function WishList({ wishes }: WishListProps) {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 md:grid-cols-2 lg:grid-cols-3">
      {wishes.map((wish) => (
        <WishCard {...wish} key={wish._id} />
      ))}
    </div>
  );
}
