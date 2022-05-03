import React from "react";

import "./styles/Navbar-btns.css";

function Navbar_Buttons(props) {
  return (
      <div className="navbar-btns">
        <a onClick={props.eventClick.handleAboutPageClick} className="btn-about-me">Sobre mim</a>
        <a onClick={props.eventClick.handleIdiomsPageClick} className="navbar-page-btn">Idiomas</a>
        <a onClick={props.eventClick.handleProfExpPageClick} className="navbar-page-btn">Experiências profissionais</a>
        <a onClick={props.eventClick.handleProjectsPageClick} className="navbar-page-btn">Projetos</a>
      </div>
  );
}

export default Navbar_Buttons;
