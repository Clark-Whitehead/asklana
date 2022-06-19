const initialState = 'Lana: Hi there! What do you need help with?';

export const conversationBoxReducer = (conversationBox = initialState, action) => {
    switch (action.type) {
        case 'add': {
            return (conversationBox + "\n" + action.payload);
        }
        default: {
            return conversationBox;
        }
    }
}

export function addText(text) {
    return {
        type: 'add',
        payload: text
    }
}