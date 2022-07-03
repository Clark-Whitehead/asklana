import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase-config';

export const Register = () => {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const [user, setUser] = useState({});

    let navigate = useNavigate();

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })

    const handleOnChangeEmail = (e) => {
        setRegisterEmail(e.target.value);
    }

    const handleOnChangePassword = (e) => {
        setRegisterPassword(e.target.value);
    }

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            navigate('/');
        } catch (error) {
            console.log(error.message);
        }
    }



    return (
        <div>
            <h3> Register User </h3>
            <input type="text" onChange={handleOnChangeEmail} value={registerEmail} placeholder="Email..." />
            <input type="password" onChange={handleOnChangePassword} value={registerPassword} placeholder="Password..." />

            <button onClick={register}>Create User</button>

            <br />

            <h1>{user?.email}</h1>
            
        </div>
    )
}