import Swal from "sweetalert2";

export const formularioSuccess = (accion, cb) =>{
    Swal.fire({
        title: `El producto se ha ${accion} con exito!`,
        icon: "success"
      });
}