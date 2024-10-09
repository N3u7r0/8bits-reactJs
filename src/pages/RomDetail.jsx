import { useParams } from "react-router-dom";
import { ItemDetailContainer } from "../components";
import { useRomsById } from "../Hooks";

export const RomDetail = () => {
  const { id } = useParams();
  const { rom } = useRomsById(id);

  return (
    <>
      <h2 className="tituloPrincipal">Trucos</h2>
      <div className="container-global">
        <ItemDetailContainer rom={rom} />
      </div>
    </>
  );
};
