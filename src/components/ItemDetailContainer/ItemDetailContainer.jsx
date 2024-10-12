import { Spin } from "../Spin";
import "./style/index.css";

export const ItemDetailContainer = ({ rom }) => {
  return rom?.length === 0 ? (
    <Spin />
  ) : (
    <>
      <section className="div-flex-detail">
        <article key={rom.id} className="cardDetail">
          <h3>{rom.titulo}</h3>

          <div className="tv">

            <div className="tv-flex">

              <div className="tv-parlante-a"></div>

              <img className="img-card"
                src={rom.fotoPortada}
                alt={rom.fotoAlt}
              />

              <div className="tv-parlante-b"></div>

            </div>

            <div className="contenedor-botonera-logo">
              <h6 className="tv-logo">8-bits</h6>
              <p className="botonera">Ooooo</p>
            </div>
            
          </div>

         
        </article>
        <aside>
            <h5>reseña:</h5>
            <p>{rom.descripcion_detail}</p>
            <h5>año de lanzamiento:</h5>
            <p>{rom.lanzamiento}</p>
            <h5>fotos:</h5>
            <div>
              <img src={rom.foto_1} alt="" />
              <img src={rom.foto_2} alt="" />
              <img src={rom.foto_3} alt="" />
            </div>

            <h3> Descargar</h3>
            <a href={rom.link}>!!!descargar {rom.titulo}!!!</a>
            
             
            
          </aside>

      </section>
    </>
  );
};
