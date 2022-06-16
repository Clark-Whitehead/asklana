import React from 'react';
import { store } from '../store.js';

const toggle = () => {
    return {type: 'toggle'}
}

export const LightSwitch = (props) => {

    // let state = props.state;

    const handleLightSwitchClick = () => {
        store.dispatch(toggle());
        
    }

    return (
        <button onClick={handleLightSwitchClick}>
            {store.getState()}
        </button>
    )
}
