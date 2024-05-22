import { Button } from "./ui/button";
import SidebarItem from "./SidebarItem";
import Link from "next/link";

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
          <Link href="/space/1">
            <SidebarItem keyName="1">Space 1</SidebarItem>
          </Link>
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
            return (
              <Link key={index} href={`/object/object${index}`}>
                <SidebarItem keyName={`object${index}`}>{item}</SidebarItem>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
