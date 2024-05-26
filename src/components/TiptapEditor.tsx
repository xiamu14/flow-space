"use client";
import React, { useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TiptapMenuBar from "./TiptapMenuBar";
import TiptapCodeBlockHelper from "./TiptapCodeBlockHelper";
import Placeholder from "@tiptap/extension-placeholder";
import { TrailingNode } from "./TiptapTrailingNode";
import TitleEditor from "./TitleEditor";
import Space from "./Space";
import { Button } from "./ui/button";

const TiptapEditor = () => {
  const [editorState, setEditorState] = useState<string | undefined>("");
  const editor = useEditor({
    autofocus: true,
    extensions: [
      StarterKit.configure({ codeBlock: false }),
      TiptapCodeBlockHelper,
      Placeholder.configure({
        emptyEditorClass: "is-editor-empty",
      }),
      TrailingNode,
    ],
    content: editorState,
    onUpdate() {
      setEditorState(editor?.getHTML());
    },
  });
  const [title, setTitle] = useState("标题");
  return (
    <div className="flex flex-col h-full">
      <TitleEditor title={title} onChange={setTitle} />
      <Space className="h-[20px] flex-shrink-0" />
      <div className="sticky top-0 flex-shrink-0 h-fit">
        {editor ? <TiptapMenuBar boxClassName="mb-[10px]" editor={editor} /> : null}
      </div>
      <div className="flex-1 overflow-y-auto">
        <EditorContent editor={editor} className="h-full" />
      </div>
      <div className="flex justify-end flex-shrink-0">
        <Button>Save</Button>
      </div>
    </div>
  );
};

export default TiptapEditor;
