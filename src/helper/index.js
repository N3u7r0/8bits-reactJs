import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

import  data from "../data/roms.json";

export async function createRomsFirestore(collectionName) {
  try {
    // 1. Obtener los productos de la API
   
    const fetchedProducts = data;

    if (!Array.isArray(fetchedProducts)) {
      throw new Error("La respuesta de la API no es un array.");
    }

    // 2. Referencia a la colección en Firestore
    const productsCollection = collection(db, "roms");

    // 3. Añadir los nuevos productos a Firestore
    const addPromises = fetchedProducts.map((product) => {
      delete product.id;
      addDoc(productsCollection, {
        ...product,
        createdAt: new Date(),
      });
    });

    await Promise.all(addPromises);

    console.log(`${fetchedProducts.length} productos añadidos a Firestore.`);
  } catch (err) {
    console.error("Error al obtener o almacenar productos:", err);
  }
}

//esta funcion la podemos llamar con un btn para pushear los roms del json a firestore.