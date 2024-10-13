import { Spin } from "../Spin";

export const EmulatorListContainer = ({ emuladoresFiltrados }) => {
  return emuladoresFiltrados?.length === 0 ? (
    <Spin />
  ) : (
    <>
      <section className="div-flex">
        <div className="contenedor-ul">
          {emuladoresFiltrados.map((emulador) => (
            <article key={emulador.id} className="card">
              <ul>
                <li>
                  
                  <h3>{emulador.titulo}</h3>
                </li>
                <li>
                  <img className="img-card" src={emulador.fotoPortada} alt={emulador.titulo} />
                </li>
                <li>
                  <p>{emulador.descripcion}</p>
                </li>
                <li>
                  <p>{emulador.consola}</p>
                </li>
                <li>
                  <p>{emulador.plataforma}</p>
                </li>
                <li>
                 
                    <button type="button" className="btn">
                      ver mas
                    </button>
                 
                </li>
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};
