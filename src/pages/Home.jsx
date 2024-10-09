import "./styles/style.css";
import { Spin } from "../components";
export const Home = () => {
  return (
    <>
      <h2 className="tituloPrincipal">Home</h2>
      <div className="container-global">
        <Spin/>
      </div>
    </>
  );
};
