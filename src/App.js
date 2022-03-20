import "./App.css";

// Header
import NavBar from "./pages/LandingPage/components/Navbar/Navbar.jsx";

// Body Components
import Idioms_INDEX from "./pages/LandingPage/Idioms/Idioms_Index";
// import ProfEXP_INDEX from "./pages/LandingPage/ProfessionalEXP/ProfessionalEXP_Index";
// import Langs_INDEX from "./pages/LandingPage/ProgrammingLANGS/ProgrammingLANGS_Index";
// import Projects_INDEX from "./pages/LandingPage/ProjectsDEV/ProjectsDEV_Index";
// import Social_INDEX from "./pages/LandingPage/SocialMEDIA/SocialMEDIA_Index";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main className="App-main">
        <Idioms_INDEX />
      </main>
      <footer className="App-footer">
        <p className="copyright">© Alan Graton Lourenço de Brito - 2022</p>
      </footer>
    </div>
  );
}

export default App;
