import { useParams } from "react-router-dom";
import { ItemDetailContainer } from "../components";
import { useRomsById } from "../Hooks";

export const RomDetail = () => {
  const { id } = useParams();
  const { rom } = useRomsById(id);

  return (
    <>
      <section className="div-flex-detail">
        <ItemDetailContainer rom={rom} />
      </section>
    </>
  );
};
