import { Spin } from "../Spin";
import "./style/style.css";
import { Link } from "react-router-dom";

export const ItemListContainer = ({ romsFiltrados }) => {
  return romsFiltrados?.length === 0 ? (
    <Spin />
  ) : (
    <>
      <section className="contenedor-cards">
        {romsFiltrados.map((rom) => (
          <article key={rom.id} className="card">
            <ul>
              <li>
                <h3>{rom.titulo}</h3>
              </li>
              <li>
               {/* adentro del espin toma la url de la imagen y el alt  q paso como prop, para que no se rompa si no hay imagen */}
                <Spin src={rom.fotoPortada} alt={rom.fotoAlt} />
              </li>
              <li>
                <p>{rom.descripcion}</p>
              </li>
              <li>
                <Link to={`/rom/${rom.id}`}>
                  <button type="button" className="btn">
                    ver más
                  </button>
                </Link>
              </li>
            </ul>
          </article>
        ))}
      </section>
    </>
  );
};


