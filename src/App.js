import lotr from './lotr.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={lotr} className="lotr-ring" alt="lord of the rings" />
        <p>
          Welcome Adventurer
        </p>
        <a
          className="register-link"
          href="./components/Register.js"
          target=""
          rel="noopener noreferrer"
        >
          Register/Login
        </a>
      </header>
    </div>
  );
}

export default App;
