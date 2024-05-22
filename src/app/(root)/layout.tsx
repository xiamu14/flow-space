"use client";
import MyModal from "@/components/MyModal";
import Sidebar from "@/components/Sidebar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full flex h-screen items-center justify-between">
      <Sidebar />
      <div className="flex-1 h-full">{children}</div>
      <MyModal />
    </main>
  );
}
