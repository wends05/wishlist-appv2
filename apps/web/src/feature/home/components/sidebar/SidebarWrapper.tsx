import type React from "react";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import HomeHeader from "../HomeHeader";
import HomeSidebar from "./HomeSidebar";

export default function SidebarWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <HomeSidebar />
      <SidebarInset>
        <HomeHeader />
        <div className="p-2">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
