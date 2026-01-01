import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import LogoutButton from "./LogoutButton";

export default function HomeHeader() {
  const { open } = useSidebar();

  return (
    <nav className="p-4 w-full flex justify-between">
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
