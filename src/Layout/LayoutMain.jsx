import { BrowserRouter } from "react-router-dom";
import { NavBar, Footer } from "../components";
import { RouterMain } from "../Router"
import "./style.css";

export const LayoutMain = () => {
  return (
    <div className="layout">
      <BrowserRouter>
        <NavBar />
        <header>
          <RouterMain />
        </header>
      </BrowserRouter>
      <Footer />
    </div>
  );
};