import '../App.css';
import { Navbar } from '../components/Navbar.tsx';
import { LightSwitch } from '../features/LightSwitch.tsx';
import { TicTacToeBoard } from '../components/TicTacToeBoard.tsx';

function App(props) {

  const {state, dispatch} = props;

  return (
    <div className="App">
      <Navbar />
	<h1>Kent</h1>
      <LightSwitch 
        state={state}
        dispatch={dispatch}
      />
      <br /><br />
      <TicTacToeBoard />
    </div>
  );
}

export default App;
