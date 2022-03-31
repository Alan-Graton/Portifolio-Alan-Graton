import React from "react";

import "./styles/styles.css";

import LoginIMG from "./images/Login.png";
import ChangeLogin_CredentialsIMG from "./images/ChangeLogin_Credentials.png";
import Forgot_passwordIMG from "./images/Forgot_password.png";
import Guest_RegistrationReservationIMG from "./images/Guest_RegistrationReservations.png";
import Register_EmployeesIMG from "./images/Register_Employees.png";
import ReportsIMG from "./images/Reports.png";

function HotelPIMheiro() {
  return (
    <div>
      <h1>Hotel PIMheiro</h1>
      <p>
        Projeto desenvolvido para PIM{"(Projeto Integrado Multidisciplinar)"}
        para gestão de um Hotel fictício
      </p>
      <p>
        Os integrantes foram responsáveis por desenvolver toda a documentação do
        Projeto, além dos Protótipos de Telas, Banco de Dados e Sistemas
        requisitados{"(Sistema Web/Desktop e Mobile)"}
      </p>
      <div className="project-used-techs">
        <h2>Tecnologias utilizadas: </h2>
        <ul className="used-techs-list">
            <li>C#</li>
            <li>ASP .NET 5</li>
            <li>SQL SERVER</li>
            <li>ASP .NET 5</li>
        </ul>
      </div>
      <h3>Sistema Desktop</h3>
      <div className="project-images-container">
          <img src={LoginIMG} alt="Login" />
          <img className="project-images-forgotPassword" src={Forgot_passwordIMG} alt="User forgot Password" />
          <img className="project-retangular-images" src={ChangeLogin_CredentialsIMG} alt="Change Login Credentials" />
          <img className="project-retangular-images" src={Guest_RegistrationReservationIMG} alt="Guest Registration/Reservation" />
          <img className="project-retangular-images" src={Register_EmployeesIMG} alt="Register Employees" />
          <img className="project-retangular-images" src={ReportsIMG} alt="Reports" />
      </div>
    </div>
  );
}

export default HotelPIMheiro;
