import { Link } from "react-router-dom";
import { ImputRoms } from "../ImputRoms/ImputRoms";

import "./styles/style.css";

export const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <h1>8-bits</h1>
      </Link>

      <ul>
        <li>
          <Link to="/roms">
            <button type="button">ROMs</button>
          </Link>
        </li>
        <li>
          <Link to="/emuladores">
            <button type="button">Emuladores</button>
          </Link>
        </li>
        <li>
          <Link to="/trucos">
            <button type="button">Trucos</button>
          </Link>
        </li>
        {/* este btn va afuera de la ul para que no rompa el diseño de la navbar */}
        <button onClick={() => ImputRoms()} type="button" className="btn_1up">
          ♥♡♡
        </button>
      </ul>
    </nav>
  );
};




