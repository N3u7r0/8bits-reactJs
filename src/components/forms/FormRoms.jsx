import { useState } from "react";
import "./styles/style.css";

export function FormRoms() {
  /* definimos el estado inputs para manejar los valores iniciales. */
  const [inputs, setInputs] = useState({
    nombre: "",
    descripcion: "",
    descripcionExtendida: "",
    año: "",
    empresa: "",
    link: "",
    fotoPortada: null,
    fotoGameplays: [null, null, null],
  });

  /* maneja el cambio de los inputs de texto */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  /* maneja el cambio de los inputs de la foto portada */
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: files[0],
    }));
  };

  /* maneja el cambio de los inputs de las fotos del gameplays */
  const handleGameplayFileChange = (index, e) => {
    const { files } = e.target;
    setInputs((prevInputs) => {
      const updatedGameplays = [...prevInputs.fotoGameplays];
      updatedGameplays[index] = files[0];
      return {
        ...prevInputs,
        fotoGameplays: updatedGameplays,
      };
    });
  };

  /* La función handleSubmit se ejecuta cuando se envía el formulario.
   Previene la acción predeterminada del formulario (recargar la página),
   convierte los valores de los inputs a un array y los imprime en la consola. */
  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataArray = Object.values(inputs);

    // Filtra los campos vacíos
    const filteredData = formDataArray.filter((item) => item !== "");

    if (filteredData.length !== formDataArray.length) {
      console.error("Hay campos vacíos en el formulario.");
      alert("Por favor, complete todos los campos antes de enviar.");
      return;
    }

    console.log("Datos del formulario ROMs:", formDataArray);

    // Resetea los campos del formulario
    setInputs({
      nombre: "",
      descripcion: "",
      descripcionExtendida: "",
      año: "",
      empresa: "",
      link: "",
      fotoPortada: null,
      fotoGameplays: [null, null, null],
    });

    // Aquí puedes llamar a updateRoms si necesitas enviar los datos a Firestore
  };

  return (
    <article className="contenedorForms">
      <h5>Nuevo ROM</h5>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <p>Nombre</p>
            <input
              name="nombre"
              type="text"
              placeholder="Nombre del juego."
              value={inputs.nombre}
              onChange={handleChange}
            />
          </li>
          <li>
            <p>Descripcion</p>
            <input
              name="descripcion"
              type="text"
              placeholder="Descripcion de la card del juego."
              value={inputs.descripcion}
              onChange={handleChange}
            />
          </li>
          <li>
            <p>Descripcion extendida</p>
            <input
              name="descripcionExtendida"
              type="text"
              placeholder="Descripcion extendida del juego."
              value={inputs.descripcionExtendida}
              onChange={handleChange}
            />
          </li>
          <li>
            <p>Año de lanzamiento</p>
            <input
              name="año"
              type="text"
              placeholder="Año de lanzamiento del juego."
              value={inputs.año}
              onChange={handleChange}
            />
          </li>
          <li>
            <p>Empresa</p>
            <input
              name="empresa"
              type="text"
              placeholder="fabricante del juego."
              value={inputs.empresa}
              onChange={handleChange}
            />
          </li>
          <li>
            <p>Link</p>
            <input
              name="link"
              type="text"
              placeholder="Link de descarga."
              value={inputs.link}
              onChange={handleChange}
            />
          </li>
          <li>
            <p>Foto portada</p>
            <div className="contenedorFotosForms">
              <input
                name="fotoPortada"
                type="file"
                onChange={handleFileChange}
              />
            </div>
          </li>
          <li>
            <p>foto gameplays</p>
            <div className="contenedorFotosForms">
              <input
                name="fotoGameplay1"
                type="file"
                onChange={(e) => handleGameplayFileChange(0, e)}
              />
              <input
                name="fotoGameplay2"
                type="file"
                onChange={(e) => handleGameplayFileChange(1, e)}
              />
              <input
                name="fotoGameplay3"
                type="file"
                onChange={(e) => handleGameplayFileChange(2, e)}
              />
            </div>
          </li>
        </ul>
        <button type="submit">Subir</button>
      </form>
    </article>
  );
}
