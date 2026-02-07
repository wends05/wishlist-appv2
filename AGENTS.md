# AGENTS.md

This file is for agentic coding tools working in this repo.
Keep edits aligned with the actual tooling and conventions here.

## Repo layout

- apps/web: Vite + TanStack Start frontend
- apps/server: Bun + Hono + GraphQL Yoga backend
- packages/common: shared types, schemas, utils
- packages/tsconfig: shared TS config base

## Package manager and runtime

- Package manager: Bun (see `package.json#packageManager`)
- Node version: >= 18 (root `package.json#engines`)
- Monorepo task runner: Turborepo (`turbo.json`)

## Cursor / Copilot rules

- No `.cursor/rules`, `.cursorrules`, or `.github/copilot-instructions.md` found.

## Core commands (root)

Run these from repo root unless noted.

- Install: `bun install`
- Dev all: `bun run dev` (turbo run dev)
- Build all: `bun run build`
- Lint/check all: `bun run check` (biome check via turbo)
- Typecheck all: `bun run check-types`
- Format write all: `bun run write` (biome --write)
- Format write unsafe: `bun run unsafe` (biome --write --unsafe)

### Filtered Turbo runs

- Build web only: `bun run build -- --filter=@repo/web`
- Check web only: `bun run check -- --filter=@repo/web`
- Dev web only: `bun run dev -- --filter=@repo/web`
- Build server only: `bun run build -- --filter=@repo/server`

## App commands

### apps/web

- Dev: `bun --cwd apps/web run dev`
- Build: `bun --cwd apps/web run build`
- Preview: `bun --cwd apps/web run preview`
- Lint/check: `bun --cwd apps/web run check`
- Format write: `bun --cwd apps/web run write`
- Format write unsafe: `bun --cwd apps/web run unsafe`
- Tests (all): `bun --cwd apps/web run test`
- Single test file: `bun --cwd apps/web run test -- path/to/file.test.tsx`
- Single test by name: `bun --cwd apps/web run test -- -t "test name"`

### apps/server

- Dev: `bun --cwd apps/server run dev`
- Build: `bun --cwd apps/server run build`

### packages/common

- No explicit scripts; rely on root turbo tasks

## Codegen / generated files

- GraphQL client is generated in `apps/web/src/lib/graffle/generated`
- Do not hand edit generated files
- Route tree is generated in `apps/web/src/routeTree.gen.ts`
- GraphQL schema is pulled via `apps/web` script:
  `bun --cwd apps/web run dev:gql:gen`

## Formatting and linting

- Biome is the formatter and linter
- Root config: `biome.json`
- Web config: `apps/web/biome.json` (extends root)
- Formatting settings:
  - 2 spaces
  - line width 120
  - double quotes
- Imports are organized automatically (Biome assist)
- Attributes are sorted automatically (Biome assist)
- Tailwind directives are supported in CSS parsing

## TypeScript configuration

- Base: `packages/tsconfig/base.json`
- Strict mode enabled everywhere
- noImplicitAny, noUncheckedIndexedAccess enabled
- noEmit in TS configs (builds handled by tools)
- Web TS config:
  - moduleResolution: bundler
  - JSX: react-jsx
  - path alias: `@/*` -> `apps/web/src/*`
- Server TS config:
  - moduleResolution: nodenext
  - JSX: react-jsx (Hono)
  - path alias: `@/*` -> `apps/server/src/*`
  - Use `.ts` import extensions on server

## Code style guidelines

### Imports

- Use type-only imports when possible (e.g. `import type { Foo } ...`)
- Prefer `@/*` alias for internal imports
- Keep imports grouped by external -> internal -> relative
- Let Biome handle sorting/organization

### Formatting

- Double quotes for strings
- 2-space indentation
- Max line width 120
- Prefer trailing commas where Biome applies them

### Naming

- React components: PascalCase, default export
- Hooks: `useSomething` naming in `apps/web/src/hooks`
- Services: `Something.service.ts` (server)
- Resolvers: lowerCamel file names (e.g. `createWish.ts`)
- Types/interfaces: PascalCase; enums PascalCase
- Variables/functions: camelCase

### Types and schemas

- Use Zod schemas from `packages/common/src/schemas`
- Shared DTOs live in `packages/common/src/dto`
- Prefer Zod helpers in `packages/common/src/functions/zodUtils.ts`
- Use `TryCatchReturn` and `tryCatch` from `packages/common` when standardizing errors

### Error handling

- Prefer `tryCatch` wrapper for async operations returning a union result
- Return explicit `success/data/error` shape when using `tryCatch`
- Avoid throwing raw errors from shared helpers

### React (apps/web)

- Use TanStack Router for routing
- Keep route components in `apps/web/src/routes`
- Keep UI primitives in `apps/web/src/components/ui`
- Use `@/lib/utils.ts` `cn()` for className merging
- Prefer functional components and hooks

### Server (apps/server)

- Hono is the HTTP server
- GraphQL Yoga handles `/graphql`
- Schema uses Pothos + Mongoose models
- Use explicit `.ts` extensions in server imports
- Keep DB access in `apps/server/src/services`

### Files to avoid editing

- `apps/web/src/lib/graffle/generated/**`
- `apps/web/src/routeTree.gen.ts`

## Quick sanity checks

- `bun run check` for lint/format issues
- `bun run build` for build failures
- `bun --cwd apps/web run test -- path/to/file.test.tsx` for focused tests
