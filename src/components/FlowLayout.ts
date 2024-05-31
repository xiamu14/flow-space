import Dagre from "@dagrejs/dagre";
import { Edge, Node } from "reactflow";

const g = new Dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}));

type Direction = "LR" | "TB";
export const getLayoutedElements = (nodes: Node[], edges: Edge[], direction: Direction) => {
  g.setGraph({ rankdir: direction });

  nodes.forEach((node) => {
    g.setNode(node.id, { width: node.width!, height: node.height! });
  });

  edges.forEach((edge) => {
    g.setEdge(edge.source, edge.target);
  });

  Dagre.layout(g);

  return {
    nodes: nodes.map((node) => {
      const { x, y } = g.node(node.id);

      return { ...node, position: { x, y } };
    }),
    edges,
  };
};
