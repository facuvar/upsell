import { FaChartBar, FaUsers, FaCogs, FaShoppingCart, FaStore, FaBars, FaTimes } from "react-icons/fa";
import React from "react";

const menu = [
  { label: "Panel", icon: <FaChartBar />, path: "/" },
  { label: "Ventas Upsell", icon: <FaStore />, path: "/ventas" },
  { label: "Clientes", icon: <FaUsers />, path: "/clientes" },
  { label: "Configuración", icon: <FaCogs />, path: "/configuracion" },
  { label: "Carrito", icon: <FaShoppingCart />, path: "/carrito" },
];

export default function Sidebar({ onNavigate, active, open, onClose }) {
  return (
    <>
      {/* Overlay para mobile */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden" onClick={onClose}></div>
      )}
      <aside
        className={`fixed md:static z-40 top-0 left-0 h-full w-64 bg-white border-r border-gray-100 flex flex-col py-6 shadow-sm transition-transform duration-200 md:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="mb-8 px-6 flex items-center justify-between">
          <span className="text-green-600 font-bold text-xl">Upsell</span>
          <button className="md:hidden text-gray-400 hover:text-green-600 text-2xl" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        <nav className="flex-1">
          <ul className="space-y-2">
            {menu.map((item) => (
              <li key={item.label}>
                <button
                  className={`flex items-center w-full px-6 py-3 rounded-lg transition-colors text-left hover:bg-green-50 text-gray-700 ${active === item.path ? "bg-green-100 text-green-700 font-semibold" : ""}`}
                  onClick={() => { onNavigate(item.path); onClose && onClose(); }}
                >
                  <span className="mr-3 text-lg">{item.icon}</span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
} 