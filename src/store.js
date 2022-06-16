import { createStore } from 'redux';

const initialState = 'off';
const lightSwitchReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'toggle': {
            return state === 'off' ? 'on' : 'off';
        }
        default: {
            return state
        }
    }
}

export const store = createStore(lightSwitchReducer)