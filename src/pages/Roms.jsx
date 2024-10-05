import { ItemListContainer } from "../components";
import { UseRoms } from "../Hooks";
import "./styles/style.css";

export const Roms = () => {
  const { roms } = UseRoms();

  return (
    <>
      <h2 className="tituloPrincipal">Roms</h2>
      <div className="container-global">
        {/* renderizo el itemlistcontainer con la coleccion de roms en forma de prop para que el componente sea reutilizable. */}
        <ItemListContainer roms={roms} />
      </div>
    </>
  );
};
