import '../App.css';
import { Navbar } from '../components/Navbar.tsx';
import { Logo } from '../components/Logo.tsx';
import { TextBox } from '../features/chat/textBox/TextBox.js';
import { ConversationBox } from '../features/chat/conversationBox/ConversationBox.tsx';
import { Options } from '../features/options/Options.js';
import { Conversations } from '../components/Conversations';
import { Footer } from '../components/Footer.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
      <div className="App page-container">
        <div className="content-wrap">
          <Navbar />
          <div className="container">
            <Router>
              <Routes>
                <Route 
                    path="/" 
                    element={
                      <div>
                        <Logo />
                        <ConversationBox />          
                        <TextBox />
                        <Options />
                      </div>
                    } 
                />
                <Route 
                  path="/conversations"
                  element={<Conversations />}
                />
              </Routes>
            </Router>
          </div>
        </div>
        <Footer />
      </div>
  );
}

export default App;
