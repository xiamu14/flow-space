import React from "react";
import { Editor } from "@tiptap/react";
import { Bold, Code } from "lucide-react";

interface Props {
  editor: Editor;
}

const TiptapMenuBar = ({ editor }: Props) => {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => {
          editor.chain().focus().toggleBold().run();
        }}
        className={editor.isActive("bold") ? "is-active" : ""}
      >
        <Bold size={20} />
      </button>
      <button
        onClick={() => {
          editor.chain().focus().toggleCodeBlock().run();
        }}
        className={editor.isActive("codeBlock") ? "is-active" : ""}
      >
        <Code size={20} />
      </button>
    </div>
  );
};

export default TiptapMenuBar;
