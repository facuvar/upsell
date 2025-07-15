import React from "react";
import Sidebar from "./Sidebar";

export default function Layout({ children, active, onNavigate }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar onNavigate={onNavigate} active={active} />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
} 