"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full flex h-screen items-center justify-center">
      <div>
        <Button>
          <Link href="/space/1">Space</Link>
        </Button>
      </div>
    </main>
  );
}
