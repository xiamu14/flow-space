import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FlowSpace",
  description: "用可视化工作空间释放你的无限潜力",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>FlowSpace-可视化工作空间</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
