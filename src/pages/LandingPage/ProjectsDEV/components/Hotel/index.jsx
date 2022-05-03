import React from "react";

import "./styles/styles.css";

// Project Techs Images
import CSharp_Logo from "./images/CSharp.png";
import ASP_NET_Logo from "./images/arquivo-aspx.png";
import SqlServer_Logo from "./images/SQL_SERVER.png";


// Desktop Project Images
import LoginDesktop from "./images/LoginDesktop.png"
import RecoverDesktop from "./images/RecoverPassword_Desktop.png"
import ReportDesktop from "./images/ReportsDesktop.png"
import ChangeLogin_CredentialsIMG from "./images/ChangeLogin_Credentials.png";
import Guest_RegistrationReservationIMG from "./images/Guest_RegistrationReservations.png";
import Register_EmployeesIMG from "./images/Register_Employees.png";

// Web Project Images
import WebRegister1 from "./images/Web_Register1.png"
import WebRegister2 from "./images/Web_Register2.png"
import AboutPageWeb from "./images/AboutPage_Web.png"
import ContactPageWeb from "./images/ContactPage_Web.png"

function HotelPIMheiro() {
  return (
    <div className="project-container-Hotel">
      <div className="project">
        <div className="project-descrip">
          <div className="project-Hotel-title">
            <h1>Hotel PIMheiro</h1>
            <strong>
              Projeto desenvolvido para PIM
              {"(Projeto Integrado Multidisciplinar) "}
              para gestão de um Hotel.
            </strong>
          </div>
          <p className="project-descrip-paragraph">
            Os integrantes foram responsáveis por desenvolver toda a
            documentação do Projeto, além dos Protótipos de Telas, Banco de
            Dados e Sistemas requisitados{"(Sistema Web/Desktop e Mobile)"}.
          </p>
          <h2>Tecnologias utilizadas: </h2>
          <div className="project-Hotel-techs">
            <img src={CSharp_Logo} alt="CSharp Logo" />
            <img src={ASP_NET_Logo} alt="ASP .NET Logo" />
            <img src={SqlServer_Logo} fill="white" alt="SQL SERVER Logo" />
          </div>
        </div>
        <h2>Sistema Desktop</h2>
        <div className="project-images-container-hotel-desktop">
          <h3>Login Page</h3>
          <img src={LoginDesktop} alt="Login Page - Desktop Project"/>
          <h3>User Forgot Password</h3>
          <img src={RecoverDesktop} alt="User Forgot Password - Desktop Project"/>
          <h3>Change Login Credentials</h3>
          <img src={ChangeLogin_CredentialsIMG} alt="Change Login Credentials - Desktop Project"/>
          <h3>Guest Registration/Reservation</h3>
          <img src={Guest_RegistrationReservationIMG} alt="Guest Registration/Reservation - Desktop Project"/>
          <h3>Register Employees</h3>
          <img src={Register_EmployeesIMG} alt="Register Employees - Desktop Project"/>
          <h3>Reports</h3>
          <img src={ReportDesktop} alt="Reports - Desktop Project"/>
        </div>
        <h2>Sistema Web</h2>
        <div className="project-images-container-hotel-web">
          <h3>Register Page</h3>
          <img src={WebRegister1} alt="Register page picture 1 - Web Project"/>
          <h3>Register Page</h3>
          <img src={WebRegister2} alt="Register page picture 2 - Web Project"/>
          <h3>About Page</h3>
          <img src={AboutPageWeb} alt="About page - Web Project"/>
          <h3>Contact Page</h3>
          <img src={ContactPageWeb} alt="Contact page - Web Project"/>
        </div>
      </div>
    </div>
  );
}

export default HotelPIMheiro;
