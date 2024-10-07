import { Routes, Route } from "react-router-dom";
import { Home, Emuladores, Gameplays, Roms, Trucos } from "../pages";
import { ItemListContainer,ItemDetailContainer } from "../components";


export const RouterMain = () => {

  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/roms" element={<Roms />} />
      <Route path="/emuladores" element={<Emuladores />} />
      <Route path="/trucos" element={<Trucos />} />
      <Route path="/gameplays" element={<Gameplays />} />
      <Route path="/roms/:consola" element={<ItemListContainer  />} />
      <Route path="/roms/:id" element={<ItemDetailContainer  />} />
    </Routes>
  );
};