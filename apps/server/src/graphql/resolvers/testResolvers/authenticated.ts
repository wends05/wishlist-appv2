import builder from "@/lib/pothos.ts";

builder.queryField("authenticated", (t) =>
  t.field({
    type: "String",
    authScopes: {
      isAuthenticated: true,
    },
    resolve: (_parent, _args, context) => {
      if (!context.ClerkUser) {
        return "Hello, Guest";
      }
      return `Hello, ${context.DbUser.name}`;
    },
    unauthorizedError: () => "You must be authenticated to access this resource."
    
  })
);
