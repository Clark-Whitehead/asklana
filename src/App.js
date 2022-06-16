import logo from '../logo.svg';
import '../App.css';
import { Navbar } from '../components/Navbar.tsx';
import { store } from './store.js';
import { LightSwitch } from './components/LightSwitch.tsx';

const state = store.getState();

function App() {
  return (
    <div className="App">
      <Navbar />
      <LightSwitch state={state}/>
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
