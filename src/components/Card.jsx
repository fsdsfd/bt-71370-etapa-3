import { Link } from 'react-router-dom'
import './Card.scss'
import ProductosContext from '../contexts/ProductosContext'
import { useContext, useState } from 'react'
import CarritoContext from '../contexts/CarritoContext'
import { useLocalStorage } from '../hooks/useLocalStorage'
const Card = ({producto}) => {
  const {agregarProductoAlCarritoContext} = useContext(CarritoContext)
  const [guardarMeGusta,eliminarDelCarrito, limpiarCarrito,meGustaAlmacenado] = useLocalStorage('MeGusta', [])
  const [valorAlmacenado, setValorAlmacenado] = useState(null)
  const [like, setLike] = useState('/img/svg-icons/me-gusta.svg')
  const handleAgregar= (producto)=>{
    agregarProductoAlCarritoContext(producto)
  }
  const handleLike = ()=>{
    let prevImage = '/img/svg-icons/me-gusta.svg'
    if (prevImage === like) {
      prevImage = '/img/svg-icons/me-gusta-active.svg'
      producto.meGusta = 1
      guardarMeGusta(producto);
      if (producto.meGusta === 1) {
        setLike(prevImage)
      }

    }else{
      prevImage = '/img/svg-icons/me-gusta.svg'
      producto.meGusta = 0
      if (producto.meGusta === 0) {
        setLike(prevImage)
      }

    }
  }
  return (
<div className="card">
            <article className="card__article">
              <div className="card__image-container">
                    <img src={producto.foto} alt={producto.nombre} className="card__image" /> 
              </div>
              <div className="card__precio">${producto.precio}</div>
              <div className="card__content">
                <h2 className="card__heading">{producto.nombre} </h2>
                 
                <div className="card__description">
                  <p>{producto.descripcion} </p>
                  <p className="card__precio__p">$ {producto.precio}</p>
                  <div className="card__icon-container">
                    <Link to='/carrito' onClick={()=>handleAgregar(producto)}>
                      <img src="/img/svg-icons/cart_card.svg" alt="Añadir al carrito" className="card__cart" />  
                    </Link>

                    <img src={like}
                    alt="Añadir a me gusta" 
                    className="card__like" onClick={handleLike} style={{cursor: 'pointer'}}/>                  

                  </div>
                </div>
              </div>
            </article>
          </div>
  )
}

export default Card