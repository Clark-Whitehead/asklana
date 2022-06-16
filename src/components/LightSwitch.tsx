import React from 'react';

const toggle = () => {
    return {type: 'toggle'}
}

export const LightSwitch = (props) => {

    const {state, dispatch} = props;

    const handleLightSwitchClick = () => {
        alert("clark")
        store.dispatch(toggle());
        
    }

    return (
        <button onClick={handleLightSwitchClick}>
            clark
        </button>
    )
}
