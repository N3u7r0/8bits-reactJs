import { Spin } from "../Spin";
import "./style/style.css";
import { Link } from "react-router-dom";

export const ItemListContainer = ({ romsFiltrados }) => {
  return romsFiltrados?.length === 0 ? (
    <Spin />
  ) : (
    <>
      <section className="div-flex">
        <div className="contenedor-ul">

          {romsFiltrados.map((rom) => (
            <article key={rom.id} className="card">
              <ul>
                <li>
                  <h3>{rom.titulo}</h3>
                </li>
                <li>
                  <img className="img-card" src={rom.fotoPortada} alt={rom.fotoAlt} />
                </li>
                <li>
                  <p>{rom.descripcion}</p>
                </li>
                <li>
                  <Link to={`/rom/${rom.id} `}>
                    <button type="button" className="btn">
                      ver mas
                    </button>
                  </Link>
                </li>
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};
