import '../App.css';
import { Navbar } from '../components/Navbar.tsx';
import { Logo } from '../components/Logo.tsx';
import { TextBox } from '../features/chat/textBox/TextBox.js';
import { ConversationBox } from '../features/chat/conversationBox/ConversationBox.tsx';
import { Options } from '../features/Options.tsx';

function App() {

  return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Logo />
          <ConversationBox />          
          <TextBox />
          <Options />
        </div>
      </div>
  );
}

export default App;
