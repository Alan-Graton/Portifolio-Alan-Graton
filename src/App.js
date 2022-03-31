import "./App.css";

// Header
import NavBar from "./pages/LandingPage/components/Navbar/Navbar.jsx";

// Navbar Buttons
import Idioms_INDEX from "./pages/LandingPage/Idioms/Idioms_Index";
// import ProfEXP_INDEX from "./pages/LandingPage/ProfessionalEXP/ProfessionalEXP_Index";
import Projects_INDEX from "./pages/LandingPage/ProjectsDEV/ProjectsDEV_Index";
// import Social_INDEX from "./pages/LandingPage/SocialMEDIA/SocialMEDIA_Index";

// Main Components
import LandingPage from "./pages/LandingPage/index.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main className="App-main">
        {/* <LandingPage /> */}
        <Projects_INDEX />
        {/* <Idioms_INDEX /> */}
      </main>
      <footer className="App-footer">
        <p className="copyright">© Alan Graton Lourenço de Brito - 2022</p>
      </footer>
    </div>
  );
}

export default App;
