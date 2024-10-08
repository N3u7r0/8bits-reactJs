import { useEffect, useState } from "react";
import{doc,getDoc}  from "firebase/firestore";
import { db } from "../firebase";

export const useRomsById = (id) => {
  const [rom, setRom] = useState([]);
  console.log(rom);
  

  useEffect(() => {
    // aca es donde se hace la llamada y le digo q de mi base de datos de firebase me traiga una coleccion de roms.
    const romsCollection = doc(db, "roms",id);
    //esto es una promesa como axios o fech. le pasamos la coleccion de roms que guardamos en romsCollection.
    getDoc(romsCollection)
      .then((snapshot) => {
        setRom(
          ({id:snapshot.id, ...snapshot.data()})
        );
      })
      .catch((err) => console.log(err))
      .finally(/* aca creo un un if para que se ejecute el spin de loading.!! */);
  }, []);
   
  return { rom };
};
