import '../App.css';
import { Navbar } from '../components/Navbar.tsx';
import { Logo } from '../components/Logo.tsx';
import { TextBox } from '../features/chat/textBox/TextBox.js';
import { ConversationBox } from '../features/chat/conversationBox/ConversationBox.tsx';
import { Options } from '../features/options/Options.js';
import { Conversations } from '../components/Conversations';
import { Conversation } from '../components/Conversation';
import { Footer } from '../components/Footer.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NoMatch } from '../components/NoMatch.js'

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
                        <div style={{backgroundColor: '#DBDBDB'}} className="border border-secondary rounded mb-3">
                          <ConversationBox />          
                          <TextBox />
                          <Options />
                        </div>
                      </div>
                    } 
                />
                <Route 
                  path="/conversations"
                  element={<Conversations />}
                />
                
                <Route path="/conversations/conversation/:conversationId" element={<Conversation />} />
                <Route path="*" element={<NoMatch />} />
              </Routes>
            </Router>
          </div>
        </div>
        <Footer />
      </div>
  );
}

export default App;
