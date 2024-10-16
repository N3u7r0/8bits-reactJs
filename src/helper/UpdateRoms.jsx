import { db } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import data from "../data/roms.json";

// Función para ordenar las claves de un objeto alfabéticamente.( gentileza de copilot)
// esta funcion la utilizo para ordenar las claves de la coleccion de roms
function sortKeys(obj) {
  const sortedKeys = Object.keys(obj).sort((a, b) => a.localeCompare(b));
  const sortedObj = {};
  sortedKeys.forEach((key) => {
    sortedObj[key] = obj[key];
  });
  return sortedObj;
}

export async function UpdateRoms() {
  try {
    // Control de error: si la respuesta no es un array.
    if (!Array.isArray(data)) {
      console.Error("La respuesta del JSON no es un array.");
    }

    // Referencia a la colección en Firestore
    const romsCollection = collection(db, "roms");

    // Obtener los documentos
    const romsSnapshot = await getDocs(romsCollection);

    // Extraer los datos en romsList para compararlos con la data local y ordenar las claves
    const romsList = romsSnapshot.docs.map((doc) => {
      const romData = doc.data();
      // Eliminar la fecha de creación que carga por defecto firesbase
      delete romData.createdAt;
      return sortKeys(romData);
    });

    // Ordenano las claves de data también
    const sortedData = data.map(sortKeys);

    // Ordenar los arrays por el campo 'titulo'
    const sortedRomsList = romsList.sort((a, b) =>
      a.titulo.localeCompare(b.titulo)
    );
    sortedData.sort((a, b) => a.titulo.localeCompare(b.titulo));

    // Función de comparación. es para comparar  los dos arrays de objetos, para que tengan la misma longitud y contenido
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
    // utilizo la funcion creada para comparar los dos arrays, si la comparacion es identica da false.
    const isDataEqual = deepEqual(sortedData, sortedRomsList);

    if (isDataEqual) {
      console.log("La colección no se agregó porque es igual a roms guardados");
    } else {
      // Añadir los nuevos productos a Firestore
      const addPromises = data.map((rom) => {
        delete rom.id;
        return addDoc(romsCollection, {
          ...rom,
        });
      });

      // Espera a que todas las promesas sean cumplidas.
      await Promise.all(addPromises);
    }
  } catch (err) {
    console.error("Error al obtener o almacenar productos:", err);
  }

  // Esta función la llamamos con el botón redondo.
}
