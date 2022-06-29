import '../App.css';
import { useState, useEffect } from 'react';
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
import { Register } from '../components/Register.js';

function App() {

  //////////CHECK IF ON MOBILE DEVICE//////////////
  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);
  const isMobile = width <= 768;
  ///////////////////////////////////////////////////

  if (isMobile) {
    return (
      <h1>You must use on a larger screen such as a laptop</h1>
    )
  } else {
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
                        <div style={{backgroundColor: '#DBDBDB', borderRadius: '20px'}} className="border border-secondary mb-3">
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

                {/*Auth Route*/}
                <Route path="/register" element={<Register />} />

                <Route path="*" element={<NoMatch />} />
              </Routes>
            </Router>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  
}

export default App;
