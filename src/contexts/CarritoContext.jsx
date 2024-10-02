import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { helperPeticionesHttp } from "../helpers/helper-peticiones-http";

const CarritoContext = createContext();
const CarritoProvider = ({ children }) => {
  const url = import.meta.env.VITE_BACKEND_CARRITOS
  const [guardarEnElCarrito, eliminarDelCarrito, limpiarCarrito, carrito] =
    useLocalStorage("carrito", []);
  const sumaDeProductosDelCarritoContext = () => {
    let precioTotal = 0;
    for (let i = 0; i < carrito.length; i++) {
      precioTotal += carrito[i].precio * carrito[i].cantidad;
    }
    return precioTotal;
  };

  function estaEnElCarrito(producto) {
    const nuevoArray = carrito.filter((prod) => prod.id === producto.id);
    return nuevoArray.length;
  }
  const obtenerProductoDelCarrito = (producto) => {
    return carrito.find((prod) => prod.id === producto.id);
  };
  const [productoAgregar, setProductoAgregar] = useState(null)
  const agregarProductoAlCarritoContext = (producto) => {
    if (!estaEnElCarrito(producto)) {
      producto.cantidad = 1;
      guardarEnElCarrito(producto);
    } else {
      const productoAgregar = obtenerProductoDelCarrito(producto);
      const productoCantidadNueva = { ...productoAgregar };
      productoCantidadNueva.cantidad++;
      window.localStorage.setItem("carrito", JSON.stringify(carrito));
    }
  };
  const sumarCantidadEnElCarrito = (producto) => {
    const productoAgregar = obtenerProductoDelCarrito(producto);
    const productoCantidadNueva = { ...productoAgregar };
    producto.cantidad++;
    setProductoAgregar(productoCantidadNueva)

    window.localStorage.setItem("carrito", JSON.stringify(carrito));
  };
  const eliminarProductoAlCarritoContext = (id, producto) => {
    const productoAgregar = obtenerProductoDelCarrito(producto);
    if (producto.cantidad <= 1) {
      eliminarDelCarrito(id);
      console.log(id);
    } else {
      const productoCantidadNueva = { ...productoAgregar };
      producto.cantidad--;
      setProductoAgregar(productoCantidadNueva)
      window.localStorage.setItem("carrito", JSON.stringify(carrito));
    }
  };
  const guardarCarritoContext = async (carrito) => {
    console.log(JSON.stringify(carrito));
    try {
      const options = {
          method: 'POST',
          headers: {'content-type': 'application/json'},
          body : JSON.stringify(carrito)
      }
     const losProductosEnElCarrito = await helperPeticionesHttp(url, options)
     // Extra: crear una página de compra exito
     console.log(losProductosEnElCarrito)
  } catch (error) {
      console.log('[guardarCarritoContext]', error)
  }
  };
  const limpiarCarritoContext = () => {
    limpiarCarrito();
  };
  const data = {
    agregarProductoAlCarritoContext,
    eliminarProductoAlCarritoContext,
    limpiarCarritoContext,
    guardarCarritoContext,
    sumaDeProductosDelCarritoContext,
    sumarCantidadEnElCarrito,
    obtenerProductoDelCarrito,
    carrito,
  };
  return (
    <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
  );
};
export { CarritoProvider };
export default CarritoContext;
