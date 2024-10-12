import { Link } from "react-router-dom";
import { createRomsFirestore } from  "../../helper/index";

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
          <Link to="/trucos"><button type="button">Trucos</button></Link>
        </li>
        <li>
          <Link to="/gameplays">
            <button type="button">Gameplays</button>
          </Link>
        </li>
        
        <button onClick={() => createRomsFirestore()} type="button" className="btn_1up" >♥♡♡</button>
        
      </ul>
    </nav>
  );
};
