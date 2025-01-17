// Importa las dependencias necesarias desde Firebase
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useParams,useNavigate } from "react-router";

// Define el componente BtnDeleteItem
export const BtnDeleteItem = ({ idItem }) => {
  const {id} = useParams();
  const navigate = useNavigate(); // Obtener el objeto navigate
  ; // Obtener el objeto history
  // Función para eliminar un documento en Firestore
  const handleDeleteClick = async () => {
    try {
      // Obtiene una referencia al documento en la colección
      const docRef = doc(db, ("emuladores"||"roms"), (idItem||id));

      // Elimina el documento
      await deleteDoc(docRef);
      console.log("Documento eliminado con éxito:", idItem);
    } catch (err) {
      console.error("Error al eliminar el documento: ", err);
    } finally {
      console.log(idItem);
      console.log(id);
      
      
      if (idItem == id) {
        navigate("/roms");
        window.location.reload();
        // Redirige a la página de inicio si encuentra el id del documento actual que esta ligado con el itemDetail.
      } else {
        // f5 de la pagina para q tome el cambio
       /*  window.location.reload(); */
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
