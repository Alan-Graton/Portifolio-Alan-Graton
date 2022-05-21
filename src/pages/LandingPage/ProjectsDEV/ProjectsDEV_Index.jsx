import React from "react";

import "./styles/styles.css";

// Projects
import HotelPIMheiro from "./components/Hotel/index.jsx";
import Portal_GrupoIntelsis_Brasil from "./components/Portal_Grupo_Intelsis_Brasil/index.jsx";
import Site_Portifolio from "./components/Site_portifolio/index.jsx";

function Projects_INDEX() {
  return (
    <div className="projects-container">
      <Portal_GrupoIntelsis_Brasil />
      <HotelPIMheiro />
    </div>
  );
}

export default Projects_INDEX;