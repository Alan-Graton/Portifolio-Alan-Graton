import Gitlogo from './Gitlogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Gitlogo} className="App-logo" alt="logo" />
        <p>
          Site Portifólio de Alan Graton Lourenço de Brito
        </p>
        <a
          className="App-link"
          href="https://github.com/Alan-Graton"
          target="_blank"
          rel="noopener noreferrer"
        >
          Meu GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
