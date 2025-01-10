

import { FormEuladores } from "../components";
import { FormRoms } from "../components/forms/formRoms";
import "./styles/style.css";

export const Home = () => {

  
  return (
    <>
      <h2 className="tituloPrincipal">Home</h2>

      <section className="div-flex">

      <FormRoms />
      <FormEuladores />
       
      </section>
    </>
  );
};
