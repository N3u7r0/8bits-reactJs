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
              <h5></h5>
              <h3>{rom.titulo}</h3>
            </li>
            <li>
              <img className="img-card" src={rom.foto} alt={rom.fotoAlt} />
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
