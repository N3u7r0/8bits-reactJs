import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";


export const useEmulators = () => {
  const [emuladores, setEmuladores] = useState([]);
 
  
 
  useEffect(() => {
    // aca es donde se hace la llamada y le digo a de mi base de datos de firebase q me traiga la coleccion de emuladores.
    const romsCollection = collection(db, "emuladores");
    
    getDocs(romsCollection)
      .then((snapshot) => {
        setEmuladores(
          
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      })
      .catch((err) => console.log(err));
  }, []);

  return { emuladores };
};
