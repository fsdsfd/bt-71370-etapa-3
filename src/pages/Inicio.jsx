import React, { useContext, useEffect, useState } from 'react'
import './Inicio.scss'
import Card from '../components/Card'
import useTitulo from '../hooks/useTitulo'
import ProductosContext from '../contexts/ProductosContext'
import TelevisionCarrousel from '../components/TelevisionCarrousel'
import SearchBar from '../components/SearchBar'
const Inicio = () => {
  useTitulo('Inicio')
  const {productos} = useContext(ProductosContext)

  const [backgroundImage, setBackgroundImage] = useState(null)
  const ColorHora = () => {
    let hora = new Date().getHours();
    let nuevoGradiante;

    if (hora >= 9 && hora <= 12) {
      nuevoGradiante = 'linear-gradient(0deg,#200000 0%, #c38327 99%)';
    } else if (hora >= 12 && hora <= 18) {
      nuevoGradiante = 'linear-gradient(0deg,#200000 0%, #4b7b9f 99%)';
    } else {
      nuevoGradiante = 'linear-gradient(0deg,#000000 0%, #1B2838 99%)';
    }
    setBackgroundImage(nuevoGradiante);
  };
  useEffect(() => {
    ColorHora();
  }, [])
  
  return (
<>
<main style={{backgroundImage : backgroundImage}}>
      <section className="section-cards">
        <div className="cards-container" id="contenedor-cards">
          {
            productos && productos.map((producto)=>(
              <Card key={producto.id} producto={producto}/>
            ))
          }
        </div>

      </section>
          <TelevisionCarrousel></TelevisionCarrousel>
    </main>
</>
    
  )
}

export default Inicio