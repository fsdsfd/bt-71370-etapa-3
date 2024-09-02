import React from 'react'
import useTitulo from '../hooks/useTitulo'
import './Nosotros.scss'
const Nosotros = () => {
  useTitulo('Nosotros')
  return (
    <main className="main-nosotros">
    <div className="contenedor-nosotros">
      <div className="contenedor-nosotros__parrafos">
        <div className="contenedor-nosotros__primer-parrafo">
          <h1 className="contenedor-nosotros__titulos  contenedor-nosotros__titulos__1">¿Quiénes somos?</h1>
          <img src="/img/trabajadores-1.jpg" alt="Trabajadores hablando" className="contenedor-nosotros__imagenes  contenedor-nosotros__imagenes__1" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At officiis facilis delectus blanditiis nam
            velit, voluptatum eius itaque, repudiandae veniam in impedit tempore, necessitatibus vero nobis eaque et
            harum esse incidunt natus illo ratione debitis pariatur? Quaerat repellat molestias, ea voluptas
            voluptatum excepturi accusamus amet reiciendis impedit sed maiores optio.</p>
        </div>
        <div className="contenedor-nosotros__segundo-parrafo">
          <h2 className="contenedor-nosotros__titulos contenedor-nosotros__titulos__2">¿Cuál es nuestro objetivo?</h2>
          <img src="/public/img/Bola-de-plasma.jpg" alt="bola de plasma" className="contenedor-nosotros__imagenes  contenedor-nosotros__imagenes__2" />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, maiores quibusdam? Laborum, qui
            adipisci! Nam optio inventore omnis qui atque amet reprehenderit libero, voluptatem nulla odit, deserunt,
            excepturi debitis. Eius voluptatum placeat, temporibus repudiandae quas enim sed explicabo modi, repellat
            voluptate libero, a eligendi illum perferendis sint veniam at vero aliquid aperiam ipsam? Alias velit
            soluta harum eius, ut sint!</p>
        </div>
        <div className="contenedor-nosotros__tercer-parrafo">
          <h2 className="contenedor-nosotros__titulos contenedor-nosotros__titulos__3">Q&A</h2>
          <img src="/public/img/trabajador-1.png" alt="Trabajador con smoking" className="contenedor-nosotros__imagenes  contenedor-nosotros__imagenes__3" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, modi asperiores dolore impedit, eos
            ducimus autem velit tempora quis expedita aspernatur dolorem unde veniam repellat soluta dolor tempore
            eveniet rem. Impedit nesciunt nulla autem. Enim, dolorem ex, distinctio aperiam, nisi est error iure earum
            quo dolorum nobis vel nam repellendus aliquid dolore quia vero esse commodi. Mollitia omnis esse magnam
            optio nesciunt sed a, repudiandae facilis nisi, fuga quaerat totam illum in debitis molestiae minima
            doloremque consequuntur dolore beatae laudantium obcaecati?</p>
        </div>
      </div>
    </div>
    <div className="columnas-nosotros">
      <div className="columnas-nosotros__columna">
        <h1 className="columnas-nosotros__titulo">Seguridad</h1>
        <p className="columnas-nosotros__parrafo">Nuestra compañía se destaca por su seguridad excelente debido a que nuestras bases de datos son diseñadas y gestionadas por profesionales altamente capacitados. Estos expertos aseguran que cada capa de nuestra infraestructura tecnológica cumple con los más altos estándares de protección y privacidad. Implementamos medidas avanzadas de encriptación, monitoreo constante y actualizaciones periódicas para prevenir cualquier vulnerabilidad. Además, nuestros profesionales están comprometidos con el cumplimiento de todas las regulaciones y normativas de seguridad, garantizando así la integridad y confidencialidad de los datos. Con nosotros, puedes estar seguro de que tu información está en manos seguras y confiables.</p>
      </div>
      <div className="columnas-nosotros__columna">
        <h1 className="columnas-nosotros__titulo">Experiencia</h1>
        <p className="columnas-nosotros__parrafo">Nuestra compañía tiene una seguridad excelente, respaldada por años de experiencia en el mercado de las páginas seguras. A lo largo de nuestra trayectoria, hemos desarrollado y perfeccionado sistemas que garantizan la protección de la información de nuestros clientes. Contamos con un equipo de profesionales expertos que aplican las mejores prácticas y utilizan tecnologías avanzadas para prevenir accesos no autorizados y ciberataques. Nuestro historial comprobado y nuestro compromiso con la seguridad nos permiten ofrecer soluciones confiables y efectivas, asegurando que la información de nuestros clientes esté siempre protegida en un entorno digital cada vez más complejo.</p>
      </div>
      <div className="columnas-nosotros__columna">
        <h1 className="columnas-nosotros__titulo">¿Por qué confiar en nosotros?</h1>
        <p className="columnas-nosotros__parrafo">La seguridad en el frontend y backend de una página web es vital para proteger datos sensibles y mantener la confianza de los usuarios. Utilizamos tecnologías como Python, JavaScript y JAVA, entre otras, para aprovechar sus fortalezas en seguridad y funcionalidad. En el frontend, JavaScript permite una interacción dinámica y segura mediante la validación de entradas y protección contra ataques XSS, complementado con HTTPS. En el backend, Python y Java ofrecen robustez y eficiencia, con Python proporcionando cifrado y gestión segura de contraseñas, y Java ofreciendo sólidas bibliotecas de seguridad y autenticación. Estas tecnologías, combinadas con buenas prácticas, aseguran una experiencia confiable y segura para los usuarios.</p>
      </div>
    </div>
    <div className="columnas-nosotros-celular">
        <h1 className="columnas-nosotros-celular__titulo">Seguridad</h1>
        <p className="columnas-nosotros-celular__parrafo">Nuestra compañía se destaca por su seguridad excelente debido a que nuestras bases de datos son diseñadas y gestionadas por profesionales altamente capacitados. Estos expertos aseguran que cada capa de nuestra infraestructura tecnológica cumple con los más altos estándares de protección y privacidad. Implementamos medidas avanzadas de encriptación, monitoreo constante y actualizaciones periódicas para prevenir cualquier vulnerabilidad. Además, nuestros profesionales están comprometidos con el cumplimiento de todas las regulaciones y normativas de seguridad, garantizando así la integridad y confidencialidad de los datos. Con nosotros, puedes estar seguro de que tu información está en manos seguras y confiables.</p>
        <h1 className="columnas-nosotros-celular__titulo">Experiencia</h1>
        <p className="columnas-nosotros-celular__parrafo">Nuestra compañía tiene una seguridad excelente, respaldada por años de experiencia en el mercado de las páginas seguras. A lo largo de nuestra trayectoria, hemos desarrollado y perfeccionado sistemas que garantizan la protección de la información de nuestros clientes. Contamos con un equipo de profesionales expertos que aplican las mejores prácticas y utilizan tecnologías avanzadas para prevenir accesos no autorizados y ciberataques. Nuestro historial comprobado y nuestro compromiso con la seguridad nos permiten ofrecer soluciones confiables y efectivas, asegurando que la información de nuestros clientes esté siempre protegida en un entorno digital cada vez más complejo.</p>
        <h1 className="columnas-nosotros-celular__titulo">¿Por qué confiar en nosotros?</h1>
        <p className="columnas-nosotros-celular__parrafo">La seguridad en el frontend y backend de una página web es vital para proteger datos sensibles y mantener la confianza de los usuarios. Utilizamos tecnologías como Python, JavaScript y JAVA, entre otras, para aprovechar sus fortalezas en seguridad y funcionalidad. En el frontend, JavaScript permite una interacción dinámica y segura mediante la validación de entradas y protección contra ataques XSS, complementado con HTTPS. En el backend, Python y Java ofrecen robustez y eficiencia, con Python proporcionando cifrado y gestión segura de contraseñas, y Java ofreciendo sólidas bibliotecas de seguridad y autenticación. Estas tecnologías, combinadas con buenas prácticas, aseguran una experiencia confiable y segura para los usuarios.</p>
    </div>
  </main>
  )
}

export default Nosotros