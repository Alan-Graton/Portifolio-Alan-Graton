import React from "react";

import Alan from "./images/AlanGraton.png";

import "./styles/styles.css";

function LandingPage() {
  return (
    <>
      <aside>
        <div className="profile-picture-container">
          <img
            className="profile-picture"
            src={Alan}
            alt="Alan Graton Profile Picture"
          />
        </div>
      </aside>
      <div className="bio-container">
        <h1 className="bio-title">Olá, meu nome é Alan Graton!</h1>
        <p className="bio-paragraph">
          Sou formado no curso tecnólogo de ADS pela UNIP. Atualmente estou
          empregrado como Estagiário na empresa <strong>Grupo Intelsis Brasil</strong> atualmente atuando como <strong>Consultor CPI</strong> e focando
          meus estudos em <strong>Web Design</strong> e pretendo começar meus estudos em <strong>Segurança da Informação</strong>.
        </p>
      </div>
    </>
  );
}

export default LandingPage;
