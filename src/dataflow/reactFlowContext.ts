import type { useStoreApi } from "reactflow";
import { ReactFlowInstance } from "reactflow";
export const reactFlowContext: {
  instance?: ReactFlowInstance;
  store?: ReturnType<typeof useStoreApi>;
} = {};
