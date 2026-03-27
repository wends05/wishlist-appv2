# Wishlist App v2

This is a simple wishlist application built using React. It allows users to add items to their wishlist, view the list of items, and remove items from the list.

## Features

- Public landing pages and authenticated app routes
- Wishlist browsing, item detail views, and profile pages
- Auth flow powered by Clerk
- Shared GraphQL API between the web app and server
- Reusable UI components, forms, and shared package code

## Stack

- Frontend: Vite + TanStack Start + React
- Backend: Bun + Hono + GraphQL Yoga
- Shared: TypeScript, Zod, Pothos, Mongoose
- Tooling: Turbo, Biome, Vitest

## Local Setup

1. Install dependencies:

```sh
bun install
```

2. Start the app stack:

```sh
bun run dev
```

3. Open the apps:

- Web: http://localhost:3000
- GraphQL: http://localhost:4000/graphql

## Environment

The app expects environment variables in the app-level `.env` files.

Frontend:

- `VITE_CLERK_PUBLISHABLE_KEY`

Backend:

- `CLERK_SECRET_KEY`
- `CLERK_JWKS_URL`
- `MONGODB_URI` optional, defaults to `mongodb://localhost:27017`

## Useful Scripts

From the repo root:

- `bun run dev` - run web and server in dev mode
- `bun run build` - build all packages
- `bun run check` - run Biome checks
- `bun run check-types` - run TypeScript checks
- `bun run write` - format and fix lint issues

From `apps/web`:

- `bun --cwd apps/web run dev` - start the web app on port 3000
- `bun --cwd apps/web run test` - run Vitest
- `bun --cwd apps/web run dev:gql:gen` - regenerate GraphQL client code

From `apps/server`:

- `bun --cwd apps/server run dev` - start the API on port 4000
- `bun --cwd apps/server run build` - build the server bundle

## Repo Layout

- `apps/web` - client app and route files
- `apps/server` - API server and GraphQL schema
- `packages/common` - shared types, schemas, and helpers
- `packages/tsconfig` - shared TypeScript config

## Status

Deprecated. This project is no longer maintained and will not be continued. It remains available for reference, but no new features or updates will be added.
