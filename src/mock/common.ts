export const initialNodes = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { nodeType: "Title", value: "标题1" },
    type: "flowNode",
  },
  {
    id: "2",
    position: { x: 0, y: 0 },
    data: { nodeType: "SubTitle", value: "标题2" },
    type: "flowNode",
  },
  {
    id: "3",
    position: { x: 0, y: 0 },
    data: { nodeType: "Picture", value: "" },
    type: "flowNode",
  },
  { id: "4", position: { x: 0, y: 0 }, data: { nodeType: "Code", value: "" }, type: "flowNode" },
  {
    id: "5",
    position: { x: 0, y: 0 },
    data: { nodeType: "Paragraph", value: "" },
    type: "flowNode",
  },
  { id: "6", position: { x: 0, y: 0 }, data: { nodeType: "End", value: "" }, type: "flowNode" },
];
export const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3" },
  { id: "e3-4", source: "3", target: "4" },
  { id: "e4-5", source: "4", target: "5" },
  { id: "e5-6", source: "5", target: "6" },
];
