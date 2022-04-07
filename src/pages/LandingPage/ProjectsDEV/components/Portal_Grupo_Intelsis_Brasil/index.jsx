import React from "react";

import "./styles/styles.css";

// Project Images
import LoginPage from "./images/Login Page.png";
import HomePage from "./images/Home Page.png";
import LaunchPage from "./images/Launch Page.png";
import QueryPage from "./images/Query Page.png";

// Project Tile Image
import GI_Logo from "./images/GI_Logo.png";

// Techs Images
import Firebase_Logo from "./images/Firebase_Logo.svg";
import ReactJS_Logo from "./images/ReactJS_Logo.svg";

function Portal_GrupoIntelsis_Brasil() {
  return (
    <div className="project">
      <div className="project-descrip">
        <div className="project-title">
          <h1>Portal Grupo Intelsis Brasil</h1>
          <img
            className="grupoIntelsis-logo"
            src={GI_Logo}
            alt="Grupo Intelsis Brasil Logo"
          />
        </div>
        <p className="project-descrip-paragraph">
          O projeto teve início com o intuito de testar as habilidades em
          desenvolver um site completamente sozinho, tendo somente suporte nos
          requisitos do portal a desenvolver; além de quitar a necessidade de um
          sistema para apontamento de horários dos funcionários da empresa.
          <hr />
          <strong>About Page</strong> em construção.
          <hr />
        </p>
        <h2>Tecnologias Utilizadas</h2>
        <div className="project-techs">
          <img
            className="project-usedTechs-img"
            src={ReactJS_Logo}
            alt="ReactJS Logo"
          />
          <img
            className="project-usedTechs-img"
            src={Firebase_Logo}
            alt="Firebase Logo"
          />
          <svg width="80px" viewBox="0 0 36 32">
            <path
              d="M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z"
              fill="#007FFF"
            ></path>
          </svg>
        </div>
      </div>
      <div className="project-images">
        <h3>Login Page</h3>
        <img src={LoginPage} alt="Portal's Login Page" />
        <h3>Home Page</h3>
        <img src={HomePage} alt="Portal's Home Page" />
        <h3>Launch Page</h3>
        <img src={LaunchPage} alt="Portal's Launch Page" />
        <h3>Query Page</h3>
        <img src={QueryPage} alt="Portal's Query Page" />
      </div>
    </div>
  );
}

export default Portal_GrupoIntelsis_Brasil;
