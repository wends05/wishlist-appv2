import { SignOutButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";

export default function LogoutButton() {
  return (
    <SignOutButton>
      <Button className={"text-base"} variant={"outline"}>
        Log Out
      </Button>
    </SignOutButton>
  );
}
