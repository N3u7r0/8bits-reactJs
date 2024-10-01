import { Routes, Route } from "react-router-dom";
import { Home, Emuladores, Gameplays, Romms, Trucos } from "../pages";

export const RouterMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/roms" element={<Romms />} />
      <Route path="/emuladores" element={<Emuladores />} />
      <Route path="/trucos" element={<Trucos />} />
      <Route path="/gameplays" element={<Gameplays />} />
    </Routes>
  );
};
