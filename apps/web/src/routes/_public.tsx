import Header from "@/feature/public/components/Header";
import Footer from "@/feature/public/components/Footer";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_public")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main>
      <Header />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}
