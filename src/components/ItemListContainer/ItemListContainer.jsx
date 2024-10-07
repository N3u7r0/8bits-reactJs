import { Spin } from "../Spin";
import "./style/style.css";

export const ItemListContainer = ({ roms }) => {
  return roms?.length === 0 ? (
    <Spin />
  ) : (
    <>
      <div className="div-flex">
        <div className="contenedor-ul">
          {roms.map((rom) => (
            <ul key={rom.id} className="card">
              <li>
             
                <h3>{rom.titulo}</h3>
              </li>
              <li >
                <img className="img-card" src={rom.foto} alt={rom.fotoAlt} />
              </li>
              <li>
                <p>{rom.descripcion}</p>
              </li>
              <br />
              <li>
                <p>consola: {rom.consola}</p>
                <p>lanzamiento: {rom.lanzamiento}</p>
                <p>Empresa: {rom.empresa}</p>
              </li>
              <br />
              <ul>
                <button type="button" className="btn">Link</button>
              </ul>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};
