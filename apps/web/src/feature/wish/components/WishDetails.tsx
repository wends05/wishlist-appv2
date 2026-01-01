import type { IWishDetails } from "@repo/common/schemas";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface WishDetailsProps {
  wish: IWishDetails;
}
export default function WishDetails({ wish }: WishDetailsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h1>{wish.name}</h1>
        </CardTitle>
        <CardDescription>{wish.category.name}</CardDescription>
      </CardHeader>
      <CardContent>{wish.description}</CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
