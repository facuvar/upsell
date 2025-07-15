import React from "react";
import { clientes, ventas } from "../data/mocks";

function comprasPorCliente(clienteId) {
  return ventas.filter(v => v.clienteId === clienteId).length;
}

export default function Clientes() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-6 text-green-600">Clientes</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead>
            <tr className="bg-green-50 text-green-700">
              <th className="py-2 px-4 text-left">Nombre</th>
              <th className="py-2 px-4 text-left">Teléfono</th>
              <th className="py-2 px-4 text-right">Compras</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map(c => (
              <tr key={c.id} className="border-b last:border-b-0 hover:bg-green-50">
                <td className="py-2 px-4">{c.nombre}</td>
                <td className="py-2 px-4">{c.telefono}</td>
                <td className="py-2 px-4 text-right">{comprasPorCliente(c.id)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 