import { useEffect, useState } from "react";
import dataRoms from "../data/roms.json";

export const UseRoms = () => {
   //const [roms, setRoms] = useState([]); 

  useEffect(() => {
    // pogo los roms entre corchetes para que el dato llegue desesetructurado
    const { roms } = dataRoms;

    roms.map((rom) => {
      console.log(rom);
    });

  }, []);

  return
};
