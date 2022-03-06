import React from "react";

// Styles
import "./styles/styles.css";

// Page Content
import C_PlusPlus_Exp from "./components/C_PlusPlus/C_PlusPlus_Exp.jsx";
import Firebase_Exp from "./components/Firebase_Exp/Firebase_Exp.jsx";
import CSS_Exp from "./components/CSS_Exp/CSS_Exp.jsx";
import ReactJS_Exp from "./components/ReactJS_Exp/ReactJS_Exp.jsx";
import SQL_Exp from "./components/SQL_Exp/SQL_Exp.jsx";

function Langs_INDEX() {
  return (
    <div className="container">
      <C_PlusPlus_Exp />
      {/* <Firebase_Exp /> */}
      {/* <CSS_Exp /> */}
      {/* <ReactJS_Exp /> */}
      {/* <SQL_Exp /> */}
    </div>
  );
}

export default Langs_INDEX;
