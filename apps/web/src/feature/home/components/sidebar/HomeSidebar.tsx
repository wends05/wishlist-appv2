import { useUser } from "@clerk/clerk-react";
import { PlusIcon } from "@phosphor-icons/react";
import { Link, type LinkProps } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "@/components/ui/sidebar";
import CreateWishDialog from "@/feature/wish/components/CreateWishDialog";
import LogoutButton from "../LogoutButton";

interface HomeLink extends LinkProps {
  label: string;
}

const homeLinks: HomeLink[] = [
  {
    to: "/home",
    label: "Home",
  },
  {
    to: "/wishes",
    label: "Wishes",
    preload: false,
  },
];

export default function HomeSidebar() {
  const { user, isLoaded } = useUser();

  return (
    <Sidebar className="mt-3" variant="inset">
      <SidebarHeader>
        <CreateWishDialog
          trigger={
            <Button className={"w-full"}>
              <PlusIcon />
              Create a Wish
            </Button>
          }
        />
      </SidebarHeader>
      <SidebarContent>
        <ul className="m-0 flex flex-col space-y-3 px-3">
          {homeLinks.map((link) => (
            <Link {...link} key={link.to}>
              <Button className={"w-full text-md"} variant={"ghost"}>
                {link.label}
              </Button>
            </Link>
          ))}
        </ul>
      </SidebarContent>
      {isLoaded && (
        <SidebarFooter className="mb-3">
          <Link to="/profile">
            <Button className="flex h-max w-full items-center gap-2 space-x-2 py-2" variant={"ghost"}>
              <div className="relative overflow-hidden rounded-full">
                <img alt="Profile" className="size-10" src={user?.imageUrl} />
              </div>

              {user?.username}
            </Button>
          </Link>
          <LogoutButton />
        </SidebarFooter>
      )}
    </Sidebar>
  );
}
