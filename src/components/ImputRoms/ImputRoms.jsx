import Swal from "sweetalert2";

export const ImputRoms = () => {
  async function swalInput() {
    const inputOptions = new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          Emuladores: "Emulador",
          ROMs: "rom",
        });
      });
    });

    const { value: selector } = await Swal.fire({
     
      toast: true,
      position: "top-end",
      text : "Que dato queres subir?",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonText: "Subir",
      input: "radio",

      inputOptions,
      inputValidator: (value) => {
        if (!value) {
          return "No seleccionaste ningun tipo de archivo archivo";
        }
      },
    });

    if (selector) {
      Swal.fire({
        toast: true,
        position: "top-end",
        html: `Selecionaste: ${selector}`,
      });
    }
  }
  swalInput();
  return <></>;
};
