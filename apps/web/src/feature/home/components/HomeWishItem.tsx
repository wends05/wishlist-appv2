import type { HomeWishesResponse } from "@repo/common/dto";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

interface HomeWishItemProps {
  wish: HomeWishesResponse["wishes"][number];
}

export default function HomeWishItem({ wish }: HomeWishItemProps) {
  return (
    <Card>
      <CardContent>
        <CardTitle>{wish.name}</CardTitle>
        <CardDescription>
          {wish.category.name}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
