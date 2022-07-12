import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase-config';
import store from '../app/store';

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
            { store.getState().ask != "" &&
                <div>
                    <br /><br /><hr />
                    <div className="row">
                        <div style={{fontFamily: 'Fredericka the Great'}} className="col-6 mx-auto shadow rounded bg-dark text-light">
                            <h1>Question</h1>
                            <h3>{store.getState().ask.ask}</h3>

                            <h1>Answer</h1>
                            <h3>{store.getState().ask.response}</h3>

                            <hr />
                            <h3>Sign in for longer conversations</h3>
                        </div>
                    </div>
                </div>
            }

            <div className="row">

                <div style={{borderRadius: '10px'}} className="col-4 shadow mx-auto mt-5 pl-4 pr-4 pb-4 text-left">

                    <h3 className="mt-4">Sign in</h3>

                    <p>Education on your time</p>

                    <input type="text" onChange={handleOnChangeEmail} value={logInEmail} placeholder="Email" className="form-control mb-5" />
                    <input type="password" onChange={handleOnChangePassword} value={logInPassword} placeholder="Password" className="form-control mb-5" />

                    <button style={{backgroundColor: '#F18000'}} className="btn w-100 text-white font-weight-bold" onClick={logIn}>Log In</button>

                    

                </div>

            </div>

            <div className="col-6 mt-5 mx-auto mb-5">
                        <p>New to Asklana?</p> <a href="/register"> Join now</a>
            </div>

        </div>
    )
}