import { UserIcon } from "@phosphor-icons/react";
import type { HomeWishesResponse } from "@repo/common/dto";
import { Link } from "@tanstack/react-router";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import WishCardActions from "@/feature/wish/components/WishCardActions";

interface HomeWishItemProps {
  wish: HomeWishesResponse["wishes"][number];
}

export default function HomeWishItem({ wish }: HomeWishItemProps) {
  return (
    <Card>
      <CardHeader>
        <Link className="w-full" params={{ id: wish._id }} to={"/wish/$id"}>
          <CardTitle>{wish.name}</CardTitle>
          <CardDescription>{wish.category.name}</CardDescription>
          <CardDescription className="flex items-center gap-0.5">
            <UserIcon /> {wish.owner.name}
          </CardDescription>
        </Link>
        <CardAction>
          <WishCardActions _id={wish._id} />
        </CardAction>
      </CardHeader>
    </Card>
  );
}
