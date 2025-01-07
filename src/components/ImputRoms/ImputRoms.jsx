import { useState } from "react";

export const ImputRoms = () => {
  const [botonNeon, setBotonNeon] = useState(true);

  const logicaBtnNeon = () => {
    const root = document.querySelector(":root");
    if (botonNeon) {
      root.style.setProperty("--color-fuente", "rgba(240, 240, 250, 0.8)");
      root.style.setProperty("--color-navbar", "none");
      root.style.setProperty("--color-footer", "rgb(10,10,10)");
      root.style.setProperty("--color-border", "rgba(100, 0, 0, 0.8)");
      root.style.setProperty("--color-border-tv-parlantes", "rgba(200, 0, 0, 0.7)");
      root.style.setProperty("--color-background-section", "rgba(0, 0, 0, 0.95)");
      root.style.setProperty("--color-card-gradiante-mid", "rgba(188, 0, 0, 0.55)");
      root.style.setProperty("--color-card-background", "rgba(155, 0, 0, 0.1)");
      root.style.setProperty("--color-shadow", "rgba(100, 0, 0, 0.5)");
    } else {
      root.style.setProperty("--color-fuente", "rgba(236, 171, 59, 0.8)");
      root.style.setProperty("--color-footer", "rgb(245,245,245)");
      root.style.setProperty("--color-border", "rgba(200, 0, 250, 0.8)");
      root.style.setProperty("--color-border-tv-parlantes", "rgba(200, 0, 200, 0.9)");
      root.style.setProperty("--color-background-section", "rgba(50, 0, 100, 0.72)");
      root.style.setProperty("--color-card-gradiante-mid", "rgba(200, 0, 255, 0.3)");
      root.style.setProperty("--color-card-background", "rgba(200, 0, 250, 0.1)");
      root.style.setProperty("--color-shadow", "rgba(200, 0, 250, 0.6)");
      
    }
    setBotonNeon(!botonNeon);
  };

  return (
    <button onClick={logicaBtnNeon} type="button" className="btn_1up">
      ♥♥♡
    </button>
  );
};
