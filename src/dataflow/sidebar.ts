import { proxy } from "valtio";
export const active = proxy<{
  key: string | null;
}>({ key: null });

export function setActiveSidebarItem(key: string) {
  active.key = key;
}
