import React from "react";

import "./styles/Navbar-btns.css";

function Navbar_Buttons() {
  return (
      <div className="navbar-btns">
        <a onClick={() => {console.log("Page 'Idiomas'")}}>Idiomas</a>
        <a onClick={() => {console.log("Page 'Experiências Profissionais'")}}>Experiências Profissionais</a>
        <a onClick={() => {console.log("Page 'Projetos'")}}>Projetos</a>
        {/* NOTE 
            'Linguagens de Programação' e 'Projetos' podem ser uma página só 
        */}
        {/* <a onClick={() => {console.log("Page 'Linguagens de Programação'")}}>Linguagens de Programação</a> */}
        {/* <a onClick={() => {console.log("Page 'Projetos'")}}>Projetos</a> */}
        {/* NOTES
            Deixar uma SnackBar fixa ao lado direito com as Redes Sociais importantes 
        */}
        {/* <a onClick={() => {console.log("Page 'Redes Sociais'")}}>Redes Sociais</a> */}
      </div>
  );
}

export default Navbar_Buttons;
