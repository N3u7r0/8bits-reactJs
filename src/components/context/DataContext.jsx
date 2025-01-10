import { createContext, useState } from "react";

export const DataContext = createContext();
//junto todos los estados en el contexto para que cuando salga de un componente a otro no se pierdan los datos.
export const DataProvider = ({ children }) => {
  const [roms, setRoms] = useState([]);
  console.log(roms);

  const [emuladores, setEmuladores] = useState([]);
  console.log(emuladores);

  const [rom, setRom] = useState([]);
  console.log(rom);

  //siempre le pasamos un obj xq es mas facil de trabajar y es practico si se quiere escalar.Manejarlos como objetos podes mandar muchos, como una expresion regular solo uno.
  return (
    <DataContext.Provider
      value={{ roms, setRoms, emuladores, setEmuladores, rom, setRom }}
    >
      {children}
    </DataContext.Provider>
  );
};
