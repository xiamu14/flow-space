import { active } from "@/dataflow/sidebar";
import { ChevronRight } from "lucide-react";
import { MouseEventHandler, PropsWithChildren } from "react";
import { useSnapshot } from "valtio";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  keyName: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}
export default function SidebarItem({ onClick, children, keyName }: PropsWithChildren<Props>) {
  const activeSnap = useSnapshot(active);
  return (
    <div
      className={cn(
        "flex justify-start gap-[6px] items-center hover:bg-[#eee] p-[6px] rounded-sm cursor-pointer text-[#555] hover:text-[#333]",
        { "bg-[#eee] text-[#333]": activeSnap?.key === keyName },
      )}
      onClick={onClick}
    >
      <ChevronRight size="18px" color="#888" />
      <span className="text-18px ">{children}</span>
    </div>
  );
}
