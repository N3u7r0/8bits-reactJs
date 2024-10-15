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
                  <p>consola :{emulador.consola}</p>
                </li>
                <li>
                  <p> plataforma:{emulador.plataforma}</p>
                </li>
                <li>
                 
                
                <a   type="button" className="btn"  href={emulador.link}>  link</a>
                 
                </li>
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};
