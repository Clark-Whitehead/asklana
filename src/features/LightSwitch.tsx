import React from 'react';

const toggle = () => {
    return {type: 'toggle'}
}

export const LightSwitch = (props) => {

    const state = props.state;

    const handleLightSwitchClick = () => {
        store.dispatch(toggle());
        
    }

    return (
        <button onClick={handleLightSwitchClick}>
            on
        </button>
    )
}
