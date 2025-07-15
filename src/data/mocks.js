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

export const ventas = [
  { id: 1, clienteId: 1, productoId: 1, cantidad: 10, total: 15000, fecha: "2024-06-01" },
  { id: 2, clienteId: 2, productoId: 2, cantidad: 5, total: 4000, fecha: "2024-06-02" },
  { id: 3, clienteId: 3, productoId: 3, cantidad: 8, total: 12000, fecha: "2024-06-03" },
  { id: 4, clienteId: 1, productoId: 2, cantidad: 12, total: 9600, fecha: "2024-06-04" },
  { id: 5, clienteId: 2, productoId: 1, cantidad: 7, total: 10500, fecha: "2024-06-05" },
  { id: 6, clienteId: 4, productoId: 4, cantidad: 15, total: 18000, fecha: "2024-06-06" },
  { id: 7, clienteId: 5, productoId: 5, cantidad: 20, total: 9000, fecha: "2024-06-07" },
];

export const tickets = [
  { id: 1, ventaId: 1, monto: 15000 },
  { id: 2, ventaId: 2, monto: 4000 },
  { id: 3, ventaId: 3, monto: 12000 },
  { id: 4, ventaId: 4, monto: 9600 },
  { id: 5, ventaId: 5, monto: 10500 },
]; 