
import { FormEmuladores } from "../components/forms";
import { FormRoms } from "../components/forms";
import "./styles/style.css";

export const Home = () => {

  
  return (
    <>
      <h2 className="tituloPrincipal">Home</h2>

      <section className="div-flex">

      <FormRoms />
      <FormEmuladores />
       
      </section>
    </>
  );
};
