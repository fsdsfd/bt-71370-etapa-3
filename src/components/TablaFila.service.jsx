import Swal from "sweetalert2";

export const notificacionSweet = (nombre, cb) => {

    Swal.fire({
        title: `¿Estás seguro de que queres eliminar el producto: ${nombre}?`,
        text: "No podrás revertir este cambio.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, adelante!",
        cancelButtonText: "No!",
      }).then((result) => {
        if (result.isConfirmed) {
          cb()
          Swal.fire({
            title: "¡Lo borré!",
            text: "El archivo a sido borrado exitosamente.",
            icon: "success"
          });
        }
      });
}

