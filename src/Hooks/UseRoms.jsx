import { useEffect, useContext } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";
import { DataContext } from "../components/context/DataContext";

// Comentamos con camelcase porque es un custom hook.
export const useRoms = () => {
  const { roms, setRoms } = useContext(DataContext);

  useEffect(() => {
    // Comprobar si los datos existen en DataContext.
    const contextRoms = roms;
    if (contextRoms.length > 0) {
      const parseRoms = contextRoms;
      setRoms(parseRoms);
      console.log("No hay llamada!!! Datos cargados desde sessionStorage.");
      return; // No se hace la llamada a Firebase si los datos están el dataContext.
    }
    // Aquí es donde se hace la llamada y le digo a Firebase que me traiga la colección de roms.
    const romsCollection = collection(db, "roms");

    getDocs(romsCollection)
      .then((snapshot) => {
        const newRoms = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRoms(newRoms);
        console.log("Llamada a Firebase realizada y datos actualizados.");
        // Guardar los datos en sessionStorage.
        sessionStorage.setItem("roms", JSON.stringify(newRoms));
      })
      .catch((err) => console.log(err))
      .finally(/* Aquí podrías agregar lógica adicional si lo necesitas. */);
  }, [setRoms]); // El array de dependencias vacío asegura que el efecto se ejecute solo una vez.

  return { roms };
};
