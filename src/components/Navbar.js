import React, { useState } from 'react';
import { auth } from '../firebase-config';
import { onAuthStateChanged, signOut } from 'firebase/auth';


export const Navbar = () => {
    
    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })

    const handleLogOut = async () => {
        await signOut(auth)
    }

    return (
        
        <nav style={{backgroundColor: "#add8e6", marginBottom: 0}} className="navbar navbar-expand-md navbar-dark">
            <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                <ul className="navbar-nav mr-auto">
                    <li style={{marginRight: '10px'}} className="nav-item">
                        <a style={{color: "#006C81", fontFamily: 'arial', fontWeight: 'bold'}} className="nav-link" href="/">HOME</a>
                    </li>
                    <li style={{marginRight: '10px'}} className="nav-item">
                        <a style={{color: "#006C81", fontFamily: 'arial', fontWeight: 'bold'}} className="nav-link" href="/conversations">SHARED CONVERSATIONS</a>
                    </li>
                </ul>
            </div>
            <div className="mx-auto order-0">
                <a style={{color: "#0B043D", fontFamily: 'cursive', fontSize: '25px', fontWeight: 'bold'}} className="navbar-brand mx-auto" href="#">"Learning is Power" - Lana</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                {user === null && <ul className="navbar-nav ml-auto">
                    <li style={{marginRight: '10px'}} className="nav-item">
                        <a style={{color: "#006C81", fontFamily: 'arial', fontWeight: 'bold'}} className="nav-link" href="/login">LOGIN</a>
                    </li>
                    <li style={{marginRight: '10px'}} className="nav-item">
                        <a style={{color: "#006C81", fontFamily: 'arial', fontWeight: 'bold'}} className="nav-link" href="/register">REGISTER</a>
                    </li>
                </ul>}
                {user != null && <ul className="navbar-nav ml-auto">
                    <li style={{marginRight: '10px'}} className="nav-item">
                        <a onClick={handleLogOut} style={{color: "#006C81", fontFamily: 'arial', fontWeight: 'bold'}} className="nav-link" href="/">Log Out</a>
                    </li>
                </ul>}
            </div>
        </nav>
        
    );
    
}