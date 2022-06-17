import '../App.css';
import { Navbar } from '../components/Navbar.tsx';
import { LightSwitch } from '../features/LightSwitch.tsx';

function App(props) {

  const {state, dispatch} = props;

  return (
    <div className="App">
      <Navbar />
	<h1>tyler </h1>
      <LightSwitch 
        state={state}
        dispatch={dispatch}
      />
    </div>
  );
}

export default App;
