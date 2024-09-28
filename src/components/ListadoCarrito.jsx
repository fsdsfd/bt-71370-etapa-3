import React, { useContext } from 'react'
import CarritoContext from '../contexts/CarritoContext'
import ItemCarrito from './ItemCarrito'
import './ListadoCarrito.scss'

const ListadoCarrito = () => {
    const {carrito, 
        limpiarCarritoContext, 
        guardarCarritoContext, 
        sumaDeProductosDelCarritoContext} = useContext(CarritoContext)
    
    const handleLimpiar = ()=>{
        limpiarCarritoContext()
    }
    const handleComprar = ()=>{
        console.log('Comprando...')
        guardarCarritoContext(carrito)
        limpiarCarritoContext()

    }
  return (
    <>
    <table className='tabla-valores-carrito'>
        <thead>
        <tr>
        <th className='th-producto'>Foto</th>
        <th className='th-producto'>Nombre</th>
        <th className='th-producto'>Cantidad</th>
        <th className='th-producto'>Precio</th>
        <th className='th-producto'>Acciones</th>

    </tr>
        </thead>
        <tbody>
            {
                carrito.length <= 0 ? (
                    <tr>
                        <td colSpan={5} style={{textAlign : 'center'}}>No hay productos</td>
                    </tr>
                ) : (
                    carrito.map((producto, index)=>(
                        <ItemCarrito key={index} producto={producto}></ItemCarrito>
                    ))
                )
            }
        </tbody>
    </table>
    {
        !carrito.length <= 0 && (
            <>
            <p className='texto-precio'>{`Precio total: ${sumaDeProductosDelCarritoContext()}`}</p>
            <div className='botones-container'>
            <div className='boton-container'>
            <button onClick={handleComprar} className='boton boton__comprar'>Comprar</button>
            </div>
            <div className='boton-vaciar-container'>
            <button onClick={handleLimpiar} className='boton boton__vaciar'>Vaciar carrito</button>
            </div>
            </div>

            </>


        )
    }
    </>
  )
}

export default ListadoCarrito