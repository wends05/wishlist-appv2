import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";
import { Empty, EmptyDescription, EmptyHeader, EmptyTitle } from "./ui/empty";

export default function NotFound() {
  return (
    <main className="flex h-screen items-center justify-center">
      <Empty>
        <EmptyHeader>
          <EmptyTitle>
            <h2>404</h2>
          </EmptyTitle>
          <EmptyDescription>The page you are looking for does not exist.</EmptyDescription>
        </EmptyHeader>
        <SignedIn>
          <Link to="/home">
            <Button>Home</Button>
          </Link>
        </SignedIn>
        <SignedOut>
          <Link to="/">
            <Button>Home</Button>
          </Link>
        </SignedOut>
      </Empty>
    </main>
  );
}
