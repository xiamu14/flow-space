import { Handle, Position } from "reactflow";

export default function MyNoteNode() {
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div className="border-2 border-solid border-#333 p-2 bg-white w-[400px] h-[300px]"></div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </>
  );
}
