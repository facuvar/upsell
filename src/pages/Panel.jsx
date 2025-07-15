import React, { useState } from "react";
import { clientes, productos, ventas, sugerencias, heatmapUpsell, historicoUpsell } from "../data/mocks";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

const COLORS = ["#4ade80", "#22d3ee", "#a78bfa", "#facc15", "#f472b6"];

// KPIs
const totalVentas = ventas.reduce((acc, v) => acc + v.items.reduce((a, i) => a + i.cantidad * i.precioUnitario, 0), 0);
const totalClientes = new Set(ventas.map(v => v.clienteId)).size;
const totalProductos = new Set(ventas.flatMap(v => v.items.map(i => i.productoId))).size;
const ticketPromedio = ventas.length ? Math.round(totalVentas / ventas.length) : 0;

// Calcular totales de ventas analizadas
function getVentasPorPeriodo(periodo) {
  if (periodo === "diario") {
    // Agrupar por fecha
    const fechas = [...new Set(ventas.map(v => v.fecha))];
    return fechas.map(f => ({ label: f, valor: ventas.filter(v => v.fecha === f).length }));
  }
  if (periodo === "semanal") {
    // Simula una sola semana
    return [{ label: "Semana actual", valor: ventas.length }];
  }
  if (periodo === "mensual") {
    // Simula un solo mes
    return [{ label: "Junio 2024", valor: ventas.length }];
  }
  return [];
}

// Gráfico de ventas por fecha
const ventasPorFecha = ventas.map(v => ({
  fecha: v.fecha,
  total: v.items.reduce((a, i) => a + i.cantidad * i.precioUnitario, 0),
}));

// Productos más vendidos
const productosVendidos = productos.map(p => ({
  nombre: p.nombre,
  cantidad: ventas.reduce((acc, v) => acc + v.items.filter(i => i.productoId === p.id).reduce((a, i) => a + i.cantidad, 0), 0),
}));
const dataProductos = productosVendidos.filter(p => p.cantidad > 0);

// Gráfico comparativo: vendidos vs sugeridos
const dataComparativo = productos.map(p => {
  const vendido = productosVendidos.find(v => v.nombre === p.nombre)?.cantidad || 0;
  const sugerido = sugerencias.find(s => s.productoId === p.id)?.sugerido || 0;
  return {
    nombre: p.nombre,
    Vendidos: vendido,
    Sugeridos: sugerido,
  };
});

// Heatmap: días y horas
const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
const horas = [9, 10, 11, 12, 13, 14];
const heatmapMatrix = Array.from({ length: 7 }, (_, d) =>
  horas.map(h => {
    const found = heatmapUpsell.find(([dia, hora]) => dia === d && hora === h);
    return found ? found[2] : 0;
  })
);

function getColor(valor) {
  if (valor === 0) return "#f3f4f6";
  if (valor < 3) return "#bbf7d0";
  if (valor < 6) return "#4ade80";
  if (valor < 9) return "#22d3ee";
  return "#a78bfa";
}

export default function Panel() {
  const [periodo, setPeriodo] = useState("diario");
  const ventasPeriodo = getVentasPorPeriodo(periodo);
  const totalPeriodo = ventasPeriodo.reduce((acc, v) => acc + v.valor, 0);

  return (
    <div>
      <h2 className="text-xl font-bold mb-6 text-green-600">Panel de Control</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
        {/* KPI: Total de ventas analizadas */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center col-span-1">
          <div className="flex gap-2 mb-2">
            <button onClick={() => setPeriodo("diario")} className={`px-2 py-1 rounded text-xs ${periodo === "diario" ? "bg-green-500 text-white" : "bg-gray-100 text-gray-600"}`}>Diario</button>
            <button onClick={() => setPeriodo("semanal")} className={`px-2 py-1 rounded text-xs ${periodo === "semanal" ? "bg-green-500 text-white" : "bg-gray-100 text-gray-600"}`}>Semanal</button>
            <button onClick={() => setPeriodo("mensual")} className={`px-2 py-1 rounded text-xs ${periodo === "mensual" ? "bg-green-500 text-white" : "bg-gray-100 text-gray-600"}`}>Mensual</button>
          </div>
          <span className="text-2xl font-bold text-green-600">{totalPeriodo}</span>
          <span className="text-gray-500 text-xs text-center">Total de ventas analizadas</span>
        </div>
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center col-span-1">
          <span className="text-gray-500 text-sm">Ventas Upsell</span>
          <span className="text-2xl font-bold text-green-600">${totalVentas.toLocaleString("es-AR")}</span>
        </div>
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center col-span-1">
          <span className="text-gray-500 text-sm">Clientes</span>
          <span className="text-2xl font-bold text-green-600">{totalClientes}</span>
        </div>
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center col-span-1">
          <span className="text-gray-500 text-sm">Productos</span>
          <span className="text-2xl font-bold text-green-600">{totalProductos}</span>
        </div>
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center col-span-1">
          <span className="text-gray-500 text-sm">Ticket Promedio</span>
          <span className="text-2xl font-bold text-green-600">${ticketPromedio.toLocaleString("es-AR")}</span>
        </div>
      </div>
      {/* Gráfico de ventas por fecha */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h3 className="font-semibold mb-4 text-green-600">Gráfico de Ventas</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={ventasPorFecha}>
            <XAxis dataKey="fecha" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="total" fill="#4ade80" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      {/* Productos más vendidos */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
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
      {/* Gráfico comparativo: vendidos vs sugeridos */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h3 className="font-semibold mb-4 text-green-600">Productos más vendidos vs. más sugeridos</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dataComparativo} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <XAxis dataKey="nombre" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Vendidos" fill="#4ade80" />
            <Bar dataKey="Sugeridos" fill="#a78bfa" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      {/* Comparativa histórica: clientes con y sin intervención del sistema */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h3 className="font-semibold mb-4 text-green-600">Comparativa histórica: clientes con y sin intervención del sistema</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={historicoUpsell} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <XAxis dataKey="fecha" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="conUpsell" fill="#4ade80" name="Con Upsell" />
            <Bar dataKey="sinUpsell" fill="#facc15" name="Sin Upsell" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      {/* Heatmap de upsells */}
      <div className="bg-white rounded-lg shadow p-4 md:p-6 mb-8 w-full max-w-xl mx-auto">
        <h3 className="font-semibold mb-4 text-green-600 text-base md:text-lg">Heatmap: días/horas donde los upsells funcionan mejor</h3>
        <div className="overflow-x-auto">
          <table className="border-collapse text-xs md:text-sm">
            <thead>
              <tr>
                <th className="p-1 md:p-2"></th>
                {horas.map(h => (
                  <th key={h} className="p-1 md:p-2 font-semibold text-gray-500">{h}:00</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {heatmapMatrix.map((row, d) => (
                <tr key={d}>
                  <td className="p-1 md:p-2 font-semibold text-gray-500">{dias[d]}</td>
                  {row.map((valor, h) => (
                    <td
                      key={h}
                      className="w-8 h-8 md:w-12 md:h-10 text-center rounded"
                      style={{ background: getColor(valor), color: valor > 0 ? '#222' : '#aaa' }}
                    >
                      {valor > 0 ? valor : "-"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 