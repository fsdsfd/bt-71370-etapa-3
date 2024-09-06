import React, { useContext, useState } from 'react'
import CarritoContext from '../contexts/CarritoContext'
import './ItemCarrito.scss'
const ItemCarrito = ({producto}) => {
   const {eliminarProductoAlCarritoContext, sumarCantidadEnElCarrito} = useContext(CarritoContext)
   const handleEliminar = (id)=>{
        console.log(producto)
        eliminarProductoAlCarritoContext(id, producto)
   }
   const handleAgregarCantidad = (producto)=>{
    sumarCantidadEnElCarrito(producto)
   }
  return (
        <tr>
        <td>
            <img src={producto.foto} alt={producto.nombre} width="50px" />
            {/* No poner el width acá  */}
        </td>
        <td className='td-producto'>{producto.nombre}</td>
        <td className='td-producto'>{producto.cantidad}</td>
        <td className='td-producto'>{producto.precio}</td>
        <td className='boton-container td-producto'>
            <button onClick={()=>handleEliminar(producto.id)} className='boton-carrito boton-carrito__eliminar'>
                Eliminar
            </button>
            <button onClick={()=>handleAgregarCantidad(producto) } className='boton-carrito boton-carrito__agregar'>
                Agregar
            </button>
        </td>
    </tr>

  )
}

export default ItemCarrito