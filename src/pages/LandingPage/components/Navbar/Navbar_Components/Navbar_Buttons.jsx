import React from "react";

import "./styles/Navbar-btns.css";

function Navbar_Buttons() {
  return (
      <div className="navbar-btns">
        <a className="btn-about-me" onClick={() => {console.log("Page 'Sobre mim'")}}>Sobre mim</a>
        <a onClick={() => {console.log("Page 'Idiomas'")}}>Idiomas</a>
        <a onClick={() => {console.log("Page 'Experiências Profissionais'")}}>Experiências profissionais</a>
        <a onClick={() => {console.log("Page 'Projetos'")}}>Projetos</a>
      </div>
  );
}

export default Navbar_Buttons;
