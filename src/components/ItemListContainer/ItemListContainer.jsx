import { Spin } from "../Spin";
import "./style/style.css";

export const ItemListContainer = ({ roms }) => {
  return roms?.length === 0 ? (
    <Spin />
  ) : (
    <>
      <div className="div-flex">
        <div className="contenedor-ul">
          {roms.map((rom) => (
            <ul key={rom.id} className="card">
              <li>
                <h3>{rom.titulo}</h3>
              </li>
              <li>
                <p>{rom.descripcion}</p>
              </li>
              <li>
                <img src={rom.foto} alt={rom.fotoAlt} />
              </li>
              <li>
                <p>{rom.lanzamiento}</p>
              </li>
              <ul>
                <button type="button" className="btn">Link</button>
              </ul>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};
