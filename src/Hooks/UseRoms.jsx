import { useEffect, useContext } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";
import { DataContext } from "../components/context/DataContext";

// Comentamos con camelcase porque es un custom hook.
export const useRoms = () => {
  const { roms, setRoms } = useContext(DataContext);

  useEffect(() => {
    // Comprueno si los datos existen en DataContext.
    const contextRoms = roms;
    if (contextRoms.length > 0) {
      const parseRoms = contextRoms;
      setRoms(parseRoms);
      console.log("No hay llamada!!! Datos cargados desde sessionStorage.");
      return; // No se hace la llamada a Firebase si los datos están el dataContext.
    }

    // aca le digo a Firebase que me traiga la colección de roms.
    const romsCollection = collection(db, "roms");

    getDocs(romsCollection)
      .then((snapshot) => {
        const newRoms = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // Actualizo el estado de roms.
        setRoms(newRoms);
        console.log("Llamada a Firebase realizada y datos actualizados en context.");
      })
      .catch((err) => console.log(err));
  }, [setRoms]);

  return { roms };
};
