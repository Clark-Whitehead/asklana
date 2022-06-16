import '../App.css';
import { Navbar } from '../components/Navbar.tsx';
import { store } from './store.js';
import { LightSwitch } from '../components/LightSwitch.tsx';

const state = store.getState();

function App() {
  return (
    <div className="App">
      <Navbar />
      <LightSwitch />
    </div>
  );
}

export default App;
