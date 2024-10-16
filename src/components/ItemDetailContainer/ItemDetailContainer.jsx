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
            <h5>Reseña:</h5>
            <p className="p_fondo">{rom.descripcion_detail}</p>
            <h5>Año de lanzamiento:</h5>
            <p className="p_fondo">{rom.lanzamiento}</p>
            <h5>Empresa:</h5>
            <p className="p_fondo">{rom.empresa}</p>
            <h5>fotos:</h5>
            <div  className="fotos-contenedor">
             {<img className="fotosGameplay" src={rom.foto_1} alt="" />||<Spin />}
              <img className="fotosGameplay" src={rom.foto_2} alt="" />
              <img className="fotosGameplay" src={rom.foto_3} alt="" />
            </div>

            <h3> Descargar</h3>
            <a   type="button" className="btn"  href={rom.link}> → {rom.titulo} ←</a>
          </aside>

      </section>
    </>
  );
};
