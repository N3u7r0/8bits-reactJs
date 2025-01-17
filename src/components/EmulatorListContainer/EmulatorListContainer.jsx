import { BtnDeleteItem } from "../BtnDeleteItem/BtnDeleteItem";
import { Spin } from "../Spin";
import "./style/style.css";

export const EmulatorListContainer = ({ emuladoresFiltrados }) => {
  return emuladoresFiltrados?.length === 0 ? (
    <Spin />
  ) : (
    <>
      <section className="contenedor-cards">
        {emuladoresFiltrados.map((emulador) => (
          <article key={emulador.id} className="card card-emuladores">
            <ul>
              <li>
                <h3>{emulador.titulo}</h3>
              </li>
              <li>
              
                {/* adentro del espin toma la url de la imagen y el alt  q paso como prop, para que no se rompa si no hay imagen */}
                <Spin src={emulador.foto}  alt={emulador.titulo} />
              </li>
              <li className="contenedor-texto-emuladores">
                <p>{emulador.descripcion}</p>

                <p> consola: {emulador.consola}</p>

                <p>plataforma: {emulador.platafoma}</p>
              </li>

              <li>
                <a type="button" className="btn" href={emulador.link}>
                  link
                </a>
                <BtnDeleteItem idItem ={emulador.id}/> 
              </li>
            </ul>
          </article>
        ))}
      </section>
    </>
  );
};
