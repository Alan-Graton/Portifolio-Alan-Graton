import React from 'react';

// Pages
import Idioms_INDEX from "./Idioms/Idioms_Index";
import ProfEXP_INDEX from "./ProfessionalEXP/ProfessionalEXP_Index";
import Langs_INDEX from "./ProgrammingLANGS/ProgrammingLANGS_Index";
import Projects_INDEX from "./ProjectsDEV/ProjectsDEV_Index";
import Social_INDEX from "./SocialMEDIA/SocialMEDIA_Index";

function Landing_INDEX() {
    return (
        <div>
            <h1>Landing Page</h1>
            <ul>
                <li><Idioms_INDEX /></li>
                <li><ProfEXP_INDEX /></li>
                <li><Langs_INDEX /></li>
                <li><Projects_INDEX /></li>
                <li><Social_INDEX /></li>
            </ul>
        </div>
    );
}

export default Landing_INDEX;