import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <div className="flex flex-col flex-shrink-0 p-[20px] justify-start h-full w-[320px] border-r gap-[20px]">
      <section className="">
        <div className="flex justify-between items-center mb-[20px]">
          <div className="text-[20px] font-bold text-[#333]">Space</div>
          <Button variant="link" size="sm">
            + New
          </Button>
        </div>
        <div className="flex flex-col gap-2 px-[6px]">
          <SidebarItem>Space 1</SidebarItem>
        </div>
      </section>

      <section className="">
        <div className="flex justify-between items-center mb-[20px]">
          <div className="text-[20px] font-bold text-[#333]">Objects</div>
          <Button variant="link" size="sm">
            + New
          </Button>
        </div>
        <div className="flex flex-col gap-2 px-[6px]">
          {["Links", "Tags", "Cards", "Tasks", "Files", "Papers"].map((item, index) => {
            return <SidebarItem key={index}>{item}</SidebarItem>;
          })}
        </div>
      </section>
    </div>
  );
}
