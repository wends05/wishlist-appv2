import { ArrowRightIcon } from "@phosphor-icons/react";
import type { IWishItem } from "@repo/common/schemas";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface WishCardProps extends IWishItem {}

export default function WishCard({ name, category, _id }: WishCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{category.name}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Link params={{ id: _id }} to="/wish/$id">
          <Button>
            <ArrowRightIcon />
            Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
