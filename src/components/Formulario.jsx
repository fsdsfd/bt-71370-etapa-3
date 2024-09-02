import { useContext, useEffect, useState } from "react";
import ProductosContext from "../contexts/ProductosContext";
import "./Formulario.scss";
const Formulario = () => {
  const {
    agregarProducto,
    productoAEditar,
    setProductoAEditar,
    editarProducto
  } = useContext(ProductosContext);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Enviando información");
      if (form.id === null) {
        console.log('creando un producto')

        await agregarProducto(form);
      } else {
        console.log('actualizando producto')

       await editarProducto(form);
      }
      handleReset();
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
      <small data-error="nombre-error" className="form-alta__smalls"></small>
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
      <small data-error="precio-error" className="form-alta__smalls"></small>

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
      <small
        data-error="envio-error"
        className="form-alta__smalls"
      ></small>

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
