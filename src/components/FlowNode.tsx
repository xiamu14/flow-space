import { cn } from "@/lib/utils";
import { useMemo } from "react";
import { Handle, Position } from "reactflow";
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
      case "Code":
        return <CodeNode />;
      case "Paragraph":
        return <ParagraphNode />;
      default:
        return null;
    }
  }, [nodeType, nodeData]);
  return (
    <>
      {nodeType !== "Title" ? <Handle type="target" position={Position.Top} /> : null}
      <div className="border-2 border-solid border-#333 p-2 bg-white w-fit max-w-[200px] min-w-[100px] max-h-[300px] min-h-[40px] flex flex-wrap overflow-y-auto rounded-sm">
        {NodeContent}
      </div>
      {nodeType !== "End" ? <Handle type="source" position={Position.Bottom} id="a" /> : null}
    </>
  );
}

function TitleNode({ nodeType, value }: NodeData) {
  return (
    <div
      className={cn("text-[18px] font-semibold w-full text-center", {
        "text-[18px]": nodeType === "Title",
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

function CodeNode() {
  const code = `
    const std = @import("std");
    const parseInt = std.fmt.parseInt;

    test "parse integers" {
        const input = "123 67 89,99";
        const ally = std.testing.allocator;

        var list = std.ArrayList(u32).init(ally);
        // Ensure the list is freed at scope exit.
        // Try commenting out this line!
        defer list.deinit();

        var it = std.mem.tokenizeAny(u8, input, " ,");
        while (it.next()) |num| {
            const n = try parseInt(u32, num, 10);
            try list.append(n);
        }

        const expected = [_]u32{ 123, 67, 89, 99 };

        for (expected, list.items) |exp, actual| {
            try std.testing.expectEqual(exp, actual);
        }
    }
    `;
  return (
    <pre
      onClick={() => {
        console.log("21");
      }}
      className="cursor-default"
    >
      <code>{code}</code>
    </pre>
  );
}

function ParagraphNode() {
  return (
    <p>
      在three.js中，要渲染物体到网页中，我们需要3个组件：场景scene、相机camera
      和渲染器renderer。有了这三样东西，才能将物体渲染到网页中去。
    </p>
  );
}
