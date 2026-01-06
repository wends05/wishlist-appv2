import { ArrowLeftIcon, UserIcon } from "@phosphor-icons/react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getRouteApi, Link, useRouter } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { authQueryOptions } from "@/feature/auth/options";
import { wishQueryOptions } from "../options";
import WishCardActions from "./WishCardActions";

const wishDetailsRouteApi = getRouteApi("/_home/wish/$id");
export default function WishDetails() {
  const { id } = wishDetailsRouteApi.useParams();
  const { data: wish } = useSuspenseQuery(wishQueryOptions.wishDetails(id));
  const { data: me } = useSuspenseQuery(authQueryOptions.me);
  const router = useRouter();
  if (!wish || !wish._id) {
    return <div>Wish not found</div>;
  }

  if (!me) {
    return <div>Please log in to view wish details.</div>;
  }

  if (!wish.owner || !wish.owner._id) {
    return <div>Wish owner information is missing.</div>;
  }

  const isOwner = me?._id === wish.owner._id;

  return (
    <div className="flex h-full gap-3 p-4">
      <Button onClick={() => router.history.back()} variant={"outline"}>
        <ArrowLeftIcon />
      </Button>

      <Card className="h-full w-full">
        <CardHeader>
          <CardTitle>
            <h1>{wish.name}</h1>
          </CardTitle>
          <CardDescription>{wish.category.name}</CardDescription>
          <CardDescription>
            {!isOwner && (
              <Link
                className="flex items-center gap-2"
                params={{
                  id: wish.owner._id,
                }}
                to={`/profile/$id`}
              >
                <UserIcon />
                {wish.owner.name}
              </Link>
            )}
          </CardDescription>
          <CardAction>
            <WishCardActions _id={wish._id} />
          </CardAction>
        </CardHeader>
        <CardContent className="h-full">{wish.description}</CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}
