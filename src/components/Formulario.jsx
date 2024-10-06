import { useContext, useEffect, useRef, useState } from "react";
import ProductosContext from "../contexts/ProductosContext";
import "./Formulario.scss";
import DragAndDrop from "./DragAndDrop.jsx";
import { formularioSuccess } from "./FormularioSuccess.service.jsx";
const Formulario = () => {
  const {
    agregarProducto,
    productoAEditar,
    setProductoAEditar,
    editarProducto
  } = useContext(ProductosContext);
  const smallRefNombre = useRef(null)
  const smallRefDescripcion = useRef(null)
  const smallRefPrecio = useRef(null)

  const formInicial = {
    id: null,
    nombre: "",
    foto: "",
    descripcion: "",
    precio: "",
    envio: false
  };
  useEffect(() => {
    console.log("cambió el estado del producto");
    productoAEditar ? setForm(productoAEditar) : setForm(formInicial);
  }, [productoAEditar]);
  const [form, setForm] = useState(formInicial);

  const handleChange = (e) => {
    const {type, name, checked,value} = e.target
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value
    })
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Enviando información");
      const validateTotal = validateForm(form.nombre, smallRefNombre) === '' && validateForm(form.descripcion, smallRefDescripcion) === ''  && validateForm(form.precio, smallRefPrecio) === ''
      if (!validateTotal) {
        throw new Error('No se puede enviar el form por falta de datos')
      }else{
        if (form.id === null) {
          console.log('creando un producto')
          console.log(form)
          await agregarProducto(form);
          formularioSuccess('creado')
        } else {
          console.log('actualizando producto')
          if (form.foto === true) {
            await editarProducto(form);
            formularioSuccess('editado')
          }else{
            console.log('No se puede editar la foto')
          }
        }
        handleReset();
      }

    } catch (error) {
      console.log('handleSubmit', error)
    }

  };


  const handleReset = () => {
    console.log('handleReset')
    setForm(formInicial);
    setProductoAEditar(null);

  };
  return (
    <div className="form-container">
    <form id="form" className="form-alta" onSubmit={handleSubmit}>
      <label className="form-alta__lbl" htmlFor="lbl-nombre">
        Titulo:
      </label>
      <small data-error="nombre-error" className="form-alta__smalls" ref={smallRefNombre}></small>
      <input
        type="text"
        name="nombre"
        id="lbl-nombre"
        value={form.nombre}
        className="form-alta__input"
        onChange={handleChange}
      />
      <label className="form-alta__lbl" htmlFor="lbl-descripcion">
        Descripcion:
      </label>
      <small
        data-error="descripcion-error"
        className="form-alta__smalls"
        ref={smallRefDescripcion}
      ></small>

      <input
        type="text"
        name="descripcion"
        id="lbl-descripcion"
        value={form.descripcion}
        className="form-alta__input"
        onChange={handleChange}
      />
      <label className="form-alta__lbl" htmlFor="lbl-precio">
        Precio:
      </label>
      <small data-error="precio-error" className="form-alta__smalls" ref={smallRefPrecio}></small>

      <input
        type="number"
        name="precio"
        id="lbl-precio"
        value={form.precio}
        className="form-alta__input"
        onChange={handleChange}
      />
      <label className="form-alta__lbl" htmlFor="lbl-envio">
        Envio:
      </label>
      <input
        type="checkbox"
        name="envio"
        id="lbl-envio"
        value={form.envio}
        className="form-alta__input"
        onChange={handleChange}
      />
      <button className="form-alta__boton" type="submit">
        {productoAEditar ? "Editar" : "Enviar"}
      </button>
      <button className="form-alta__boton" onClick={handleReset} type="reset"> 
        Resetear
      </button>
    </form>
    </div>

  );
};

export default Formulario;
