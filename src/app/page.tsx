"use client";
import MyModal from "@/components/MyModal";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="flex h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full h-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div>
          <Button onClick={() => setIsOpen(true)}>
            <Plus size={18} /> New
          </Button>
        </div>
        {/* <FlowEditor /> */}
      </div>
      <MyModal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      />
    </main>
  );
}
