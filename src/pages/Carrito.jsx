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
        <h2 className="text-xl font-bold mb-6 text-green-600 text-center">Carrito (Simulación Mobile)</h2>
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
        <div className="mt-6 text-right font-bold text-green-600 text-lg">
          Total: ${total.toLocaleString("es-AR")}
        </div>
        <button className="w-full mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition">Finalizar compra</button>
      </div>
    </div>
  );
} 