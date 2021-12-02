import Gitlogo from "./Gitlogo.png";
import "./App.css";

// Landing Page
import Landing_INDEX from "./pages/LandingPage/LandingPage_Index";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Gitlogo} className="App-logo" alt="logo" />
        <p>Site Portifólio de Alan Graton Lourenço de Brito</p>
        <a
          className="App-link"
          href="https://github.com/Alan-Graton"
          target="_blank"
          rel="noopener noreferrer"
        >
          Meu GitHub
        </a>
      </header>
      <body bgcolor="grey">
        <Landing_INDEX />
      </body>
    </div>
  );
}

export default App;
