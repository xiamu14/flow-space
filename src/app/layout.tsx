import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FlowSpace",
  description: "让知识流转起来的空间",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>FlowSpace-流动的记录空间</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
