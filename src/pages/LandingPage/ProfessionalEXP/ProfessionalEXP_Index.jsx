import React from "react";

import "./styles/styles.css";

import GI_Logo from "./images/GI_Logo.png";

// Learned Techs Logos
import javaScriptLogo from "./images/javaScriptLogo.svg";
import test from "./images/jvsLogo.svg";
import azureLogo from "./images/azureLogo.svg";
import firebaseLogo from "./images/firebaseLogo.svg";
import reactjsLogo from "./images/reactjsLogo.svg";
import sap_cpiLogo from "./images/sap-cpiLogo.svg";
import postmanLogo from "./images/postmanLogo.png";

function ProfEXP_INDEX() {
  return (
    <div className="exp-container">
      <div className="company-title">
        <h1 className="company-name">Grupo Intelsis Brasil</h1>
        <img
          className="company-logo"
          src={GI_Logo}
          alt="Grupo Intelsis Brasil Logo"
        />
      </div>
      <div className="profExp-activities">
        <div className="profExp-acivities-description">
          <h2>Tecnologias utilizadas</h2>
          {/* Descrição das Experiências Profissionais */}
          <p className="profExp-acivities-description-paragraph">
            Foram realizados alguns "desafios" no começo no Estágio para que os
            recrutadores pudessem saber onde o estagiário se encaixaria melhor.
            <br />
            Os desafios/projetos foram:
            <br />
          </p>
          {/* Experiências Profissionais */}
          <section>
            <hr style={{ opacity: "10%" }} />
            <img src={azureLogo} alt="Azure Logo" />
            <img src={test} alt="JavaScript Logo" />
            <p>
              Escrever um script utiilizando JavaScript para se conectar ao
              Banco de Dados da empresa no Azure e retornar o Payload de uma
              certa tabela.
            </p>
          </section>
          <section>
            <hr style={{ opacity: "10%" }} />
            <img src={firebaseLogo} alt="Firebase Logo" />
            <img src={reactjsLogo} alt="ReactJS Logo" />
            <p>
              Realizado um trabalho individual no desenvolvido de um portal de
              <strong> apontamento de horas trabalhadas </strong>
              {"(sem ajuda técnica)"}. Foi utilizado ReactJS
              <strong>{"(obrigatório)"}</strong>, Material-UI
              <strong>{"(opcional)"}</strong> e Firebase
              <strong>{"(obrigatório)"}</strong>.
            </p>
          </section>
          <section>
            <hr style={{ opacity: "10%" }} />
            <img src={sap_cpiLogo} alt="SAP Logo" />
            <img src={postmanLogo} alt="Postman Logo" />
            <p>
              Primeira experiência de trabalho em equipe como Consultor CPI em
              um projeto real para a LATAM, com seus colaboradores
              {"(Chile, EUA e Índia)"} e as empresas <strong>ECentaCloud{"(Chile)"}</strong> e <strong>NTT DATA{"(Tóquio)"}</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ProfEXP_INDEX;
