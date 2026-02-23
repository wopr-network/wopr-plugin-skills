import type { WOPRPluginContext } from "@wopr-network/plugin-types";
import type { RegistryRecord } from "./skills-schema.js";
import { skillsPluginSchema } from "./skills-schema.js";

let initialized = false;
let ctx: WOPRPluginContext | null = null;

export async function initRegistriesStorage(): Promise<void> {
  if (initialized || !ctx) return;
  await ctx.storage.register(skillsPluginSchema);
  initialized = true;
}

export function setPluginContextForRegistries(context: WOPRPluginContext): void {
  ctx = context;
}

export function resetRegistriesStorageInit(): void {
  initialized = false;
}

function registriesRepo() {
  if (!ctx) {
    throw new Error("Plugin context not initialized");
  }
  return ctx.storage.getRepository<RegistryRecord>("skills", "registries");
}

export async function getRegistries(): Promise<Array<{ name: string; url: string }>> {
  await initRegistriesStorage();
  const rows = await registriesRepo().findMany({});
  return rows.map((r) => ({ name: r.name, url: r.url }));
}

export async function addRegistry(name: string, url: string): Promise<void> {
  await initRegistriesStorage();
  const repo = registriesRepo();
  const now = Date.now();
  const existing = await repo.findFirst({ id: name } as Parameters<typeof repo.findFirst>[0]);
  if (existing) {
    await repo.update(name, { url, updatedAt: now });
  } else {
    await repo.insert({ id: name, name, url, createdAt: now, updatedAt: now });
  }
}

export async function removeRegistry(name: string): Promise<boolean> {
  await initRegistriesStorage();
  const repo = registriesRepo();
  const existing = await repo.findFirst({ id: name } as Parameters<typeof repo.findFirst>[0]);
  if (!existing) return false;
  await repo.delete(name);
  return true;
}
