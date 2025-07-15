import React, { useState } from "react";
import { clientes, productos } from "../data/mocks";

export default function Configuracion() {
  const [upsellActivo, setUpsellActivo] = useState(true);
  const [whatsappApi, setWhatsappApi] = useState("");
  const [whatsappNumero, setWhatsappNumero] = useState("");
  const [excluidos, setExcluidos] = useState([]);
  const [productosFijos, setProductosFijos] = useState([]);

  const handleExcluido = (id) => {
    setExcluidos(excluidos.includes(id)
      ? excluidos.filter(cid => cid !== id)
      : [...excluidos, id]);
  };

  const handleProductoFijo = (id) => {
    setProductosFijos(productosFijos.includes(id)
      ? productosFijos.filter(pid => pid !== id)
      : [...productosFijos, id]);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-6 text-green-600">Configuración</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {/* Card de configuración general */}
        <div className="bg-white rounded-lg shadow p-4 md:p-6 w-full mb-6 md:mb-0">
          <div className="mb-6">
            <label className="flex items-center gap-3">
              <span className="font-semibold">Upsell Activo:</span>
              <input type="checkbox" checked={upsellActivo} onChange={e => setUpsellActivo(e.target.checked)} className="accent-green-500 w-5 h-5" />
              <span className={upsellActivo ? "text-green-600 font-bold" : "text-gray-400"}>{upsellActivo ? "Sí" : "No"}</span>
            </label>
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-1">API de WhatsApp</label>
            <input type="text" value={whatsappApi} onChange={e => setWhatsappApi(e.target.value)} className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-200" placeholder="Ingresa tu API Key" />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-1">Número de WhatsApp</label>
            <input type="text" value={whatsappNumero} onChange={e => setWhatsappNumero(e.target.value)} className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-200" placeholder="Ej: +5492611234567" />
          </div>
          <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition w-full md:w-auto">Guardar configuración</button>
        </div>
        {/* Card de clientes excluidos */}
        <div className="bg-white rounded-lg shadow p-4 md:p-6 w-full mb-6 md:mb-0 h-fit">
          <div className="font-semibold text-green-700 mb-4">Clientes que no deben recibir el Upsell</div>
          <div className="space-y-2">
            {clientes.map(c => (
              <label key={c.id} className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={excluidos.includes(c.id)}
                  onChange={() => handleExcluido(c.id)}
                  className="accent-green-500 w-5 h-5"
                />
                <span>{c.nombre}</span>
              </label>
            ))}
          </div>
        </div>
        {/* Card de productos fijos en Upsell */}
        <div className="bg-white rounded-lg shadow p-4 md:p-6 w-full h-fit">
          <div className="font-semibold text-green-700 mb-4">Siempre sumar estos productos al Upsell</div>
          <div className="space-y-2 mb-4">
            {productos.map(p => (
              <label key={p.id} className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={productosFijos.includes(p.id)}
                  onChange={() => handleProductoFijo(p.id)}
                  className="accent-green-500 w-5 h-5"
                />
                <span>{p.nombre}</span>
              </label>
            ))}
          </div>
          <div className="text-xs text-gray-500 font-medium">
            Estos productos se sumarán a los generados automáticamente
          </div>
        </div>
      </div>
    </div>
  );
} 