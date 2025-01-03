import "./styles/style.css";

export const Home = () => {
  return (
    <>
      <h2 className="tituloPrincipal">Home</h2>
      <div className="container-global">
        <h4>Nuevo ROM</h4>
        <form action="" method="get">
          <ul>
            <li>
              <p>ROM</p>
              <input
                name="Nombre del rom"
                type="text"
                placeholder="Nombre del juego."
              />
            </li>
            <li>
              <p>Descripcion</p>
              <input
                name="descripcion"
                type="text"
                placeholder="Descripcion de la card del juego."
              />
            </li>
            <li>
              <p>Descripcion extendida</p>
              <input
                name="descripcion"
                type="text"
                placeholder="Descripcion  extendida del juego."
              />
            </li>
            <li>
              <p>Año de lanzamiento</p>
              <input
                name="año"
                type="text"
                placeholder="Año de lanzamiento del juego."
              />
            </li>
            <li>
              <p>Empresa</p>
              <input
                name="empresa"
                type="text"
                placeholder="fabricante del juego."
              />
            </li>
            <li>
              <p>Link</p>
              <input
                name="link de descarga"
                type="text"
                placeholder="Link de descarga."
              />
            </li>
            <li>
              <p>Foto portada</p>
              <input name="foto portada" type="file" />
            </li>
            <li>
              <p>foto gameplays</p>
              <div>
                <input name="foto gameplay 1" type="file" />
                <input name="foto gameplay 2" type="file" />
                <input name="foto gameplay 3" type="file" />
              </div>
            </li>
          </ul>
        </form>
      </div>
    </>
  );
};
