import React from 'react'
import './Footer.scss'
const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer__contenedor">
        <h2 className="footer__contenedor__h2">Siguenos en nuestras redes</h2>
        <a href="https://www.instagram.com/tomas_marcos_2019/"><img src="/img/svg-icons/ig.svg" 
        alt="Instagram icono" className="footer__iconos footer__iconos__1" /></a>
        <a href="https://www.facebook.com/profile.php?id=61553549864608">
        <img src="/img/svg-icons/facebook.svg" alt="Facebook icono"
                className="footer__iconos footer__iconos__2" /></a>
        <a href="https://www.linkedin.com/in/tom%C3%A1s-marcos-1a7107257/">
        <img src="/img/svg-icons/linkedin.svg" alt="Linkedin icono"
                className="footer__iconos footer__iconos__3" /></a>
        <hr className="footer__contenedor__hr" />
        <div className="footer__contenedor__acerca-de">
            <p className="footer__contenedor__acerca-de__a">Acerca de:</p>
            <a href="https://www.infobae.com/realidad-aumentada/2024/04/01/la-vida-en-marte-sera-posible-un-descubrimiento-abre-la-esperanza-y-esconde-un-enigma/"
                className="footer__contenedor__acerca-de__a">Vida en Marte</a>
            <a href="https://www.infobae.com/salud/ciencia/2019/05/30/la-nasa-hallo-en-pluton-un-elemento-clave-para-que-haya-vida-extraterrestre/"
                className="footer__contenedor__acerca-de__a">Vida en Pluto</a>
        </div>
    </div>
</footer>
  )
}

export default Footer