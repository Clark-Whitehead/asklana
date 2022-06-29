import React from 'react';
import './css/ShareModal.css';

export const ShareModal = ({closeModal}) => {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={() => closeModal(false)}> X </button>
                </div>
                <div className="title">
                    <h1>Would you like to share?</h1>
                </div>
                <div className="body">
                    <p>The next page is awesome</p>
                </div>
                <div className="footer">
                    <button id="cancelBtn" onClick={() => closeModal(false)}>Cancel</button>
                    <button>Continue</button>
                </div>
            </div>
        </div>
    )
}