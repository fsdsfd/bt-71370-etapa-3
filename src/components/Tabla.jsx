import { useContext, useState } from "react";
import TablaFila from "./TablaFila";
import ProductosContext from "../contexts/ProductosContext";
import './Tabla.scss'
const Tabla = () => {
  const {productos} = useContext(ProductosContext);
  return (
    <div className="productos-body">
      <h2>Tabla de productos</h2>
      <table className="tabla-alta">
        <thead>
          <tr className="tr">
            <th scope="col">Nombre</th>
            <th scope="col" className="producto-hidden">Descripción</th>
            <th scope="col">Precio</th>
            <th scope="col">Imagen</th>
            <th scope="col" className="producto-hidden">Envio</th>

            <th scope="col" className="producto-acciones">Acciones</th>
            
          </tr>
        </thead>
        <tbody className="tabla-fila-productos">
          {/* Para renderizar los productos se usa map, no se puede con forEach */}
          {
            // Esto es básicamente products ? 'products.map()...' : ''. Un if básicamente, rendering condicional, si
            productos && productos.map((product, idx) => (
                <TablaFila key={product.id+idx} product={product} />
              ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Tabla;
