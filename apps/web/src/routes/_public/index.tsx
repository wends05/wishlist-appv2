import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/feature/public/components/Hero";

export const Route = createFileRoute("/_public/")({ component: App });

function App() {
  return (
    <main className="flex flex-col px-4 md:px-8 lg:px-12">
      <Hero />
    </main>
  );
}
