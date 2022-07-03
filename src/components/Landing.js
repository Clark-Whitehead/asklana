import React, { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase-config';

export const Landing = () => {

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })

    return (
        <h1>Landing Page</h1>
    )
}