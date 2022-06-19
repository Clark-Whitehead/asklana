const initialState = 'Lana: Hi there! What do you need help with?';

export const textBoxReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'add': {
            return state += "\n" + action.payload;
        }
        default: {
            return state;
        }
    }
}

export function addText(text) {
    return {
        type: 'add',
        payload: text
    }
}