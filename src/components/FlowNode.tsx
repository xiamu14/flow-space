import { cn } from "@/lib/utils";
import { PropsWithChildren, useMemo } from "react";
import { Handle, Position } from "reactflow";
import { useLongPress } from "@uidotdev/usehooks";
import Divider from "./Divider";
import { GripVertical } from "lucide-react";
import { openModal } from "@/dataflow/myModal";

type NodeType = "Title" | "SubTitle" | "End" | "link" | "Paragraph" | "Code" | "Picture";
type NodeData = { nodeType: NodeType; value?: string };

export default function FlowNode(options?: { data: NodeData }) {
  const nodeData = useMemo(() => {
    return options?.data ?? { nodeType: "Paragraph" as NodeType };
  }, [options]);
  const { nodeType } = nodeData;
  const NodeContent = useMemo(() => {
    switch (nodeType) {
      case "Title":
        return <TitleNode {...nodeData} />;
      case "SubTitle":
        return <TitleNode {...nodeData} />;
      case "Picture":
        return <ImageNode />;
      case "Paragraph":
        return <ParagraphNode />;
      default:
        return <TextNode {...nodeData} />;
    }
  }, [nodeType, nodeData]);
  return (
    <>
      {nodeType !== "Title" ? <Handle type="target" position={Position.Top} /> : null}
      <div
        className="border-[1px] border-solid border-[#f0f0f5] p-[4px] bg-white w-fit max-w-[200px] min-w-[100px] max-h-[300px] min-h-[30px] flex flex-wrap overflow-y-auto rounded-[2px] text-[#595964]"
        style={{
          boxShadow: `
            0.8px 1.3px 2.2px rgba(0, 0, 0, 0.002),
            1.9px 3.2px 5.3px rgba(0, 0, 0, 0.001),
            3.6px 6px 10px rgba(0, 0, 0, 0.002),
            6.5px 10.7px 17.9px rgba(0, 0, 0, 0.007),
            12.1px 20.1px 33.4px rgba(0, 0, 0, 0.016),
            29px 48px 80px rgba(0, 0, 0, 0.03)`,
        }}
      >
        {NodeContent}
      </div>
      {nodeType !== "End" ? <Handle type="source" position={Position.Bottom} id="a" /> : null}
    </>
  );
}

function TitleNode({ nodeType, value }: NodeData) {
  return (
    <div
      className={cn("font-semibold w-full text-center h-full leading-none", {
        "text-[16px]": nodeType === "Title",
        "text-[14px]": nodeType === "SubTitle",
      })}
    >
      {value}
    </div>
  );
}

function ImageNode() {
  return (
    // eslint-disable-next-line
    <img
      alt=""
      src="https://plus.unsplash.com/premium_photo-1681400699241-834781696dc6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"
      className="w-[120px] h-[120px] object-cover"
    />
  );
}

function ParagraphNode() {
  return (
    <NodeContainer>
      <p
        className="text-[12px] cursor-pointer"
        onClick={(event) => {
          event.stopPropagation();
          openModal("paragraph");
        }}
      >
        在three.js中，要渲染物体到网页中，我们需要3个组件：场景scene、相机camera
        和渲染器renderer。有了这三样东西，才能将物体渲染到网页中去。
      </p>
    </NodeContainer>
  );
}

function TextNode({ value }: { value?: string }) {
  return <p className="text-[12px] w-full text-center">{value}</p>;
}

function NodeContainer({ children }: PropsWithChildren<{}>) {
  return (
    <div className="flex flex-col gap-[6px] p-[2px]">
      <div className="flex items-center justify-between cursor-pointer">
        <p className="text-[14px]">内容索引#1</p>
        <GripVertical color="#595964" size={10} />
      </div>
      <Divider />
      {children}
    </div>
  );
}
