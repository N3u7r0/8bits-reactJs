import { Spin } from "../Spin";
import "./style/style.css";

export const ItemListContainer = ({ romsFiltrados }) => {
  return romsFiltrados?.length === 0 ? (
    <Spin />
  ) : (
    <>
      <div className="div-flex">
        <div className="contenedor-ul">
          {romsFiltrados.map((rom) => (
            <div key={rom.id} className="card">
              <ul>
                <li>
                  <h3>{rom.titulo}</h3>
                </li>
                <li>
                  <img className="img-card" src={rom.foto} alt={rom.fotoAlt} />
                </li>
                <li>
                  <p>{rom.descripcion}</p>
                </li>
                <li>
                  
                  <button type="button" className="btn">
                    ver mas
                  </button>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
