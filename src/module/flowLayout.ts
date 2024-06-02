import dagre from "@dagrejs/dagre";
import { Edge, Node, Position } from "reactflow";

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

type Direction = "LR" | "TB";
export const getLayoutedElements = (
  nodes: Node<any>[],
  edges: Edge<any>[],
  direction: Direction,
) => {
  const isHorizontal = direction === "LR";
  dagreGraph.setGraph({ rankdir: direction, ranker: "tight-tree" });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: node.width!, height: node.height! });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  nodes.forEach((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.targetPosition = isHorizontal ? Position.Left : Position.Top;
    node.sourcePosition = isHorizontal ? Position.Right : Position.Bottom;

    // We are shifting the dagre node position (anchor=center center) to the top left
    // so it matches the React Flow node anchor point (top left).
    node.position = {
      x: nodeWithPosition.x - node.width! / 2,
      y: nodeWithPosition.y - node.height! / 2,
    };

    return node;
  });

  return { nodes, edges };
};
