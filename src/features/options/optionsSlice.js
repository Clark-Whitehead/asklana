import { createSlice } from '@reduxjs/toolkit';

const options = {
    name: 'saved',
    initialState: ['Lana: Hi there! What do you need help with?'],
    reducers: {
        addResponse: (state, action) => {
            return [...state.slice(0, action.payload.id), action.payload.chat];
        },
        // reset: (state, action) => {
        //     return options.initialState;
        // }

    }
}

export const optionsSlice = createSlice(options);

export const selectConvo = (state) => state.conversation;

export const {

    addResponse,
    // reset

} = optionsSlice.actions;

export default optionsSlice.reducer