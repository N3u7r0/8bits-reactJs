import { useState } from "react";

export const ImputRoms = () => {
  const [botonNeon, setBotonNeon] = useState(true);

  const logicaBtnNeon = () => {
    const root = document.querySelector(":root");
    if (botonNeon) {
      root.style.setProperty("--color-background-section", "rgba(0, 0, 0, 0.1)");
      root.style.setProperty("--color-card-gradiante-mid", "rgba(0, 0, 0, 0.1)");
      root.style.setProperty("--color-card-background", "rgba(0, 0, 0, 0.1)");
      root.style.setProperty("--color-shadow", "rgba(0, 0, 0, 0.1)");
     
      
    } else {
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
