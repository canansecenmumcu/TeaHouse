"use client";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathName = usePathname();

  return (
    <html lang="en">
      {/* className="h-screen bg-[url('/flower.jpg')] bg-cover bg-[center_-0px] sm:bg-[center_-650px] md:bg-[center_-200px] lg:bg-[center_-200px] xl:bg-[center_-400px] 2xl:bg-[center_-800px] bg-fixed" */}
      <body
        className={`${
          pathName === "/"
            ? "h-screen bg-[url('/flower.jpg')] bg-cover bg-[center_-0px] sm:bg-[center_-650px] md:bg-[center_-200px] lg:bg-[center_-200px] xl:bg-[center_-400px] 2xl:bg-[center_-800px] bg-fixed"
            : ""
        }`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
