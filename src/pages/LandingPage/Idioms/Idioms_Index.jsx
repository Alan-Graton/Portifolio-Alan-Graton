import React from "react";

// Images
import german from "./images/german.png";
import spanish from "./images/spanish.png";
import english from "./images/english.png";

// CSS
import "./styles/idiomsGrid.css";

function Idioms_INDEX() {
  const [usaGlowDivs, setUSAGlowDivs] = React.useState(false);
  const [spainGlowDivs, setSpainGlowDivs] = React.useState(false);
  const [germanyGlowDivs, setGermanyGlowDivs] = React.useState(false);

  return (
    <div className="idioms-cards-grid">
      <div
        id="idioms-card-usa"
        onMouseEnter={() => {
          setUSAGlowDivs(true);
        }}
        onMouseLeave={() => {
          setUSAGlowDivs(false);
        }}
        className="idioms-cards"
      >
        <img src={english} alt="USA Flag" />
        <h5>Inglês - Fluente</h5>
        <p>6 anos de estudo no CNA</p>
      </div>
      <div
        id="idioms-card-spain"
        onMouseEnter={() => {
          setSpainGlowDivs(true);
        }}
        onMouseLeave={() => {
          setSpainGlowDivs(false);
        }}
        className="idioms-cards"
      >
        <img src={spanish} alt="Spain Flag" />
        <h5>Espanhol - Intermediário</h5>
        <p>2 anos de estudo no CNA</p>
      </div>
      <div
        id="idioms-card-germany"
        onMouseEnter={() => {
          setGermanyGlowDivs(true);
        }}
        onMouseLeave={() => {
          setGermanyGlowDivs(false);
        }}
        className="idioms-cards"
      >
        <img src={german} alt="Germany Flag" />
        <h5>Alemão - Iniciante</h5>
        <p>Estudo em andamento. 1 ano de estudo no Instuto Goethe</p>
      </div>
    </div>
  );
}

export default Idioms_INDEX;
