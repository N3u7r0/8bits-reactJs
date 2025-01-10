import { db } from "../../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import "./styles/style.css";

// Función para ordenar las claves de un objeto alfabéticamente... gentileza de copilot
function sortKeys(obj) {
  const sortedKeys = Object.keys(obj).sort((a, b) => a.localeCompare(b));
  const sortedObj = {};
  sortedKeys.forEach((key) => {
    sortedObj[key] = obj[key];
  });
  return sortedObj;
}

export function UpdateEmuladores() {
  const { emuladores} = useContext(DataContext);
/* dentro de este componente esta para filtrar comparar y subir a firesbase... se esta utilizando solo lo que se quiere usar.... en proceso */
  const updateEmuladores = async () => {
    try {
      // Control de error: si la respuesta no es un array.
      if (!Array.isArray(emuladores)) {
        console.error("La respuesta del JSON no es un array.");
        return;
      }

      // Referencia a la colección en Firestore
      const emuladoresCollection = collection(db, "emuladores");

      // Obtener los documentos
      const emuladoresSnapshot = await getDocs(emuladoresCollection);

      // Extraer los datos en emuladoresListFireStore para compararlos con la data local y ordenar las claves
      const emuladoresListFireStore = emuladoresSnapshot.docs.map((doc) => {
        const romData = doc.data();
        // Eliminar la fecha de creación que carga por defecto firesbase
        const { createdAt, ...rest } = romData;
        return sortKeys(rest);
      });

      // Ordenano las claves de data también
      const sortedData = emuladores.map(sortKeys);

      // Ordenar los arrays por el campo 'titulo'
      const sortedemuladoresListFireStore = emuladoresListFireStore.sort((a, b) =>
        a.titulo.localeCompare(b.titulo)
      );
      sortedData.sort((a, b) => a.titulo.localeCompare(b.titulo));

      // Función de comparación.
      function deepEqual(array1, array2) {
        if (array1.length !== array2.length) {
          return false;
        }
        for (let i = 0; i < array1.length; i++) {
          const obj1 = array1[i];
          const obj2 = array2[i];
          if (JSON.stringify(obj1) !== JSON.stringify(obj2)) {
            return false;
          }
        }
        return true;
      }

      const isDataEqual = deepEqual(sortedData, sortedemuladoresListFireStore);

      if (isDataEqual) {
        console.log(
          "La colección no se agregó porque es igual a emuladores guardados"
        );
      } else {
        // Añadir los nuevos productos a Firestore
        const addPromises = emuladores.map((rom) => {
          const { id, ...rest } = rom; // eliminar id
          return addDoc(emuladoresCollection, rest);
        });

        // Espera a que todas las promesas sean cumplidas.
        await Promise.all(addPromises);
      }
    } catch (err) {
      console.error("Error al obtener o almacenar productos:", err);
    }
  };
  return (
   <>
   
   
   </>
  );
}
