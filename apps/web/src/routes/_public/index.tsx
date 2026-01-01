import Hero from "@/feature/public/components/Hero";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_public/")({ component: App });

function App() {
  return (
    <main className="flex flex-col px-4 md:px-8 lg:px-12">
      <Hero />
    </main>
  );
}
