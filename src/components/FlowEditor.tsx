import React, { useCallback, useMemo } from "react";
import ReactFlow, {
  Background,
  Connection,
  Controls,
  Edge,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";

import "reactflow/dist/style.css";
import MyNoteNode from "./MyNoteNode";
import { Button } from "./ui/button";
import SelectType from "./SelectType";
import { openModal } from "@/dataflow/myModal";

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

export default function FlowEditor() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const nodeTypes = useMemo(() => ({ myNoteNode: MyNoteNode }), []);

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );
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
