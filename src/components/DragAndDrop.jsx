import React, { useRef, useState } from 'react'

const DragAndDrop = () => {
    const [foto, setFoto] = useState('') // La imagen que me llegue del servidor
    const [srcImagen, setSrcImagen] = useState('') // Me va gestionar la imagen que carguen en el area de drop
    const refDiv = useRef(null) // Es como un querySelector
    const dragDrop = ['dragenter', 'dragover', 'dragleave', 'drop'] // Eventos
   dragDrop.forEach(eventName => {
      document.body.addEventListener(eventName, e => e.preventDefault())
    })
    const handleDrop = (e) => {
      console.log(e.dataTranfer)
      const dataTransf = e.dataTransfer
      const files = dataTransf.files
      handleFiles(files)
    }
  
    const handleFiles = files => {
      
      console.log('recibí todos los archivo', files)
  
      const file = files[0]
      previewFile(file)
      uploadFile(file)
    }
  
    const uploadFile = async (file) => {
      console.log('Subiendo imagen', file)
      const url = 'http://localhost:8080/api/v1/uploads' // Variable de entorno
      console.log(url)
  
      // API WEB -> DOM
      const formData = new FormData() // formData, tiene varios metodos.
      console.log(formData)
  
      formData.append('foto', file) // Creo la clave/valor -> foto: File
  
      const options = {
        method: 'POST',
        body: formData // express.json() express.urlencoded() --> Multer -> Puede gestionar data binaria
      }
  
      try {
        const res = await fetch(url, options)
  
        if (!res.ok) {
          throw new Error('No se pudo subir la imagen')
        }
  
        const imagenUp = await res.json()
  
        console.log(imagenUp)
  
        setFoto(imagenUp.urlCompleta)
        
      } catch (error) {
        console.error('[uploadFile]', error)
      }
  
    }
  
   const previewFile = (file) => {
      const reader = new FileReader() 
      reader.readAsDataURL(file) 
  
      reader.addEventListener('loadend', () => {
        setSrcImagen(reader.result) // URL
      })
  
    }
  
    const handleChange = (e) => {
      //console.log(e)
      // https://developer.mozilla.org/en-US/docs/Web/API/File
      const files = e.target.files
      handleFiles(files)
    }
  return (
    <>
    <div className="drop-area" onDrop={handleDrop} > 
      <p>Subir imagen o con <b>drag and drop</b> dentro del area</p>

      <input type="file" id="lbl-foto" accept="image/*" onChange={handleChange}/>
      <label htmlFor="lbl-foto" className="drop-area-button">
        Cargar Imagen
      </label>

      <div className="drop-area-image">
        <img src={srcImagen} alt="" />
      </div>
    </div>
    </>
  )
}

export default DragAndDrop