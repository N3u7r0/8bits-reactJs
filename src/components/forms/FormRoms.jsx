import { useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase"; // Importar la configuración de Firestore
import "./styles/style.css";

export function FormRoms() {
  const [inputsRom, setInputsRom] = useState({
    titulo: "",
    descripcion: "",
    descripcion_detail: "",
    lanzamiento: "",
    link: "",
    empresa: "",
    fotoPortada: null,
    foto_1: null,
    foto_2: null,
    foto_3: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputsRom((inputsRom) => ({
      ...inputsRom,
      [name]: value || "",
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setInputsRom((inputsRom) => ({
      ...inputsRom,
      [name]: files[0] || null,
    }));
  };

  const uploadFile = async (file, fileName) => {
    const storage = getStorage();
    const storageRef = ref(storage, `roms/${fileName}`);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene acción predeterminada
    const datosTexto = ["titulo", "descripcion", "descripcion_detail", "lanzamiento", "link", "empresa"];
    const camposLlenos = datosTexto.every((campo) => inputsRom[campo] !== "");

    if (!camposLlenos) {
      console.error("Hay campos de texto vacíos en el formulario.");
    } else {
      try {
        const fileFields = ["fotoPortada", "foto_1", "foto_2", "foto_3"];
        const uploadPromises = fileFields.map(async (field) => {
          if (inputsRom[field]) {
            const fileName = `${inputsRom.titulo}_${field}`;
            const downloadURL = await uploadFile(inputsRom[field], fileName);
            return { [field]: downloadURL };
          }
          return { [field]: null };
        });

        const fileURLs = await Promise.all(uploadPromises);
        const updatedInputsRom = { ...inputsRom, ...Object.assign({}, ...fileURLs) };

        const docRef = await addDoc(collection(db, "roms"), updatedInputsRom);
        console.log("Documento añadido con ID: ", docRef.id);
          // f5 de la pagina para q tome el cambio
      
      } catch (err) {
        console.error("Error al añadir el documento: ", err);
      }finally{
        //f5 de la pagina para q tome el cambio
        window.location.reload(); 
      }
    }
  };

  return (
    <article className="contenedor_Forms">
      <h5>Nuevo ROM</h5>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <p>Título</p>
            <input
              name="titulo"
              type="text"
              placeholder="Título del juego."
              value={inputsRom.titulo || ""}
              onChange={handleChange}
            />
          </li>
          <li>
            <p>Descripción</p>
            <input
              name="descripcion"
              type="text"
              placeholder="Descripción de la card del juego."
              value={inputsRom.descripcion || ""}
              onChange={handleChange}
            />
          </li>
          <li>
            <p>Descripción extendida</p>
            <input
              name="descripcion_detail"
              type="text"
              placeholder="Descripción extendida del juego."
              value={inputsRom.descripcion_detail || ""}
              onChange={handleChange}
            />
          </li>
          <li>
            <p>Año de lanzamiento</p>
            <input
              name="lanzamiento"
              type="text"
              placeholder="Año de lanzamiento del juego."
              value={inputsRom.lanzamiento || ""}
              onChange={handleChange}
            />
          </li>
          <li>
            <p>Empresa</p>
            <input
              name="empresa"
              type="text"
              placeholder="Fabricante del juego."
              value={inputsRom.empresa || ""}
              onChange={handleChange}
            />
          </li>
          <li>
            <p>Link</p>
            <input
              name="link"
              type="text"
              placeholder="Link de descarga."
              value={inputsRom.link || ""}
              onChange={handleChange}
            />
          </li>
          <li>
            <p>Foto portada</p>
            <div className="contenedorFotosForms">
              <input name="fotoPortada" type="file" onChange={handleFileChange} />
            </div>
          </li>
          <li>
            <p>Fotos de gameplays</p>
            <div className="contenedorFotosForms">
              <input name="foto_1" type="file" onChange={handleFileChange} />
              <input name="foto_2" type="file" onChange={handleFileChange} />
              <input name="foto_3" type="file" onChange={handleFileChange} />
            </div>
          </li>
        </ul>
        <button type="submit">Subir</button>
      </form>
    </article>
  );
}
