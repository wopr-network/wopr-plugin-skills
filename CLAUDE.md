# wopr-plugin-skills

Skills discovery, state management, and REST API plugin for WOPR.

## Build & Test

```bash
pnpm install
pnpm build        # tsc
pnpm test         # vitest run
pnpm lint         # biome check
pnpm format       # biome format
```

## Architecture

- `src/index.ts` — Plugin entry point (default export, init/shutdown lifecycle)
- `src/a2a-tools.ts` — A2A tool registration (skills.list, skills.enable, skills.disable, skills.info)
- `src/skills.ts` — Core skill discovery and management
- `src/skills-repository.ts` — Storage layer for skill state
- `src/registries-repository.ts` — Storage layer for skill registries
- `src/routes.ts` — Hono REST router
- `src/commands.ts` — CLI command handlers
- `src/skills-schema.ts` — Zod schemas and PluginSchema definition
- `src/skills-migrate.ts` — Migration from file-based to SQL storage

## Plugin Conventions

- Default export is a `WOPRPlugin` object
- Module-level state: `let ctx`, `const cleanups`
- A2A tool handlers return only `{ content: [...] }` (no `isError`)
- All catch blocks typed as `catch (err: unknown)`
- Shutdown is idempotent (guard with `if (!ctx) return`)
