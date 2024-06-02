import { useReactFlow, useNodesInitialized } from "reactflow";
import { useCallback, useEffect } from "react";
import { getLayoutedElements } from "@/module/FlowLayout";
import { reactFlowContext } from "@/dataflow/reactFlowContext";
import logStyle from "@/fnStore/utils/logStyle";

const options = {
  includeHiddenNodes: false,
};

export default function useLayout() {
  const { getNodes, getEdges } = useReactFlow();
  const nodesInitialized = useNodesInitialized(options);

  const layout = useCallback(() => {
    const nodes = getNodes();
    const edges = getEdges();
    const layouted = getLayoutedElements(nodes, edges, "TB");
    console.log(...logStyle("blue", "layouted", layouted));
    reactFlowContext.instance?.setNodes(layouted.nodes);
    reactFlowContext.instance?.setEdges(layouted.edges);
  }, [getNodes, getEdges]);

  useEffect(() => {
    if (nodesInitialized) {
      layout();
    }
  }, [nodesInitialized, layout]);

  return { layout };
}
