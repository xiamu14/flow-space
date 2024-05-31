type Hue = "blue" | "magenta"; // "green" | "purple" | "volcano" | "geekblue"
export default function logStyle(hue: Hue, groupName: string, data: unknown) {
  switch (hue) {
    case "blue":
      return [
        `%c${groupName}`,
        `color: #0958d9;
          background: #e6f4ff;
          border: 1px solid #91caff;
          text-align: center;
          border-radius: 4px;
          padding: 2px 4px;
          `,
        data,
      ];
    case "magenta":
      return [
        `%c${groupName}`,
        `color: #c41d7f;
            background: #fff0f6;
            border: 1px solid #ffadd2;
            text-align: center;
            border-radius: 4px;
            padding: 2px 4px;
            `,
        data,
      ];
    default:
      return [data];
  }
}
