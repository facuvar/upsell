import React, { useState } from "react";
import { ventas, clientes, productos } from "../data/mocks";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function getCliente(id) {
  const c = clientes.find(c => c.id === id);
  return c ? c.nombre : "-";
}
function getProducto(id) {
  const p = productos.find(p => p.id === id);
  return p ? p.nombre : "-";
}
function getTotalVenta(items) {
  return items.reduce((acc, item) => acc + item.cantidad * item.precioUnitario, 0);
}

export default function VentasUpsell() {
  const [expandida, setExpandida] = useState(null);

  return (
    <div>
      <h2 className="text-xl font-bold mb-6 text-green-600">Ventas Upsell</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead>
            <tr className="bg-green-50 text-green-700">
              <th></th>
              <th className="py-2 px-4 text-left">Fecha</th>
              <th className="py-2 px-4 text-left">Cliente</th>
              <th className="py-2 px-4 text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            {ventas.map(v => (
              <React.Fragment key={v.id}>
                <tr className="border-b last:border-b-0 hover:bg-green-50">
                  <td className="py-2 px-2 text-center">
                    <button onClick={() => setExpandida(expandida === v.id ? null : v.id)} className="text-green-600 hover:text-green-800">
                      {expandida === v.id ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                  </td>
                  <td className="py-2 px-4">{v.fecha}</td>
                  <td className="py-2 px-4">{getCliente(v.clienteId)}</td>
                  <td className="py-2 px-4 text-right">${getTotalVenta(v.items).toLocaleString("es-AR")}</td>
                </tr>
                {expandida === v.id && (
                  <tr className="bg-green-50">
                    <td colSpan={4} className="p-0">
                      <div className="p-4">
                        <div className="font-semibold mb-2 text-green-700">Detalle de productos:</div>
                        <table className="w-full text-sm">
                          <thead>
                            <tr>
                              <th className="text-left">Producto</th>
                              <th className="text-right">Cantidad</th>
                              <th className="text-right">Precio unitario</th>
                              <th className="text-right">Subtotal</th>
                            </tr>
                          </thead>
                          <tbody>
                            {v.items.map((item, idx) => (
                              <tr key={idx}>
                                <td>{getProducto(item.productoId)}</td>
                                <td className="text-right">{item.cantidad}</td>
                                <td className="text-right">${item.precioUnitario.toLocaleString("es-AR")}</td>
                                <td className="text-right">${(item.cantidad * item.precioUnitario).toLocaleString("es-AR")}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 