import Formulario from "../components/Formulario";
import Tabla from "../components/Tabla";
import useTitulo from "../hooks/useTitulo";



const Alta = () => {
  useTitulo("Alta");
  return (
    <main className="main-alta">
      <div className="contenedor-form-alta">
        <Formulario />
        <Tabla />
      </div>
    </main>
  );
};

export default Alta;
