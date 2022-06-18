import '../App.css';
import { Navbar } from '../components/Navbar.tsx';
import { Logo } from '../components/Logo.tsx';
import { TextBox } from '../features/TextBox.tsx';
import { ConversationBox } from '../features/ConversationBox.tsx';
import { Options } from '../features/Options.tsx';


function App(props) {

  return (
    <div className="App">
      <Navbar />
      <Logo />
      <ConversationBox />
      <TextBox />
      <Options />
    </div>
  );
}

export default App;
