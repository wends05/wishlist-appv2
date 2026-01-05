import type { HomeWishesResponse } from "@repo/common/dto";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import WishCardActions from "@/feature/wish/components/WishCardActions";
import { UserIcon } from "@phosphor-icons/react";

interface HomeWishItemProps {
  wish: HomeWishesResponse["wishes"][number];
}

export default function HomeWishItem({ wish }: HomeWishItemProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{wish.name}</CardTitle>
        <CardDescription>{wish.category.name}</CardDescription>
        <CardDescription className="flex items-center gap-0.5">
          <UserIcon /> {wish.owner.name}
        </CardDescription>
        <CardAction>
          <WishCardActions _id={wish._id} />
        </CardAction>
      </CardHeader>
    </Card>
  );
}
