import { SignedIn, SignedOut, SignOutButton } from "@clerk/clerk-react";
import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/_auth")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex h-screen items-center justify-center">
      <SignedIn>
        <Card>
          <CardContent>
            <h4 className="pb-5">You are already signed in</h4>

            <div className="flex w-full flex-col gap-2">
              <Link to="/home">
                <Button className={"w-full"}>Go to Home</Button>
              </Link>
              <SignOutButton>
                <Button>Log Out</Button>
              </SignOutButton>
            </div>
          </CardContent>
        </Card>
      </SignedIn>
      <SignedOut>
        <Outlet />
      </SignedOut>
    </main>
  );
}
