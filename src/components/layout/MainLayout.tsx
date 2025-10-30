"use client";

import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { MadeWithDyad } from "@/components/made-with-dyad";

export function MainLayout() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[256px_1fr] lg:grid-cols-[256px_1fr]">
      <Sidebar />
      <div className="flex flex-col md:ml-64">
        <Navbar />
        <main className="flex flex-1 flex-col gap-4 w-full p-4 lg:gap-6 lg:p-6 overflow-x-hidden"> {/* Added w-full and overflow-x-hidden */}
          <Outlet />
          <MadeWithDyad />
        </main>
      </div>
    </div>
  );
}