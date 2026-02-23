import type { PluginSchema } from "@wopr-network/plugin-types";
import { z } from "zod";

// ---------- skills_state table ----------
export const skillStateSchema = z.object({
  id: z.string(), // Skill name (primary key)
  enabled: z.boolean(), // Whether skill is enabled
  installed: z.boolean(), // Whether skill is installed
  enabledAt: z.string().optional(), // ISO timestamp when enabled
  lastUsedAt: z.string().optional(), // ISO timestamp of last use
  useCount: z.number(), // Number of times skill has been used
});
export type SkillStateRecord = z.infer<typeof skillStateSchema>;

// ---------- registries table ----------
export const registryRecordSchema = z.object({
  id: z.string(), // registry name as primary key
  name: z.string(),
  url: z.string(),
  createdAt: z.number(),
  updatedAt: z.number(),
});
export type RegistryRecord = z.infer<typeof registryRecordSchema>;

// ---------- PluginSchema ----------
export const skillsPluginSchema: PluginSchema = {
  namespace: "skills",
  version: 1,
  tables: {
    skills_state: {
      schema: skillStateSchema,
      primaryKey: "id",
      indexes: [{ fields: ["enabled"] }, { fields: ["lastUsedAt"] }],
    },
    registries: {
      schema: registryRecordSchema,
      primaryKey: "id",
      indexes: [{ fields: ["name"] }],
    },
  },
};
