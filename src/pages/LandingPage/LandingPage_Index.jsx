import React from "react";

// Pages
import Idioms_INDEX from "./Idioms/Idioms_Index";
import ProfEXP_INDEX from "./ProfessionalEXP/ProfessionalEXP_Index";
import Langs_INDEX from "./ProgrammingLANGS/ProgrammingLANGS_Index";
import Projects_INDEX from "./ProjectsDEV/ProjectsDEV_Index";
import Social_INDEX from "./SocialMEDIA/SocialMEDIA_Index";

// Components
import Landing_AppBar from "./components/Landing_AppBar";

function Landing_INDEX() {
  return (
    <>
      <Landing_AppBar />
      <Idioms_INDEX />
      {/* <ProfEXP_INDEX />
      <Langs_INDEX />
      <Projects_INDEX />
      <Social_INDEX /> */}
    </>
  );
}

export default Landing_INDEX;
