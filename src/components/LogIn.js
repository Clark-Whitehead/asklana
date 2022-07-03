import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase-config';

export const LogIn = () => {

    const [logInEmail, setLogInEmail] = useState("");
    const [logInPassword, setLogInPassword] = useState("");

    const [user, setUser] = useState({});

    let navigate = useNavigate();

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })

    const handleOnChangeEmail = (e) => {
        setLogInEmail(e.target.value);
    }

    const handleOnChangePassword = (e) => {
        setLogInPassword(e.target.value);
    }

    const logIn = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, logInEmail, logInPassword);
            navigate('/');
        } catch (error) {
            console.log(error.message);
        }
    }



    return (
        <div>
            <h3> Log in User </h3>
            <input type="text" onChange={handleOnChangeEmail} value={logInEmail} placeholder="Email..." />
            <input type="password" onChange={handleOnChangePassword} value={logInPassword} placeholder="Password..." />

            <button onClick={logIn}>Log In</button>

            <br />

            <h1>{user?.email}</h1>
            
        </div>
    )
}