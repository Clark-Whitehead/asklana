const initialState = 'Lana: Hi there! What do you need help with?';

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addHuman': {
            return state + "\n\n" + "Human: " + action.payload;
        }
        case 'addAi': {
            return state + "\n\n" + "Lana: " + action.payload;
        }
        case 'restart': {
            return initialState;
        }
        default: {
            return state;
        }
    }
}

export function addTextHuman(text) {
    return {
        type: 'addHuman',
        payload: text
    }
}

export function addTextAi(text) {
    return {
        type: 'addAi',
        payload: text
    }
}

export function restart() {
    return {
        type: 'restart'
    }
}

export const selectChat = (state) => state.chat;