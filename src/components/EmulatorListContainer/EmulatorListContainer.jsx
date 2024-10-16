import { Spin } from "../Spin";
import "./style/style.css";

export const EmulatorListContainer = ({ emuladoresFiltrados }) => {
  return emuladoresFiltrados?.length === 0 ? (
    <Spin />
  ) : (
    <>
      <section className="div-flex">
        <div className="contenedor-ul">
          {emuladoresFiltrados.map((emulador) => (
            <article key={emulador.id} className="card">
              <h3>{emulador.titulo}</h3>

              <img
                className="img-card"
                src={emulador.foto}
                alt={emulador.titulo}
              />
              <div className="texto-contenedor">
                <p>
                  <br />
                  {emulador.descripcion}
                  <br />
                  <br />
                  consola: {emulador.consola}
                  <br />
                  <br />
                  plataforma: {emulador.platafoma}{" "}
                </p>
              </div>

              <a type="button" className="btn" href={emulador.link}>
                {" "}
                link
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};
