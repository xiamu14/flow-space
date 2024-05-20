import { defaultProps } from "@blocknote/core";
import { createReactBlockSpec } from "@blocknote/react";
import Prism from "prismjs";
import { useState } from "react";
function Code({ onChange }: { onChange: (val: string) => void }) {
  const [html, setHtml] = useState("");
  return (
    <div
      contentEditable
      onInput={(event) => {
        const html2 = Prism.highlight(
          event.currentTarget.textContent ?? "",
          Prism.languages.javascript,
          "javascript",
        );
        setHtml(html2);
        onChange(html2);
      }}
      dangerouslySetInnerHTML={{ __html: html }}
    ></div>
  );
}

// The Code block.
export const PreCode = createReactBlockSpec(
  {
    type: "precode",
    propSchema: {
      textAlignment: defaultProps.textAlignment,
      textColor: defaultProps.textColor,
      data: {
        // @ts-ignore
        code: "",
      },
    },
    content: "none",
  },
  {
    render: ({ editor, block }) => {
      const onInputChange = (val: string) => {
        editor.updateBlock(block, {
          //@ts-ignore
          props: { ...block.props, data: val },
        });
      };
      return (
        <div className="code-box">
          {/* {props.block.content} */}
          {/*Rich text field for user to type in*/}
          <Code onChange={onInputChange} />
        </div>
      );
    },
    toExternalHTML: ({ block }) => {
      return (
        <pre>
          <code>{block?.props?.data}</code>
        </pre>
      );
    },
  },
);
