import type { IWishItem } from "@repo/common/schemas";
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
        <CardTitle>{name}</CardTitle>
        <CardDescription>{category.name}</CardDescription>
        <CardAction>
          <WishCardActions _id={_id} />
        </CardAction>
      </CardHeader>
    </Card>
  );
}
