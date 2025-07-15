import React from "react";
import { clientes, productos, ventas } from "../data/mocks";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

const COLORS = ["#4ade80", "#22d3ee", "#a78bfa", "#facc15", "#f472b6"];

// KPIs
const totalVentas = ventas.reduce((acc, v) => acc + v.total, 0);
const totalClientes = new Set(ventas.map(v => v.clienteId)).size;
const totalProductos = new Set(ventas.map(v => v.productoId)).size;
const ticketPromedio = ventas.length ? Math.round(totalVentas / ventas.length) : 0;

// Gráfico de ventas por fecha
const ventasPorFecha = ventas.reduce((acc, v) => {
  const fecha = v.fecha;
  acc[fecha] = (acc[fecha] || 0) + v.total;
  return acc;
}, {});
const dataVentas = Object.entries(ventasPorFecha).map(([fecha, total]) => ({ fecha, total }));

// Productos más vendidos
const productosVendidos = productos.map(p => ({
  nombre: p.nombre,
  cantidad: ventas.filter(v => v.productoId === p.id).reduce((acc, v) => acc + v.cantidad, 0),
}));
const dataProductos = productosVendidos.filter(p => p.cantidad > 0);

export default function Panel() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-6 text-green-600">Panel de Control</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <span className="text-gray-500 text-sm">Ventas Upsell</span>
          <span className="text-2xl font-bold text-green-600">${totalVentas.toLocaleString("es-AR")}</span>
        </div>
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <span className="text-gray-500 text-sm">Clientes</span>
          <span className="text-2xl font-bold text-green-600">{totalClientes}</span>
        </div>
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <span className="text-gray-500 text-sm">Productos</span>
          <span className="text-2xl font-bold text-green-600">{totalProductos}</span>
        </div>
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <span className="text-gray-500 text-sm">Ticket Promedio</span>
          <span className="text-2xl font-bold text-green-600">${ticketPromedio.toLocaleString("es-AR")}</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-semibold mb-4 text-green-600">Gráfico de Ventas</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={dataVentas}>
              <XAxis dataKey="fecha" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="total" fill="#4ade80" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-semibold mb-4 text-green-600">Productos más vendidos</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={dataProductos} dataKey="cantidad" nameKey="nombre" cx="50%" cy="50%" outerRadius={80} label>
                {dataProductos.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
} 