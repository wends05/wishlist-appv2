import { SignedIn, SignedOut, SignOutButton } from "@clerk/clerk-react";
import { createFileRoute, Outlet } from "@tanstack/react-router";
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
            You are already signed in.
            <div>
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
