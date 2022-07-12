import React, { useState } from 'react';
import { LandingCards } from "./LandingCards";
import { useDispatch } from 'react-redux';
import { addAsk, addResponse } from '../features/ask/askSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export const Landing = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [askText, setAskText] = useState("");
    // const [isLoading, setLoading] = useState(true);

    const handleAskTextChange = (event) => {
        setAskText(event.target.value);
    }

    const handleAskClick = () => {  

        axios.post('http://localhost:4001/apiTest', {message: askText})
        .then(res => {
            const response = res.data.responseOut;
            dispatch(addAsk(askText));
            dispatch(addResponse(response));
            navigate("/login");
        })
        .catch(err => {
            console.log(err)
        });
        

        
        
        
    }

    return (
        <div style={{width: '70vw', marginLeft: 'auto', marginRight: 'auto'}} className="container">
            <div className="row">
                <div style={{border: 'solid', borderColor: 'orange'}} className='col-6 rounded p-1 mb-3 mx-auto'>
                    <div className="row">
                        
                        <div className="col-9 pl-3 pr-1">
                            <input 
                                placeholder='Get help with any question...' 
                                type="text" 
                                style={{
                                    border: 0, 
                                    outline: 'none', 
                                    height: '100%', 
                                    width: '100%'
                                }} 
                                value={askText}
                                onChange={handleAskTextChange}
                                
                            />
                        </div>

                        <div className="col-3 pr-3 pl-0">
                            <button 
                                style={{
                                    fontWeight: 'bold', 
                                    backgroundColor: '#F18000', 
                                    color: 'white'
                                }}

                                onClick={handleAskClick}

                                className="btn w-100">
                                    
                                    Ask
                                
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            <div style={{backgroundImage: "url(/chalkboard.png)", backgroundRepeat: 'no-repeat', height: '22vw', backgroundSize: "100%", width: '100%', fontFamily: 'Fredericka the Great', color: 'white'}} className="row-fluid">
                <div style={{marginLeft: '5vw', paddingTop: '3vw'}} className="col-6 text-left">

                    
                    <h5 style={{fontSize: '1.5vw'}} >24/7 COURSE SUPPORT</h5>
                    <h1 style={{fontSize: '3.5vw'}} >Learn with Lana</h1>
                    <h4 style={{fontSize: '1.8vw'}} >From first day to finals, get homework help and exam prep.</h4>
                    
                    {/* Landing page 'Learn with Lana' Get Started button */}
                    <a  href="/register" 
                        style={{
                            borderRadius: '30px', 
                            color: 'white', 
                            backgroundColor: '#F18000', 
                            fontFamily: 'arial', 
                            fontSize: '1vw', 
                            fontWeight: 'bold'
                        }} 
                        
                        className="btn"
                    >
                            
                            Get started
                            
                    </a>

                </div>
            </div>
            <br />
            <h1 style={{fontWeight: 'bold'}} >Study time, crunch time, anytime.</h1>

            <LandingCards />

            <a href="/register" style={{borderRadius: '30px', color: 'white', backgroundColor: '#F18000', fontFamily: 'arial', fontSize: '1vw', fontWeight: 'bold'}} className="btn">Sign up</a>

            <br />
            <br />
        </div>
    )
}