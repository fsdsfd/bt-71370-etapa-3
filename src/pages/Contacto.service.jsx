import Swal from "sweetalert2";

export const contactoAlert = (cb) =>{
    Swal.fire({
        title: "Gracias por contactarnos!",
        text: "Te contactaremos a la brevedad.",
        icon: "success"
      });
}