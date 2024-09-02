import { useRoutes } from "react-router";
import Inicio from "../pages/Inicio";
import Nosotros from "../pages/Nosotros";
import Contacto from "../pages/Contacto";
import NoEncontrado from "../pages/NoEncontrado";
import Alta from "../pages/Alta";
import DetalleProductos from "../pages/DetalleProductos";
import Carrito from "../pages/Carrito";

const Rutas = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Inicio />,
    },
    {
      path: "/nosotros",
      element: <Nosotros />,
    },
    {
      path: "/alta",
      element: <Alta />,
    },
    {
      path: "/carrito",
      element: <Carrito />,
    },
    {
      path: "/contacto",
      element: <Contacto />,
    },
    {
      path: "/detalle-producto/:id",
      element: <DetalleProductos />,
    },
    {
      path: "*",
      element: <NoEncontrado />,
    },
    // Añadir detalle productos
  ]);
  return routes;
};
export default Rutas;
