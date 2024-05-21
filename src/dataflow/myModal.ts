import { proxy, useSnapshot } from "valtio";
export const stateProxy = proxy<{
  isOpen: boolean;
}>({ isOpen: false });

type ContentType = "paragraph" | "link" | "task" | "tag" | "type" | "file";

export const typeProxy = proxy<{ value: ContentType }>({
  value: "paragraph",
});

export function useModal() {
  const stateSnap = useSnapshot(stateProxy);

  return { isOpen: stateSnap.isOpen };
}

export function closeModal() {
  stateProxy.isOpen = false;
}

export function openModal(type: ContentType) {
  stateProxy.isOpen = true;
  typeProxy.value = type;
}
