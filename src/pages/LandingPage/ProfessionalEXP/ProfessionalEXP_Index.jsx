import React from "react";

import "./styles/styles.css";

import GI_Logo from "./images/GI_Logo.png";

// Learned Techs Logos
import sap_cpiLogo from "./images/sap-cpiLogo.svg";
import azureLogo from "./images/azureLogo.svg";
import firebaseLogo from "./images/firebaseLogo.svg";
import reactjsLogo from "./images/reactjsLogo.svg";

function ProfEXP_INDEX() {
  return (
    <div className="exp-container">
      <div className="company-title">
        <div className="profExp-company">
          <h1 className="company-name">Grupo Intelsis Brasil</h1>
          <img
            className="company-logo"
            src={GI_Logo}
            width="75px"
            alt="Grupo Intelsis Brasil Logo"
          />
        </div>
      </div>
      <div className="profExp-activities">
        <div className="profExp-acivities-description">
          <h2>Tecnologias vistas</h2>
          <p className="profExp-acivities-description-paragraph">
            Foram realizados alguns "desafios" no começo no Estágio para que os
            recrutadores pudessem saber onde o estagiário se encaixaria melhor.
            <br />
            Os desafios/projetos foram:
            <br />
            <img src={azureLogo} alt="Azure Logo" />
            Escrever um script utiilizando JavaScript para se conectar ao Banco
            de Dados da empresa no Azure e retornar o Payload de uma certa
            tabela.
            <br />
            <img className="firebase-logo" src={firebaseLogo} alt="Firebase Logo" />
            <img src={reactjsLogo} alt="ReactJS Logo" />
            Desenvolvido individualmente um portal de
            <strong> apontamento de horas trabalhadas </strong>
            {"(sem ajuda técnica)"}. Foi utilizado ReactJS
            <strong>{"(obrigatório)"}</strong>, Material-UI
            <strong>{"(opcional)"}</strong> e Firebase
            <strong>{"(obrigatório)"}</strong>.
            <br />
            <img src={sap_cpiLogo} alt="SAP CPI Logo" />
            Ter a primeira experiência como Consultor CPI em um projeto para a
            LATAM, onde foi necessário trabalhar com funcionários de outras
            empresas{"(ECentaCloud)"}, sendo eles do exterior
            {"(Chile, EUA e Índia)"}.
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfEXP_INDEX;
