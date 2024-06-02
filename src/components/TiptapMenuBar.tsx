import React from "react";
import { Editor } from "@tiptap/react";
import { Bold, ChevronDown, Code, Italic, List, ListOrdered, Strikethrough } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  editor: Editor;
  boxClassName?: string;
}

const TiptapMenuBar = ({ editor, boxClassName }: Props) => {
  return (
    <div
      className={cn(
        "flex flex-wrap px-[4px] gap-2 border-[1px] border-solid py-[4px] border-[#f0f0f5]  rounded-[4px]",
        boxClassName,
      )}
    >
      <div className="flex border-r-[1px] border-r-[#f0f0f5] border-r-solid gap-[4px] pr-[4px]">
        <div
          className={cn("flex justify-center items-center px-[10px]  py-[4px] rounded-[3px]", {
            "bg-[#f2f2f3]": editor.isActive("bold"),
          })}
        >
          <button
            onClick={() => {
              editor.chain().focus().toggleBold().run();
            }}
          >
            <Bold size={18} color={editor.isActive("bold") ? "#18181a" : "#70737e"} />
          </button>
        </div>
        <div
          className={cn("flex justify-center items-center px-[10px]  py-[4px] rounded-[3px]", {
            "bg-[#f2f2f3]": editor.isActive("italic"),
          })}
        >
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={!editor.can().chain().focus().toggleItalic().run()}
          >
            <Italic size={18} color={editor.isActive("italic") ? "#18181a" : "#70737e"} />
          </button>
        </div>
        <div
          className={cn("flex justify-center items-center px-[10px]  py-[4px] rounded-[3px]", {
            "bg-[#f2f2f3]": editor.isActive("strike"),
          })}
        >
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            disabled={!editor.can().chain().focus().toggleStrike().run()}
          >
            <Strikethrough size={17} color={editor.isActive("strike") ? "#18181a" : "#70737e"} />
          </button>
        </div>
        <div
          className={cn("flex justify-center items-center px-[10px]  py-[4px] rounded-[3px]", {
            "bg-[#f2f2f3]": editor.isActive("codeBlock"),
          })}
        >
          <button
            onClick={() => {
              editor.chain().focus().toggleCodeBlock().run();
            }}
            className={editor.isActive("codeBlock") ? "bg-[#f2f2f3]" : ""}
          >
            <Code size={20} color={editor.isActive("strike") ? "#18181a" : "#70737e"} />
          </button>
        </div>
      </div>
      <div className="flex items-center border-r-[1px] border-r-[#f0f0f5] border-r-solid gap-[4px] pr-[4px]">
        <div
          onClick={() => editor.chain().focus().setColor("#958DF1").run()}
          className={cn("w-[20px] h-[20px] bg-[#958DF1] rounded-[2px] mr-[4px] cursor-pointer")}
          data-testid="setPurple"
        ></div>
        <ChevronDown
          size={18}
          color={editor.isActive("textStyle", { color: "#958DF1" }) ? "#18181a" : "#70737e"}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="flex items-center border-r-[1px] border-r-[#f0f0f5] border-r-solid gap-[4px] pr-[4px]">
        <div
          className={cn("flex justify-center items-center px-[10px]  py-[4px] rounded-[3px]", {
            "bg-[#f2f2f3]": editor.isActive("bulletList"),
          })}
        >
          <button onClick={() => editor.chain().focus().toggleBulletList().run()}>
            <List size={20} color={editor.isActive("bulletList") ? "#18181a" : "#70737e"} />
          </button>
        </div>
        <div
          className={cn("flex justify-center items-center px-[10px]  py-[4px] rounded-[3px]", {
            "bg-[#f2f2f3]": editor.isActive("orderedList"),
          })}
        >
          <button onClick={() => editor.chain().focus().toggleOrderedList().run()}>
            <ListOrdered size={20} color={editor.isActive("orderedList") ? "#18181a" : "#70737e"} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TiptapMenuBar;
