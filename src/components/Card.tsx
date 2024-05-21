import { cn } from "@/lib/utils";
import Tag from "./Tag";

interface Props {
  type: string;
  title: string;
  description?: string;
  draggable?: boolean;
  showType?: boolean;
  tags?: string[];
}

export default function Card({
  type,
  title,
  tags = [],
  description = "",
  draggable = false,
  showType = false,
}: Props) {
  return (
    <div
      className={cn(
        "w-[240px] flex flex-col border rounded h-[160px] box-border p-[8px] gap-[6px]  ",
        { "select-none cursor-move": draggable },
      )}
    >
      {showType ? <Tag>{type}</Tag> : null}
      <div className="text-[#333] font-bold text-[14px] h-fit flex-shrink-0">{title}</div>
      <div className="flex-1 text-[#555] text-[12px] p-[4px] line-clamp-3">{description}</div>
      <div className="flex-wrap w-full flex gap-[4px] h-fit flex-shrink-0">
        {tags.map((item, index) => {
          return <Tag key={index}>{item}</Tag>;
        })}
      </div>
    </div>
  );
}
