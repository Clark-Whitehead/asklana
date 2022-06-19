const initialState = 'Lana: Hi there! What do you need help with?';

export const conversationBoxReducer = (conversationBox = initialState, action) => {
    switch (action.type) {
        case 'addHuman': {
            return conversationBox + "\n\n" + "Human: " + action.payload;
        }
        case 'restart': {
            return initialState;
        }
        default: {
            return conversationBox;
        }
    }
}

export function addTextHuman(text) {
    return {
        type: 'addHuman',
        payload: text
    }
}

export function restart() {
    return {
        type: 'restart'
    }
}