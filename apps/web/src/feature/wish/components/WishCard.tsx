import type { IWishItem } from "@repo/common/schemas";
import { Link } from "@tanstack/react-router";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import WishCardActions from "./WishCardActions";

interface WishCardProps extends IWishItem {}

export default function WishCard({ name, category, _id }: WishCardProps) {
  return (
    <Card>
      <CardHeader>
        <Link className="w-full" params={{ id: _id }} to={"/wish/$id"}>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{category.name}</CardDescription>
        </Link>
        <CardAction>
          <WishCardActions _id={_id} />
        </CardAction>
      </CardHeader>
    </Card>
  );
}
