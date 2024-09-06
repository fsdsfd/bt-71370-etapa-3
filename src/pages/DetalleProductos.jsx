import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Spinner from '../components/Spinner'
import './DetalleProducto.scss'
import useTitulo from '../hooks/useTitulo'
import CarritoContext from '../contexts/CarritoContext'
import { Link } from 'react-router-dom'

const DetalleProductos = () => {
    useTitulo('Detalle Producto')
    const {agregarProductoAlCarritoContext} = useContext(CarritoContext)
    const url =  import.meta.env.VITE_BACKEND_PRODUCTOS
    const [producto, setProducto] = useState(null)
    console.log(producto)
    const { id } = useParams()
    useEffect(() => {
        getOneProducto()
    }, [])
    const handleAgregar = (producto)=>{
        agregarProductoAlCarritoContext(producto)
    }
    const getOneProducto = async ()=>{
        try {
            const urlGet = url + id
            const res = await fetch(urlGet)
            if (!res.ok) {
                throw new Error('Error al enviar el producto', res.status)
            }
            const data = await res.json()
            console.log(data)
            
            setProducto(data)
        } catch (error) {
            console.log('getOneProducto', error)
        }
    }

  return (
    <>
    {
        producto ?
        (
        <>
 <main className="main-producto">
        <div className="image-container">
            <img src={producto.foto} alt={producto.nombre} className="image-container__image" />
        </div>
        <div className="container-producto">
            <h1 className="container-producto__titulo">{producto.nombre}</h1>
            <p className="container-producto__description">{producto.descripcion}</p>
            <p className="container-producto__precio">${producto.precio}</p>
            <div className="container-producto__container-boton">
                <button className="container-producto__boton">Comprar</button> 
                <Link to='/carrito' onClick={()=>handleAgregar(producto)}>
                      <img src="/img/svg-icons/cart_card.svg" alt="Añadir al carrito" className="container-producto__cart" />  
                    </Link>

            </div>
        </div>

    </main>
        </>
        ) : <Spinner />
    }
    </>
  )
}

export default DetalleProductos