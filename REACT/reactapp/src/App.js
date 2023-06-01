import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Button from './components/Button';


function App() {
  const namea = "Anto" //esto es JavaScript

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React app de {namea}!
          <div><Button /></div>
          <Welcome />

        </a>
      </header>
    </div>
  );
}

export default App;
