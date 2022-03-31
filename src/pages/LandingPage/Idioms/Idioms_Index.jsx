import React from "react";

// Images
import german from "./images/german.png";
import spanish from "./images/spanish.png";
import english from "./images/english.png";

// CSS
import "./styles/idiomsGrid.css";

function Idioms_INDEX() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-content">
          <img src={english} alt="USA Flag" />
          <h5>Inglês - Fluente</h5>
          <p>6 anos de estudo no CNA</p>
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <img src={spanish} alt="Spain Flag" />
          <h5>Espanhol - Intermediário</h5>
          <p>2 anos de estudo no CNA</p>
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <img src={german} alt="Germany Flag" />
          <h5>Alemão - Iniciante</h5>
          <p>Estudo em andamento. 1 ano de estudo no Instituto Goethe</p>
        </div>
      </div>
    </div>
  );
}

export default Idioms_INDEX;
