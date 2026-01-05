import { ClerkProvider } from "@clerk/clerk-react";
import { TanStackDevtools } from "@tanstack/react-devtools";
import type { QueryClient } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import ErrorComponent from "@/components/ErrorComponent";
import NotFound from "@/components/NotFound";
import { Toaster } from "@/components/ui/sonner";
import TanStackQueryDevtools from "../integrations/tanstack-query/devtools";
import appCss from "../styles.css?url";

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Wish App",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  const VITE_CLERK_PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
  if (!VITE_CLERK_PUBLISHABLE_KEY) {
    throw new Error("No Publishable Key Found");
  }
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <ClerkProvider
        afterSignOutUrl={"/"}
        publishableKey={VITE_CLERK_PUBLISHABLE_KEY}
        signInFallbackRedirectUrl={"/home"}
        signUpFallbackRedirectUrl={"/home"}
      >
        <body>
          {children}
          <TanStackDevtools
            config={{
              position: "bottom-right",
            }}
            plugins={[
              {
                name: "Tanstack Router",
                render: <TanStackRouterDevtoolsPanel />,
              },
              TanStackQueryDevtools,
            ]}
          />
          <Toaster />
          <Scripts />
        </body>
      </ClerkProvider>
    </html>
  );
}
