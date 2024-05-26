import { cn } from "@/lib/utils";
interface Props {
  title: string;
  onChange: (value: string) => void;
}
export default function TitleEditor({ title, onChange }: Props) {
  return (
    <div
      className={cn(
        "text-[20px] font-bold color-[#666] cursor-text focus:outline-none flex-shrink-0",
        {
          "bg-[#eee]": !title,
        },
      )}
      onBlur={(e) => {
        onChange(e.currentTarget.textContent ?? "");
      }}
      contentEditable
      suppressContentEditableWarning={true}
    >
      {title}
    </div>
  );
}
