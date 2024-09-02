import React from 'react'
import useTitulo from '../hooks/useTitulo'
import ListadoCarrito from '../components/ListadoCarrito'
import './Carrito.scss'
const Carrito = () => {
  useTitulo('Carrito')
  return (
    <div className='body-carrito'>
    <h1>Productos en el carrito:</h1>
    <hr />
    <ListadoCarrito></ListadoCarrito>
    </div>
  )
}

export default Carrito