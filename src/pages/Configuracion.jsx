import React, { useState } from "react";

export default function Configuracion() {
  const [upsellActivo, setUpsellActivo] = useState(true);
  const [whatsappApi, setWhatsappApi] = useState("");
  const [whatsappNumero, setWhatsappNumero] = useState("");

  return (
    <div>
      <h2 className="text-xl font-bold mb-6 text-green-600">Configuración</h2>
      <div className="bg-white rounded-lg shadow p-6 max-w-lg">
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
        <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition">Guardar configuración</button>
      </div>
    </div>
  );
} 