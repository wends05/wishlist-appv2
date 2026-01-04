import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import LogoutButton from "./LogoutButton";

export default function HomeHeader() {
  const { open } = useSidebar();

  return (
    <nav className="flex w-full justify-between p-4">
      <div>
        <SidebarTrigger />
      </div>
      {!open && (
        <div>
          <LogoutButton />
        </div>
      )}
    </nav>
  );
}
