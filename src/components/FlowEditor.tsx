"use client";
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import ReactFlow, {
  Background,
  Connection,
  Controls,
  Edge,
  Node,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";
import { Button } from "./ui/button";
import SelectType from "./SelectType";
import { openModal } from "@/dataflow/myModal";
import useClient from "@/utils/useClient";
import { setActiveSidebarItem } from "@/dataflow/sidebar";
import FlowNode from "./FlowNode";
import { getLayoutedElements } from "./FlowLayout";
import "reactflow/dist/style.css";
import logStyle from "~fnStore/utils/logStyle";
const initialNodes = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { nodeType: "Title", value: "标题1" },
    type: "flowNode",
  },
  {
    id: "2",
    position: { x: 0, y: 0 },
    data: { nodeType: "Picture", value: "" },
    type: "flowNode",
  },
  {
    id: "3",
    position: { x: 0, y: 0 },
    data: { nodeType: "Picture", value: "" },
    type: "flowNode",
  },
  { id: "4", position: { x: 0, y: 0 }, data: { nodeType: "Code", value: "" }, type: "flowNode" },
  {
    id: "5",
    position: { x: 0, y: 0 },
    data: { nodeType: "Paragraph", value: "" },
    type: "flowNode",
  },
  { id: "6", position: { x: 0, y: 0 }, data: { nodeType: "End", value: "" }, type: "flowNode" },
];
const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3" },
  { id: "e3-4", source: "3", target: "4" },
  { id: "e4-5", source: "4", target: "5" },
  { id: "e5-6", source: "5", target: "6" },
];

export default function FlowEditor({ id }: { id: string }) {
  useClient(() => {
    setActiveSidebarItem(id);
  });

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const nodeTypes = useMemo(() => ({ flowNode: FlowNode }), []);

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const preNodesRef = useRef<Node<any>[]>([]);
  const preEdgesRef = useRef([]);

  useEffect(() => {
    if (
      nodes.every((item) => item.width && item.height) &&
      JSON.stringify(nodes) !== JSON.stringify(preNodesRef.current)
    ) {
      console.log(...logStyle("blue", "nodes", nodes));
      preNodesRef.current = nodes;
      const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
        nodes,
        edges,
        "TB",
      );
      preNodesRef.current = layoutedNodes;
      setNodes(layoutedNodes);
      setEdges(layoutedEdges);
      console.log(...logStyle("magenta", "layouted", layoutedNodes));
    }
  }, [nodes]);

  return (
    <div className="w-full h-full flex">
      <div className="flex-1 h-full">
        <ReactFlow
          nodeTypes={nodeTypes}
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
        >
          <Controls />
          <Background />
        </ReactFlow>
      </div>
      <div className="w-[260px] h-full bg-#eee flex-shrink-0 border-l p-[20px]">
        <div className="mb-[20px] flex justify-between items-center">
          <SelectType />
          <Button size="sm" onClick={() => openModal("link")}>
            + New Item
          </Button>
        </div>
        <div className="flex flex-col gap-[6px]">
          <div className="flex flex-col w-full border rounded h-[120px] box-border p-[8px] gap-[6px] cursor-move select-none">
            <div className="border py-[2px] px-[3px] bg-[#f0f6fe] rounded-[6px] text-[10px] border-[#c7ddfb] w-fit text-[#395ad4] h-fit flex-shrink-0 ">
              Paragraph
            </div>
            <div className="text-[#333] font-bold text-[14px] h-fit flex-shrink-0">场景与相机</div>
            <div className="flex-1 text-[#555] text-[12px] p-[4px] truncate">
              在three.js中，要渲染物体到网页中，我们需要3个组件：场景scene、相机camera
              和渲染器renderer。有了这三样东西，才能将物体渲染到网页中去。
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
