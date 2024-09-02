import React from 'react'
import './TelevisionCarrousel.scss'
const TelevisionCarrousel = () => {
  return (
    <div className="carousel">
    <h1 className="carousel__titulo"> Agradecimientos a nuestros sponsors:</h1>
    <div className=" carousel carousel__gif">
      <img src="/img/logos/tele-sponsors.png" alt="" className="carousel__tele" />
      <img src="/img/logos/gif-sponsors.gif" alt="" className="carousel__sponsors" />  
    </div>
  </div>
    )
}

export default TelevisionCarrousel