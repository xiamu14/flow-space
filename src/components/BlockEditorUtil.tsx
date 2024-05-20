import { BlockNoteSchema, defaultBlockSpecs, insertOrUpdateBlock } from "@blocknote/core";
import { PreCode } from "./BlockEditorCode";
import { Code } from "lucide-react";

export const schema = BlockNoteSchema.create({
  blockSpecs: {
    ...defaultBlockSpecs,
    precode: PreCode,
  },
});

export const insertCode = (editor: typeof schema.BlockNoteEditor) => ({
  title: "code",
  onItemClick: () => {
    insertOrUpdateBlock(editor, {
      type: "precode",
    });
  },
  group: "Advanced",
  icon: <Code />,
});
