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
        <div className="container mt-3">
            <nav style={{marginBottom: 0}} className="navbar-fluid navbar-expand navbar-light">
                <div className="row">
                    
                        <div className="order-0 col-3">
                            <a style={{color: "#F18000", fontFamily: 'Fredericka the Great', fontSize: '25px', fontWeight: 'bold'}} className="navbar-brand mx-auto" href="/">ASKLANA</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    
                    
                        <div className="navbar-collapse col-6 collapse w-100 order-1 order-md-0 dual-collapse2">
                            <ul className="navbar-nav mx-auto">
                                <li style={{marginRight: '10px'}} className="nav-item">
                                    <a style={{color: "black", fontFamily: 'arial', fontWeight: 'bold'}} className="nav-link" href="/">Math</a>
                                </li>
                                <li style={{marginRight: '10px'}} className="nav-item">
                                    <a style={{color: "black", fontFamily: 'arial', fontWeight: 'bold'}} className="nav-link" href="#">Chemistry</a>
                                </li>
                                <li style={{marginRight: '10px'}} className="nav-item">
                                    <a style={{color: "black", fontFamily: 'arial', fontWeight: 'bold'}} className="nav-link" href="#">Software</a>
                                </li>
                                <li style={{marginRight: '10px'}} className="nav-item">
                                    <a style={{color: "black", fontFamily: 'arial', fontWeight: 'bold'}} className="nav-link" href="#">Physics</a>
                                </li>
                            </ul>
                        </div>
                    
                    
                        <div className="navbar-collapse col-3 collapse w-100 order-3 dual-collapse2">
                            {!user && <ul className="navbar-nav ml-auto">
                                <li style={{marginRight: '10px'}} className="nav-item">
                                    <a style={{color: "black", fontFamily: 'arial', fontWeight: 'bold'}} className="nav-link" href="/login">Sign in</a>
                                </li>
                            </ul>}
                            {user && <ul className="navbar-nav ml-auto">
                                <li style={{marginRight: '10px'}} className="nav-item">
                                    <a onClick={handleLogOut} style={{color: "#006C81", fontFamily: 'arial', fontWeight: 'bold'}} className="nav-link" href="/">Log Out</a>
                                </li>
                            </ul>}
                        </div>
                    
                </div>
            </nav>
        </div>           
    );
    
}