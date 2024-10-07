import { ItemListContainer } from "../components";
import { Link } from "react-router-dom";
import "./styles/style.css";
import { UseRoms } from "../Hooks";

export const Roms = () => {
  const { roms } = UseRoms();
  return (
    <>
      <h2 className="tituloPrincipal">Roms</h2>
      <div className="container-global">
        <nav className="nav-itemListContainer">
          <h6>roms:</h6>
          <ul>
            <li>
              <Link to="/roms">
                <button type="reset">Todos</button>
              </Link>
            </li>
            <li>
              <Link to="/roms/sega">
                <button type="button">Sega</button>
              </Link>
            </li>
            <li>
              <Link to="/roms/nes">
                <button type="button">Nes</button>
              </Link>
            </li>
            <li>
              <Link to="/roms/neogeo">
                <button type="button">Neo-Geo</button>
              </Link>
            </li>
            <li>
              <Link to="/roms/psx">
                <button type="button">Psx</button>
              </Link>
            </li>
          </ul>
        </nav>

        {/* renderizo el itemlistcontainer con la coleccion de roms en forma de prop para que el componente sea reutilizable. */}
        <ItemListContainer roms={roms} />
      </div>
    </>
  );
};
