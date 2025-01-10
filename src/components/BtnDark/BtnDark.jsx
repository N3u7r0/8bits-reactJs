import { useState } from "react";

export const BtnDark = () => {
  const [botonNeon, setBotonNeon] = useState(true);

  const logicaBtnNeon = () => {
    const root = document.querySelector(":root");
    if (botonNeon) {
      root.style.setProperty("--color-fuente", "rgba(255, 170, 70, 0.8)");
      root.style.setProperty("--color-navbar", "rgba(151, 151, 151, 0.1)");
      root.style.setProperty("--color-footer", "rgb(6,6,6)");
      root.style.setProperty("--color-border", "rgba(151, 151, 151, 0.8)");
      root.style.setProperty("--color-border-tv-parlantes", "rgba(255, 190, 0, 0.9)");
      root.style.setProperty("--color-background-section", "rgba(0, 0, 0, 0.9)");
      root.style.setProperty("--color-card-gradiante-mid", "rgba(211, 211, 211, 0npm.05)");
      root.style.setProperty("--color-card-background", "rgba(0, 0, 0, 0.1)");
      root.style.setProperty("--color-shadow", "rgba(0, 0, 0, 0.6)");
      root.style.setProperty("--color-bar", " rgba(111, 111, 111, 0.9)");
    } else {
      root.style.setProperty("--color-fuente", "rgba(236, 171, 20, 0.7)");
      root.style.setProperty("--color-navbar"," rgba(200, 0, 250, 0.95)");
      root.style.setProperty("--color-footer", "rgb(245,245,245)");
      root.style.setProperty("--color-border", "rgba(200, 0, 250, 0.8)");
      root.style.setProperty("--color-border-tv-parlantes", "rgba(200, 0, 200, 0.9)");
      root.style.setProperty("--color-background-section", "rgba(50, 0, 100, 0.72)");
      root.style.setProperty("--color-card-gradiante-mid", "rgba(200, 0, 255, 0.4)");
      root.style.setProperty("--color-card-background", "rgba(200, 0, 250, 0.1)");
      root.style.setProperty("--color-shadow", "rgba(200, 0, 250, 0.6)");
      root.style.setProperty("--color-bar", " rgba(200, 0, 250, 0.95)");
    }
    
    setBotonNeon(!botonNeon);
  };

  return (
    <button onClick={logicaBtnNeon} type="button" className="btn_1up">
      ♥♥♡
    </button>
  );
};
