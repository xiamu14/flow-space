import "@blocknote/core/fonts/inter.css";
import {
  SuggestionMenuController,
  getDefaultReactSlashMenuItems,
  useCreateBlockNote,
} from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { filterSuggestionItems } from "@blocknote/core";
import { insertCode, schema } from "./BlockEditorUtil";
export default function BlockEditor() {
  const editor = useCreateBlockNote({ schema });
  return (
    <div>
      <BlockNoteView editor={editor} slashMenu={false}>
        <SuggestionMenuController
          triggerCharacter={"/"}
          getItems={async (query) =>
            // Gets all default slash menu items and `insertAlert` item.
            filterSuggestionItems(
              [...getDefaultReactSlashMenuItems(editor), insertCode(editor)],
              query,
            )
          }
        />
      </BlockNoteView>
    </div>
  );
}
