// Mocks de datos para simular la base de datos ticketplus_dev

export const clientes = [
  { id: 1, nombre: "Distribuidora San Juan", telefono: "+5492611234567" },
  { id: 2, nombre: "Mayorista Mendoza", telefono: "+5492617654321" },
  { id: 3, nombre: "Almacén Central", telefono: "+5492611112233" },
  { id: 4, nombre: "Supermercado Los Andes", telefono: "+5492612223344" },
  { id: 5, nombre: "Kiosco La Esquina", telefono: "+5492613334455" },
];

export const productos = [
  { id: 1, nombre: "Coca Cola 2.25L", categoria: "Bebidas" },
  { id: 2, nombre: "Fideos Don Vicente 500g", categoria: "Alimentos" },
  { id: 3, nombre: "Aceite Natura 900ml", categoria: "Aceites" },
  { id: 4, nombre: "Yerba Taragüi 1kg", categoria: "Infusiones" },
  { id: 5, nombre: "Galletitas Oreo 118g", categoria: "Galletitas" },
];

// Sugerencias simuladas por producto
export const sugerencias = [
  { productoId: 1, sugerido: 18 },
  { productoId: 2, sugerido: 25 },
  { productoId: 3, sugerido: 12 },
  { productoId: 4, sugerido: 20 },
  { productoId: 5, sugerido: 30 },
];

export const ventas = [
  {
    id: 1,
    clienteId: 1,
    fecha: "2024-06-01",
    items: [
      { productoId: 1, cantidad: 10, precioUnitario: 1500 },
      { productoId: 2, cantidad: 5, precioUnitario: 800 },
    ],
  },
  {
    id: 2,
    clienteId: 2,
    fecha: "2024-06-02",
    items: [
      { productoId: 2, cantidad: 5, precioUnitario: 800 },
      { productoId: 3, cantidad: 2, precioUnitario: 1500 },
    ],
  },
  {
    id: 3,
    clienteId: 3,
    fecha: "2024-06-03",
    items: [
      { productoId: 3, cantidad: 8, precioUnitario: 1500 },
    ],
  },
  {
    id: 4,
    clienteId: 1,
    fecha: "2024-06-04",
    items: [
      { productoId: 2, cantidad: 12, precioUnitario: 800 },
      { productoId: 5, cantidad: 3, precioUnitario: 450 },
    ],
  },
  {
    id: 5,
    clienteId: 2,
    fecha: "2024-06-05",
    items: [
      { productoId: 1, cantidad: 7, precioUnitario: 1500 },
    ],
  },
  {
    id: 6,
    clienteId: 4,
    fecha: "2024-06-06",
    items: [
      { productoId: 4, cantidad: 15, precioUnitario: 1200 },
      { productoId: 5, cantidad: 10, precioUnitario: 450 },
    ],
  },
  {
    id: 7,
    clienteId: 5,
    fecha: "2024-06-07",
    items: [
      { productoId: 5, cantidad: 20, precioUnitario: 450 },
    ],
  },
];

export const tickets = [
  { id: 1, ventaId: 1, monto: 15000 },
  { id: 2, ventaId: 2, monto: 4000 },
  { id: 3, ventaId: 3, monto: 12000 },
  { id: 4, ventaId: 4, monto: 9600 },
  { id: 5, ventaId: 5, monto: 10500 },
];

// Heatmap de upsells exitosos por día y hora (0-23)
export const heatmapUpsell = [
  // Lunes a Domingo (0 = lunes, 6 = domingo)
  // Cada fila es un día, cada columna una hora
  // Ejemplo: [día, hora, cantidad]
  [0, 9, 2], [0, 10, 4], [0, 11, 6], [0, 12, 8], [0, 13, 5], [0, 14, 3],
  [1, 10, 3], [1, 11, 7], [1, 12, 9], [1, 13, 6], [1, 14, 2],
  [2, 9, 1], [2, 10, 2], [2, 11, 5], [2, 12, 7], [2, 13, 8], [2, 14, 4],
  [3, 10, 2], [3, 11, 6], [3, 12, 10], [3, 13, 7], [3, 14, 3],
  [4, 9, 2], [4, 10, 5], [4, 11, 8], [4, 12, 9], [4, 13, 6], [4, 14, 2],
  [5, 11, 3], [5, 12, 5], [5, 13, 7], [5, 14, 4],
  [6, 10, 1], [6, 11, 2], [6, 12, 3], [6, 13, 2],
];

// Comparativa histórica: ventas con y sin upsell (por fecha)
export const historicoUpsell = [
  { fecha: "2024-06-01", conUpsell: 8, sinUpsell: 12 },
  { fecha: "2024-06-02", conUpsell: 10, sinUpsell: 9 },
  { fecha: "2024-06-03", conUpsell: 12, sinUpsell: 8 },
  { fecha: "2024-06-04", conUpsell: 15, sinUpsell: 7 },
  { fecha: "2024-06-05", conUpsell: 13, sinUpsell: 10 },
  { fecha: "2024-06-06", conUpsell: 17, sinUpsell: 6 },
  { fecha: "2024-06-07", conUpsell: 14, sinUpsell: 8 },
]; 