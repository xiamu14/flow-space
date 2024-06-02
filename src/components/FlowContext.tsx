import { reactFlowContext } from "@/dataflow/reactFlowContext";
import { useReactFlow, useStoreApi } from "reactflow";

// Used to mount onto the ReactFlow component to get the corresponding ReactFlowInstance
export const FlowContext = (): any => {
  reactFlowContext.instance = useReactFlow();
  reactFlowContext.store = useStoreApi();
  return undefined;
};
