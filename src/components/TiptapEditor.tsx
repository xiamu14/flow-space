"use client";
import React, { useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TiptapMenuBar from "./TiptapMenuBar";
import TiptapCodeBlockHelper from "./TiptapCodeBlockHelper";
import Placeholder from "@tiptap/extension-placeholder";
import { TrailingNode } from "./TiptapTrailingNode";

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
  return (
    <div className="flex flex-col">
      <div className="sticky top-0">{editor ? <TiptapMenuBar editor={editor} /> : null}</div>
      <div>
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default TiptapEditor;
