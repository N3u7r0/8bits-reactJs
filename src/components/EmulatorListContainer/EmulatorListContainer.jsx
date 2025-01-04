import { Spin } from "../Spin";
import "./style/style.css";

export const EmulatorListContainer = ({ emuladoresFiltrados }) => {
  return emuladoresFiltrados?.length === 0 ? (
    <Spin />
  ) : (
    <>
      <section className="contenedor-cards">
        
          {emuladoresFiltrados.map((emulador) => (
            <article key={emulador.id} className="card">
              <ul>
                <li>
                  <h3>{emulador.titulo}</h3>
                </li>
                <li>
                  <img
                    className="img-card-emuladores" src={emulador.foto} alt={emulador.titulo}/>
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
                </li>
              </ul>
            </article>
          ))}
       
      </section>
    </>
  );
};
