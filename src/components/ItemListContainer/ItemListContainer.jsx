import "./style/style.css";
//a este itemListContainer lo esta llamando roms. donde le paso la prop.
export const ItemListContainer = ({ roms }) => {
  return (
    <>
     
      <div className="div-flex">
        <div className="contenedor-ul">
        {roms.map((rom) => (
          <ul key={rom.id} className="card">
            <li>
              <h2>{rom.titulo}</h2>
            </li>
            <li>
              <p>{rom.descripcion}</p>
            </li>
            <li>
              <img src={rom.foto} alt={rom.fotoAlt} />
            </li>
            <li>
              <p>{rom.lanzamiento}</p>
            </li>
            <ul className="btn">
              <botton type="button">Link</botton>
            </ul>
          </ul>
        ))}
        </div>

        </div>
    </>
  );
};
