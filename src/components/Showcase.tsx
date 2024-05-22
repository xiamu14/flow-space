/**
 * showcase box
 */
"use client";
import { openModal } from "@/dataflow/myModal";
import Divider from "./Divider";
import { Button } from "./ui/button";
import { ArrowDownUp, Grid2X2, List, ListFilter, Search } from "lucide-react";
import Card from "./Card";
import useClient from "@/utils/useClient";
import { setActiveSidebarItem } from "@/dataflow/sidebar";
const data = new Array(10).fill(0).map(() => {
  return {
    title: "场景与相机",
    type: "paragraph",
    description:
      "在three.js中，要渲染物体到网页中，我们需要3个组件：场景scene、相机camera 和渲染器renderer。有了这三样东西，才能将物体渲染到网页中去。",
    tags: ["Web3d", "three.js"],
  };
});
export default function Showcase({ id }: { id: string }) {
  useClient(() => {
    setActiveSidebarItem(id);
  });
  return (
    <div className="flex w-full flex-col gap-[20px] p-[20px]">
      <section className="w-full flex justify-between items-center">
        <div className="text-[24px] font-bold">Paragraph</div>
        <div className="flex items-center">
          <div className="flex justify-center items-center w-fit h-[36px] box-content pl-[20px] pr-[12px]  cursor-pointer">
            <Search size="18px" color="#666" />
          </div>
          <Button size="sm" onClick={() => openModal("link")}>
            + New Item
          </Button>
        </div>
      </section>
      <Divider />
      <div className="flex flex-col gap-[10px]">
        <div className="flex justify-between items-center text-[14px] text-[#555]">
          <div>{data.length} entries</div>
          <div className="flex justify-end items-center gap-[16px]">
            <div className="flex justify-center items-center gap-[4px] cursor-pointer">
              <ListFilter size="14px" color="#555" />
              <span>Filter</span>
            </div>
            <div className="flex justify-center items-center gap-[4px] cursor-pointer">
              <ArrowDownUp size="14px" color="#555" />
              <span>Sort</span>
            </div>
            <div className="cursor-pointer">
              <Grid2X2 size="18px" color="#555" />
            </div>
            <div className="cursor-pointer">
              <List size="20px" color="#555" />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-[12px]">
          {data.map((item, index) => {
            return <Card key={index} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
}
