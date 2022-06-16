import React from 'react';

const toggle = () => {
    return {type: 'toggle'}
}

export const LightSwitch = (props) => {

    const {state, dispatch} = props;

    const handleLightSwitchClick = () => {
        dispatch(toggle());
        
    }

    return (
        <button onClick={handleLightSwitchClick}>
            {state}
        </button>
    )
}
