// Importa las dependencias necesarias desde Firebase
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useParams, useNavigate } from "react-router";

// Define el componente BtnDeleteItem
export const BtnDeleteItem = ({ idItem }) => {
  const { id } = useParams();
  const navigate = useNavigate(); // Obtener el objeto navigate

  // Función para eliminar un documento en Firestore
  const handleDeleteClick = async () => {
    // Obtiene las referencias de los documentos de la coleccion.
    const romRef = doc(db, "roms", idItem || id);
    const emuladorRef = doc(db, "emuladores", idItem || id);
    try {
      if (romRef) {
        // Elimina el documento
        await deleteDoc(romRef);
        console.log("Documento eliminado con éxito:", idItem);
      }

      if (emuladorRef) {
        // Elimina el documento
        await deleteDoc(emuladorRef);
        console.log("Documento eliminado con éxito:", idItem);
      }
    } catch (err) {
      console.error("Error al eliminar el documento: ", err);
    } finally {
      console.log(idItem);
      console.log(id);
      // Redirige a la página de inicio si encuentra el id del la prop es igual a la id del parametro de url, para que regrese atras y no quede en la pg de detail en el ItemDetail
      if (idItem == id) {
        navigate("/roms");
        window.location.reload();
      } else {
        // f5 de la pagina para q tome el cambio
        window.location.reload();
      }
    }
  };

  return (
    <button className="btnDeleteItem" onClick={() => handleDeleteClick(idItem)}>
      <img src="" alt="" />
      Eliminar
    </button>
  );
};
