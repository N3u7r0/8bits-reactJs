import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";

export const UseRomsById = () => {
  const [romsID, setRomsID] = useState([]);

  useEffect(() => {
    // aca es donde se hace la llamada y le digo q de mi base de datos de firebase me traiga una coleccion de roms.
    const romsCollection = collection(db, "roms");
    //esto es una promesa como axios o fech. le pasamos la coleccion de roms que guardamos en romsCollection.
    getDocs(romsCollection)
      .then((snapshot) => {
        setRomsID(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      })
      .catch((err) => console.log(err))
      .finally(/* aca creo un un if para que se ejecute el spin de loading.!! */);
  }, []);
   
  return { romsID };
};
