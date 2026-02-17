import type { WOPRPluginContext } from "@wopr-network/plugin-types";

export function setA2AContext(_context: WOPRPluginContext): void {
  // A2A tools not yet implemented in plugin-types
}

export function registerSkillsA2ATools(): void {
  // A2A tools are not yet in plugin-types, so this is a no-op for now
  // TODO: Implement when A2A tool registration is added to plugin-types
  console.log("A2A tool registration not yet implemented in plugin-types");
}

export function unregisterSkillsA2ATools(): void {
  // A2A tools are not yet in plugin-types, so this is a no-op for now
  console.log("A2A tool unregistration not yet implemented in plugin-types");
}
