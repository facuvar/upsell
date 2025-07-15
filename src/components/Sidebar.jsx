import { FaChartBar, FaUsers, FaCogs, FaShoppingCart, FaStore } from "react-icons/fa";

const menu = [
  { label: "Panel", icon: <FaChartBar />, path: "/" },
  { label: "Ventas Upsell", icon: <FaStore />, path: "/ventas" },
  { label: "Clientes", icon: <FaUsers />, path: "/clientes" },
  { label: "Configuración", icon: <FaCogs />, path: "/configuracion" },
  { label: "Carrito", icon: <FaShoppingCart />, path: "/carrito" },
];

export default function Sidebar({ onNavigate, active }) {
  return (
    <aside className="h-full w-56 bg-white border-r border-gray-100 flex flex-col py-6 shadow-sm">
      <div className="mb-8 px-6">
        <span className="text-green-600 font-bold text-xl">Upsell</span>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2">
          {menu.map((item) => (
            <li key={item.label}>
              <button
                className={`flex items-center w-full px-6 py-3 rounded-lg transition-colors text-left hover:bg-green-50 text-gray-700 ${active === item.path ? "bg-green-100 text-green-700 font-semibold" : ""}`}
                onClick={() => onNavigate(item.path)}
              >
                <span className="mr-3 text-lg">{item.icon}</span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
} 