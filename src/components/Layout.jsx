import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { FaBars } from "react-icons/fa";

export default function Layout({ children, active, onNavigate }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar
        onNavigate={onNavigate}
        active={active}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="md:hidden flex items-center justify-between p-4 bg-white shadow sticky top-0 z-20">
          <button
            className="text-2xl text-gray-500 hover:text-green-600"
            onClick={() => setSidebarOpen(true)}
          >
            <FaBars />
          </button>
          <span className="text-green-600 font-bold text-xl">Upsell</span>
          <div className="w-8" /> {/* Espacio para balancear el header */}
        </header>
        <main className="flex-1 p-4 md:p-6 w-full max-w-full overflow-x-auto">{children}</main>
      </div>
    </div>
  );
} 