import '../App.css';
import { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Logo } from '../components/Logo.tsx';
import { TextBox } from '../features/chat/textBox/TextBox.js';
import { ConversationBox } from '../features/chat/conversationBox/ConversationBox.js';
import { Options } from '../features/options/Options.js';
import { Conversations } from '../components/Conversations';
import { Conversation } from '../components/Conversation';
import { Footer } from '../components/Footer.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NoMatch } from '../components/NoMatch.js'
import { Register } from '../components/Register.js';
import { LogIn } from '../components/LogIn.js';
import { Landing } from '../components/Landing';
import { auth } from '../firebase-config';
import { onAuthStateChanged } from 'firebase/auth';

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
  // const isMobile = width <= 768;
  const isMobile = width <= 1000;
  ///////////////////////////////////////////////////

  //////////Set user to firebase user/////////////
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })
  ////////////////////////////////////////////////

  if (isMobile) {
    return (
      <h1>Sorry, this site is under construction until Aug 1st 2022. You must use a device with a larger screen until then.</h1>
    )
  } else {
    return (
      <div className="App page-container">
        <div className="content-wrap">
          <Navbar />
          <div className="container">
            <Router>
              <Routes>
                {/*Landing page*/}
                {!user && <Route
                  path="/"
                  element={
                    <Landing />
                  }
                />}

                {/*Lana chatbot homepage */}
                {user && <Route 
                    path="/" 
                    element={
                      <div>
                        <Logo />
                        <div 
                          style={{
                            backgroundImage: 'url("https://likeastorm.com/wp-content/uploads/2016/06/grunge-metal-background.jpg")', 
                            borderRadius: '20px',
                            backgroundSize: 'cover'
                          }} 
                          className="border border-secondary mb-3">
                          <ConversationBox />          
                          <TextBox />
                          <Options />
                        </div>
                      </div>
                    } 
                />}
                <Route 
                  path="/conversations/:category"
                  element={<Conversations />}
                />
                
                <Route 
                  path="/conversations/conversation/:conversationId"
                  element={<Conversation />} 
                />

                {/*Register new user route*/}
                <Route path="/register" element={<Register />} />

                {/*User log in route*/}
                <Route path="/login" element={<LogIn />} />                

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
