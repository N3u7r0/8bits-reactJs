import { Link } from "react-router-dom";

import "./styles/style.css";

export const NavBar = () => {
  return (
    <div className="nav-bar">
      <Link to="/">
        <h1>8-bits</h1>
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/roms">Romms</Link>
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
    </div>
  );
};
