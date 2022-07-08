import React, { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase-config';

export const Landing = () => {

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })

    return (
        <div style={{width: '70vw', marginLeft: 'auto', marginRight: 'auto'}} className="container">
            <div className="row">
                <div style={{border: 'solid', borderColor: 'orange'}} className='col-6 rounded p-1 mb-3 mx-auto'>
                    <div className="row">
                        <div className="col-9 pl-3 pr-1">
                            <input placeholder='Get an answer...' type="text" style={{border: 0, outline: 'none', height: '100%', width: '100%'}} />
                        </div>
                        <div className="col-3 pr-3 pl-0">
                            <button style={{fontWeight: 'bold', backgroundColor: '#F18000', color: 'white'}} className="btn w-100">Ask</button>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage: "url(/chalkboard.png)", backgroundRepeat: 'no-repeat', height: '100%', backgroundSize: "100%", width: '100%', fontFamily: 'Fredericka the Great', color: 'white'}} className="row-fluid">
                <div className="col-4 text-left">

                    
                    <h5 style={{fontSize: '1.25em'}}>24/7 COURSE SUPPORT</h5>
                    <h1>Learn with Lana</h1>

                </div>
            </div>
        </div>
    )
}