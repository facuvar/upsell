import React, { useState } from "react";
import { productos } from "../data/mocks";

export default function Carrito() {
  const [cantidades, setCantidades] = useState(productos.reduce((acc, p) => ({ ...acc, [p.id]: 1 }), {}));

  const handleCantidad = (id, value) => {
    setCantidades({ ...cantidades, [id]: Math.max(1, value) });
  };

  const total = productos.reduce((acc, p) => acc + cantidades[p.id] * 1000, 0); // Simula precio unitario 1000

  return (
    <div className="flex justify-center">
      <div className="w-[350px] bg-white rounded-lg shadow p-6 mt-4">
        {/* Texto superior */}
        <div className="text-center mb-4">
          <span className="text-lg font-bold text-green-700">Distribuidora Norte</span>
        </div>
        {/* Mensaje de agradecimiento y sugerencia */}
        <div className="text-gray-600 text-sm text-center mb-6">
          Estimado cliente, gracias por su pedido!<br />
          Le enviamos una sugerencia de productos que no fueron incluidos en su última compra que consideramos que le pueden interesar.
        </div>
        <div className="divide-y">
          {productos.map(p => (
            <div key={p.id} className="flex items-center justify-between py-3">
              <span>{p.nombre}</span>
              <input
                type="number"
                min={1}
                value={cantidades[p.id]}
                onChange={e => handleCantidad(p.id, parseInt(e.target.value) || 1)}
                className="w-16 border rounded px-2 py-1 text-center focus:outline-none focus:ring-2 focus:ring-green-200"
              />
            </div>
          ))}
        </div>
        {/* Mensaje de 48hs */}
        <div className="mt-6 text-center text-xs text-gray-500 font-medium">
          Este pedido puede ser realizado dentro de las próximas 48Hs
        </div>
        <div className="mt-6 text-right font-bold text-green-600 text-lg">
          Total: ${total.toLocaleString("es-AR")}
        </div>
        <button className="w-full mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition">Finalizar compra</button>
      </div>
    </div>
  );
} 