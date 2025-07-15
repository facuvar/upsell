import React, { useState } from "react";
import Layout from "./components/Layout";
import Panel from "./pages/Panel";
import VentasUpsell from "./pages/VentasUpsell";
import Clientes from "./pages/Clientes";
import Configuracion from "./pages/Configuracion";
import Carrito from "./pages/Carrito";

const pages = {
  "/": <Panel />,
  "/ventas": <VentasUpsell />,
  "/clientes": <Clientes />,
  "/configuracion": <Configuracion />,
  "/carrito": <Carrito />,
};

function App() {
  const [active, setActive] = useState("/");

  return (
    <Layout active={active} onNavigate={setActive}>
      {pages[active] || <Panel />}
    </Layout>
  );
}

export default App;
