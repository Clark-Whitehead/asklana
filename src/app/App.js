import '../App.css';
import { useState } from 'react'
import { createUserWithEmailAndPassword,
          onAuthStateChanged,
          signInWithEmailAndPassword,
          signOut} from 'firebase/auth';
import { auth } from './firebase-config';


function App() {

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
    
  }

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  }

  const logout = async () => {
    await signOut(auth);
  }

  const handleRegisterEmailChange = (event) => {
    setRegisterEmail(event.target.value);
  }

  const handleRegisterPasswordChange = (event) => {
    setRegisterPassword(event.target.value);
  }

  const handleLoginEmailChange = (event) => {
    setLoginEmail(event.target.value);
  }

  const handleLoginPasswordChange = (event) => {
    setLoginPassword(event.target.value);
  }

  return (
    <div className="App">
      <div>
        <h3> Register User </h3>
        <input placeholder="Email..." onChange={handleRegisterEmailChange}/>
        <input placeholder='Password...' onChange={handleRegisterPasswordChange}/>

        <button onClick={register}> Create User </button>
      </div>

      <div>
        <h3> Login </h3>
        <input placeholder="Email..." onChange={handleLoginEmailChange}/>
        <input placeholder='Password...' onChange={handleLoginPasswordChange}/>

        <button onClick={login}> Login </button>
      </div>

      <h4> User Logged In: </h4>
      {user?.email}
      <button onClick={logout}> Sign Out </button>
    </div>
  );
}

export default App;
