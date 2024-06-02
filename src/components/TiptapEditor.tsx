"use client";
import React, { useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import ListItem from "@tiptap/extension-list-item";
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
      StarterKit.configure({
        codeBlock: false,
        bulletList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
      }),
      TiptapCodeBlockHelper,
      Placeholder.configure({
        emptyEditorClass: "is-editor-empty",
      }),
      TrailingNode,
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      // @ts-ignore
      TextStyle.configure({ types: [ListItem.name] }),
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
      <Space className="h-[10px] flex-shrink-0" />
      <div className="flex-1 overflow-y-auto">
        <EditorContent editor={editor} className="h-full rounded-[4px] p-[10px] bg-[#f0f0f5]" />
      </div>
      <Space className="h-[20px] flex-shrink-0" />
      <div className="flex justify-end flex-shrink-0">
        <Button>Save</Button>
      </div>
    </div>
  );
};

export default TiptapEditor;
