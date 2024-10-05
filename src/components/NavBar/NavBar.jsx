import { Link } from "react-router-dom";
//import { createRomsFirestore } from  "../../helper/index";

import "./styles/style.css";

export const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <h1>8-bits</h1>
      </Link>
      <ul>
        <li>
          <Link to="/"><p>Home</p></Link>
        </li>
        <li>
          <Link to="/roms">ROMs</Link>
        </li>
        <li>
          <Link to="/emuladores">Emuladores</Link>
        </li>
        <li>
          <Link to="/trucos">Trucos</Link>
        </li>
        <li>
          <Link to="/gameplays">Gameplays</Link>
        </li>
        
      </ul>

      {/* <button onClick={() => createRomsFirestore()}>subir a firestone</button> */}
    </nav>
  );
};
