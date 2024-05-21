"use client";
import FlowEditor from "@/components/FlowEditor";
import MyModal from "@/components/MyModal";
import Showcase from "@/components/Showcase";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="w-full flex h-screen items-center justify-between">
      <Sidebar />
      <div className="flex-1 h-full">
        {/* <FlowEditor /> */}
        <Showcase />
      </div>
      <MyModal />
    </main>
  );
}
