import React from "react";

import "./styles/Appbar-btns.css";

function AppBar_Buttons() {
  return (
      <div className="appBar-btns">
        <a onClick={() => {console.log("Page 'Idiomas'")}}>Idiomas</a>
        <a onClick={() => {console.log("Page 'Experiências Profissionais'")}}>Experiências Profissionais</a>
        <a onClick={() => {console.log("Page 'Linguagens de Programação'")}}>Linguagens de Programação</a>
        <a onClick={() => {console.log("Page 'Projetos'")}}>Projetos</a>
        <a onClick={() => {console.log("Page 'Redes Sociais'")}}>Redes Sociais</a>
      </div>
  );
}

export default AppBar_Buttons;
