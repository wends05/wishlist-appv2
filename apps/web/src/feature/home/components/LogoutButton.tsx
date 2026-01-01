import { Button } from "@/components/ui/button";
import { SignOutButton } from "@clerk/clerk-react";

export default function LogoutButton() {
  return (
    <SignOutButton>
      <Button className={"text-base"} variant={"outline"}>
        Log Out
      </Button>
    </SignOutButton>
  );
}
