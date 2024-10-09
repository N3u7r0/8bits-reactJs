import { Spin } from "../Spin";
import "./style/index.css";

export const ItemDetailContainer = ({ rom }) => {
  return rom?.length === 0 ? (
    <Spin />
  ) : (
    <div className="div-flex">
      <div className="contenedor-ul">
        <div key={rom.id} className="cardDetail">
          <ul>
            <li>
              <h3>{rom.titulo}</h3>
            </li>
            <li>
              <div className="tv">
                <div className="tv-flex">
                  <div className="tv-parlante-a"></div>

                  <img className="img-card" src={rom.foto} alt={rom.fotoAlt} />
                  <div className="tv-parlante-b"></div>
                </div>
                <div className="botonera">
                 Ooooo
                </div>
              </div>
            </li>
            <li>
              <p>{rom.descripcion}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
