import { ChevronRight } from "lucide-react";
import { MouseEventHandler, PropsWithChildren } from "react";
interface Props {
  onClick?: MouseEventHandler<HTMLDivElement>;
}
export default function SidebarItem({ onClick, children }: PropsWithChildren<Props>) {
  return (
    <div
      className="flex justify-start gap-[6px] items-center hover:bg-[#eee] p-[6px] rounded-sm cursor-pointer text-[#555] hover:text-[#333]"
      onClick={onClick}
    >
      <ChevronRight size="18px" color="#888" />
      <span className="text-18px ">{children}</span>
    </div>
  );
}
