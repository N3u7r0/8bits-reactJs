import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEmulators } from "../Hooks";
import { EmulatorListContainer } from "../components";


export const Emuladores = () => {
  const { emuladores } = useEmulators();
  const [emuladoresFiltrados, setEmuladoresFiltrados] = useState([]);
  const { consola } = useParams("");

  useEffect(() => {
    let filteredEmulators = emuladores;

    switch (consola) {
      case "nes":
        filteredEmulators = emuladores.filter((emulador) => emulador.consola === "nes");
        setEmuladoresFiltrados(filteredEmulators);
        break;
      case "sega":
        filteredEmulators = emuladores.filter((emulador) => emulador.consola === "sega");
        setEmuladoresFiltrados(filteredEmulators);
        break;
      case "neogeo":
        filteredEmulators = emuladores.filter((emulador) => emulador.consola === "neogeo");
        setEmuladoresFiltrados(filteredEmulators);
        break;
      case "psx":
        filteredEmulators = emuladores.filter((emulador) => emulador.consola === "psx");
        setEmuladoresFiltrados(filteredEmulators);
        break;
      default:
        filteredEmulators = emuladores;
        break;
    }
    setEmuladoresFiltrados(filteredEmulators);
  }, [emuladores]);

  return (
    <>
      <h2 className="tituloPrincipal">Emuladores</h2>
      <div className="container-global">
        <nav className="nav-itemListContainer">
          <h6>Emuladores:</h6>
          <ul>
            <li>
              <Link to="/emuladores">
                <button type="reset">Todos</button>
              </Link>
            </li>
            <li>
              <Link to="/emuladores/sega">
                <button type="button">Sega</button>
              </Link>
            </li>
            <li>
              <Link to="/emuladores/nes">
                <button type="button">Nes</button>
              </Link>
            </li>
            <li>
              <Link to="/emuladores/neogeo">
                <button type="button">Neo-Geo</button>
              </Link>
            </li>
            <li>
              <Link to="/emuladores/psx">
                <button type="button">Psx</button>
              </Link>
            </li>
          </ul>
        </nav>
        <EmulatorListContainer emuladoresFiltrados={emuladoresFiltrados} /> 
      </div>
    </>
  );
};