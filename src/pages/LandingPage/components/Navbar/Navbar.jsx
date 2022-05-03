import React from "react";

// AppBar Components
import AppBar_Buttons from "./Navbar_Components/Navbar_Buttons";

import "./styles/Navbar.css";

function NavBar(props) {
  return (
    <div className="navbar">
      <AppBar_Buttons eventClick={props} />
    </div>
  );
}

export default NavBar;
