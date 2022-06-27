import '../App.css';
import { Navbar } from '../components/Navbar.tsx';
import { Logo } from '../components/Logo.tsx';
import { TextBox } from '../features/chat/textBox/TextBox.js';
import { ConversationBox } from '../features/chat/conversationBox/ConversationBox.tsx';
import { Options } from '../features/options/Options.js';
import { Footer } from '../components/Footer.js';

function App() {

  return (
      <div className="App page-container">
        <div className="content-wrap">
          <Navbar />
          <div className="container">
            <Logo />
            <ConversationBox />          
            <TextBox />
            <Options />
          </div>
        </div>
        <Footer />
      </div>
  );
}

export default App;
