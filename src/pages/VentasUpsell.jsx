import React from "react";
import { ventas, clientes, productos } from "../data/mocks";

function getCliente(id) {
  const c = clientes.find(c => c.id === id);
  return c ? c.nombre : "-";
}
function getProducto(id) {
  const p = productos.find(p => p.id === id);
  return p ? p.nombre : "-";
}

export default function VentasUpsell() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-6 text-green-600">Ventas Upsell</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead>
            <tr className="bg-green-50 text-green-700">
              <th className="py-2 px-4 text-left">Fecha</th>
              <th className="py-2 px-4 text-left">Cliente</th>
              <th className="py-2 px-4 text-left">Producto</th>
              <th className="py-2 px-4 text-right">Cantidad</th>
              <th className="py-2 px-4 text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            {ventas.map(v => (
              <tr key={v.id} className="border-b last:border-b-0 hover:bg-green-50">
                <td className="py-2 px-4">{v.fecha}</td>
                <td className="py-2 px-4">{getCliente(v.clienteId)}</td>
                <td className="py-2 px-4">{getProducto(v.productoId)}</td>
                <td className="py-2 px-4 text-right">{v.cantidad}</td>
                <td className="py-2 px-4 text-right">${v.total.toLocaleString("es-AR")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 