import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";

export const UseRoms = () => {
  const [roms, setRoms] = useState([]);

  useEffect(() => {
    // aca es donde se hace la llamada y le digo q de mi base de datos de firebase me traiga una coleccion de roms.
    const romsCollection = collection(db, "roms");
    //esto es una promesa como axios o fech. le pasamos la coleccion de roms que guardamos en romsCollection.
    getDocs(romsCollection)
      .then((snapshot) => {
        setRoms(
          //aca lo que hago es q me traiga todos los docs de la coleccion de roms. se llama de esta manera por que entra encriptado por defecto desde firebase.
          //esto siempre se llama snapshot. y se pide de la misma manera.
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      })
      .catch((err) => console.log(err))
      .finally();
  }, []);

  return { roms };
};
