const initialState = 'off';

export const lightSwitchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'toggle': {
            return state === 'off' ? 'on' : 'off';
        }
        default: {
            return state;
        }
    }
}