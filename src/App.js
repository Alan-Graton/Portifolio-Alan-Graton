import "./App.css";

import React from "react";

// Header
import NavBar from "./pages/LandingPage/components/Navbar/Navbar.jsx";

// Navbar Buttons
import Idioms_INDEX from "./pages/LandingPage/Idioms/Idioms_Index";
import Projects_INDEX from "./pages/LandingPage/ProjectsDEV/ProjectsDEV_Index";
import Social_INDEX from "./pages/LandingPage/SocialMEDIA/SocialMEDIA_Index";
import ProfEXP_INDEX from "./pages/LandingPage/ProfessionalEXP/ProfessionalEXP_Index.jsx";
import GuestsBook from "./pages/LandingPage/components/GuestsBook/index.jsx";
import GuestsBook_Btn from "./pages/LandingPage/components/GuestsBook/components/GuestsBook-btn";

// Main Components
import LandingPage from "./pages/LandingPage/index.jsx";

function App() {
  // Pages
  const [aboutMePage, setAboutMePageClick] = React.useState(true);
  const handleAboutPageClick = (event) => {
    event.preventDefault();

    setAboutMePageClick(true);
    setIdiomsPageClick(false);
    setProfExpPageClick(false);
    setProjectsPageClick(false);
    setGuestsBook(false);
  };
  const [idiomsPage, setIdiomsPageClick] = React.useState(false);
  const handleIdiomsPageClick = (event) => {
    event.preventDefault();

    setIdiomsPageClick(true);
    setAboutMePageClick(false);
    setProfExpPageClick(false);
    setProjectsPageClick(false);
    setGuestsBook(false);
  };
  const [profExpPage, setProfExpPageClick] = React.useState(false);
  const handleProfExpPageClick = (event) => {
    event.preventDefault();

    setProfExpPageClick(true);
    setAboutMePageClick(false);
    setIdiomsPageClick(false);
    setProjectsPageClick(false);
    setGuestsBook(false);
  };
  const [projectsPage, setProjectsPageClick] = React.useState(false);
  const handleProjectsPageClick = (event) => {
    event.preventDefault();

    setProjectsPageClick(true);
    setAboutMePageClick(false);
    setIdiomsPageClick(false);
    setProfExpPageClick(false);
    setGuestsBook(false);
  };
  // Guests Book
  const [guestsBook, setGuestsBook] = React.useState(false);
  const handleGuestsBookClick = (event) => {
    event.preventDefault();

    setGuestsBook(true);
    setProjectsPageClick(false);
    setAboutMePageClick(false);
    setIdiomsPageClick(false);
    setProfExpPageClick(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <NavBar
          handleAboutPageClick={handleAboutPageClick}
          handleIdiomsPageClick={handleIdiomsPageClick}
          handleProfExpPageClick={handleProfExpPageClick}
          handleProjectsPageClick={handleProjectsPageClick}
        />
      </header>
      <main className="App-main">
        {aboutMePage && <LandingPage />}
        {idiomsPage && <Idioms_INDEX />}
        {profExpPage && <ProfEXP_INDEX />}
        {projectsPage && <Projects_INDEX />}
        <Social_INDEX />
        <GuestsBook_Btn handleGuestsBookClick={handleGuestsBookClick} />
        {guestsBook && <GuestsBook />}
      </main>
      <footer className="App-footer">
        <p className="copyright">
          © Alan Graton Lourenço de Brito - 2022 -
          <a className="contact-link" href="mailto:" targe="_blank">
            graton.alan.@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
