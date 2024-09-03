import React, { useContext } from "react";
import ProductosContext from "../contexts/ProductosContext";
import { notificacionSweet } from "./TablaFila.service";
import { Link } from "react-router-dom";
import './TablaFila.scss'
const TablaFila = ({product}) => {
  const { setProductoAEditar, eliminarProducto } = useContext(ProductosContext);
  const handleEditar = (prod) => {
    setProductoAEditar(prod);
  };
  const handleEliminar = () => {
    notificacionSweet(product.nombre, () => {
      eliminarProducto(product.id);
    });
  };
  return (
    <tr className="tr">
    <th scope="row">{product.nombre}</th>
    <td className="producto-hidden">{product.descripcion}</td>
    <td>${product.precio}</td>
    <td>
    <img className="img-row" src={product.foto} alt={product.nombre} />
    </td>
    <td className="producto-hidden">{product.envio ? 'SI' : 'NO'}</td>

    <td className="botones-container-alta " colSpan={1}>
      <Link className="boton-alta boton-alta__ver" to={`/detalle-producto/${product.id}`}>Ver</Link>
      <button className="boton-alta boton-alta__editar" onClick={() => handleEditar(product)}>Editar</button>
      <button className="boton-alta boton-alta__eliminar" onClick={handleEliminar}>Eliminar</button>
    </td>

  </tr>
  );
};

export default TablaFila;
