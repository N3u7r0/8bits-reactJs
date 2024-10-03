import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";

//comentamos con camelcase por que es un custom hook.
export const UseRoms = () => {
  const [roms, setRoms] = useState([]);
console.log(roms);
  console.log("hola");
  

  //llamo a la base de datos en un useEffect, para traer la coleccion de roms.
  useEffect(() => {
    // aca es donde se hace la llamada y le digo q de mi base de datos de firebase me traiga una coleccion de roms.
    const romsCollection = collection(db, "roms");

    //esto es una promesa como axios o fech. le pasamos la coleccion de roms que guardamos en romsCollection.
    getDocs(romsCollection)
      .then((snapshot) => {
       
        setRoms(
            //guardo la coleccion de roms en snapshot. Se llama de esta manera por que entra encriptado por defecto desde firebase.
            //esto siempre se llama snapshot. y se pide de la misma manera.
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      })
      .catch((err) => console.log(err))
      .finally(/* aca creo un un if para que se ejecute el spin de loading.!! */);
  }, []);
  
  return   ({roms});
   
};
