import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Write blog of my journy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black w-screen overflow-x-hidden font-mono">
        <Navbar></Navbar>
        <main className="mx-5 p-2">{children}</main>
        </body>
    </html>
  );
}
