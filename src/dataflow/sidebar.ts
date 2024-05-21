import { proxy } from "valtio";
export const active = proxy<{
  item: {
    id: string;
    label: string;
    path: string;
  };
}>(undefined);
