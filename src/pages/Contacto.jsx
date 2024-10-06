import React, {useRef, useState } from 'react'
import './Contacto.scss'
import { contactoAlert } from './Contacto.service.jsx'
const Contacto = () => {
  const smallRefNombre = useRef(null)
  const smallRefEmail = useRef(null)
  const smallRefTextArea = useRef(null)
  const formInicial = {
    nombre : '',
    email: '',
    textarea: ''
  }

  const handleChange = (e) => {
    const {name,value} = e.target
    setForm({
      ...form,
      [name]: value
    })
  };
  const [form, setForm] = useState(formInicial)
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log("Enviando información");
      const validateTotal = validateForm(form.nombre, smallRefNombre) === '' && validateForm(form.email, smallRefEmail) === ''  && validateForm(form.textarea, smallRefTextArea) === ''
      if (!validateTotal) {
        throw new Error('No se puede enviar el form por falta de datos')
      }else{
          console.log('Enviando datos...')
          console.log(form)
          contactoAlert()
      }

    } catch (error) {
      console.log('handleSubmit', error)
    }

  };
  const validateForm = (valor, small)=>{
    if (!valor) {
      small.current.textContent = 'Complete este campo'
      return small.current.textContent
    }else{
      small.current.textContent = ''
      return small.current.textContent
    }
  }
  return (
    <div className='container-contacto'>
    <main className="main-contacto">
    <legend className="main-contacto__legend">Datos personales</legend>
  <div className="form__container">
    <form action="get" className="form-contacto" onSubmit={handleSubmit}>
      <label className="form-contacto__label">
        <p>Nombre:*</p>
        <small data-error="nombre-error" className="form-alta__smalls" ref={smallRefNombre}></small>

        <input type="text" name="nombre" id="Nombre-lbl" className="form-contacto__input" value={form.nombre} onChange={handleChange} />
      </label>

      <label className="form__label">
        <p>Email:*</p>
        <small data-error="email-error" className="form-alta__smalls" ref={smallRefEmail}></small>

        <input type="text" name="email" id="email-lbl" className="form-contacto__input"value={form.email} onChange={handleChange}  />
      </label>

      <label className="form__label" htmlFor="textarea">
        <p>¿Por qué quieres contactarnos?</p>
        <small data-error="textArea-error" className="form-alta__smalls" ref={smallRefTextArea}></small>

      </label>
      <textarea name="textarea" id="textarea" cols="90" rows="10" className="form-contacto__textarea"  value={form.textarea} onChange={handleChange}></textarea>

        <button className="form-contacto__button">Enviar</button>
      </form>
  </div>
</main>
<div className="mapa">
      <h2 className="mapa__h2">Para cualquier consulta</h2>
      <p className="mapa__p">Pueden visitarnos de manera personal a nuestras oficinas en:</p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5232.256321233588!2d-73.98693468416711!3d40.74990995529902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1ses-419!2scl!4v1717529050891!5m2!1ses-419!2scl"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="mapa__iframe">
      </iframe>
    </div>
    </div>
  )
}

export default Contacto