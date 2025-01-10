import { useEffect, useContext } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";
import { DataContext } from "../components/context/DataContext";

export const useEmulators = () => {
  const { emuladores, setEmuladores } = useContext(DataContext);

  useEffect(() => {
    // Comprueno si los datos existen en DataContext.
    const contextEmuladores = emuladores;
    if (contextEmuladores.length > 0) {
      const parseEmuladores = contextEmuladores;
      setEmuladores(parseEmuladores);
      console.log("No hay llamada!!! Datos cargados desde context.");
      return; // No se hace la llamada a Firebase si los datos están el dataContext.
    }

    const emuladoresCollection = collection(db, "emuladores");
    getDocs(emuladoresCollection)
      .then((snapshot) => {
        const newEmuladores = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setEmuladores(newEmuladores);
        console.log("Llamada a Firebase realizada y datos actualizados en context.");
      })
      .catch((err) => console.log(err));
  }, [setEmuladores]);
  return { emuladores };
};
