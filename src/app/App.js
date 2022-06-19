import '../App.css';
import { Navbar } from '../components/Navbar.tsx';
import { Logo } from '../components/Logo.tsx';
import { TextBox } from '../features/textBox/TextBox.tsx';
import { ConversationBox } from '../features/conversationBox/ConversationBox.tsx';
import { Options } from '../features/Options.tsx';

function App(props) {

  const {state, dispatch} = props;

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Logo />
        <ConversationBox 
          conversationBox={state.textBox}
          dispatch = {dispatch}
        />
        <TextBox 
          dispatch={dispatch}
        />
        <Options />
      </div>
    </div>
  );
}

export default App;
