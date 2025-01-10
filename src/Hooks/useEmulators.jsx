import { useEffect, useRef, useContext } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";
import { DataContext } from "../components/context/DataContext";

export const useEmulators = () => {
   const { emuladores, setEmuladores } = useContext(DataContext);
 
  const prevEmuladoresRef = useRef([]);

  const comparadorEmuladores = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
      return false;
    } else {
      for (let i = 0; i < arr1.length; i++) {
        if (
          arr1[i].id !== arr2[i].id ||
          JSON.stringify(arr1[i]) !== JSON.stringify(arr2[i])
        ) {
          return false;
        }
      }
      return true;
    }
  };

  useEffect(() => {
    // Comprobar si los datos existen en sessionStorage.
    const storedEmuladores = sessionStorage.getItem("emuladores");
    if (storedEmuladores) {
      const parsedEmuladores = JSON.parse(storedEmuladores);
      setEmuladores(parsedEmuladores);
      prevEmuladoresRef.current = parsedEmuladores;
      console.log("No hay llamada!!! Datos cargados desde sessionStorage.");
      return; // No se hace la llamada a Firebase si los datos están en sessionStorage.
    }

    // Aquí es donde se hace la llamada y le digo a Firebase que me traiga la colección de emuladores.
    const emuladoresCollection = collection(db, "emuladores");

    getDocs(emuladoresCollection)
      .then((snapshot) => {
        const newEmuladores = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        if (!comparadorEmuladores(newEmuladores, prevEmuladoresRef.current)) {
          setEmuladores(newEmuladores);
          prevEmuladoresRef.current = newEmuladores;
          console.log("Llamada a Firebase realizada y datos actualizados.");
          // Guardar los datos en sessionStorage.
          sessionStorage.setItem("emuladores", JSON.stringify(newEmuladores));
        }
      })
      .catch((err) => console.log(err));
  }, []); // El array de dependencias vacío asegura que el efecto se ejecute solo una vez.

  return { emuladores };
};
