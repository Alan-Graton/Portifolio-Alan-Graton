import React from "react";

// Logo
import C_PlusPlus_Logo from "../../images/C_PlusPlus_Logo.png";

// Styles
import "./styles/styles.css";

function C_PlusPlus_Exp() {
  return (
    <>
      <aside className="aside-img-descrip">
        <div className="lang-tech-img-div">
          <img src={C_PlusPlus_Logo} alt="C++ Logo" className="lang-tech-img" />
        </div>
        <div className="lang-tech-descrip">
          <p>
            <h2>
              Desenvolvimento de um programa para 3 Unidades de Clínicas
              Odontológicas
            </h2>
            <strong> Autenticação de Usuários</strong> e
            <strong> Gravação de dados em arquivos .txt</strong>
            <br />
            Projeto com objetivo de sanar uma necessidade da empresa
            <strong> Grupo Intelsis Brasil</strong> durante o período de Estágio
            para uma melhor organização das atividades dos funcionários em
            relação aos seus Projetos
          </p>
        </div>
      </aside>
    </>
  );
}

export default C_PlusPlus_Exp;
