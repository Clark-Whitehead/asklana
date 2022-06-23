import { createSlice } from '@reduxjs/toolkit';

const options = {
    name: 'chat',
    initialState: 'Lana: Hi there! What do you need help with?',
    reducers: {
        addHuman: (state, action) => {
            return state + "\n\n" + "Human: " + action.payload + "\n\nLana: ";
        },
        addAi: (state, action) => {
            return state + action.payload;
        },
        restart: (state, action) => {
            return options.initialState;
        }
    }
}

export const chatSlice = createSlice(options)

export const selectChat = (state) => state.chat;

export const {

    addHuman, 
    addAi, 
    restart

} = chatSlice.actions;

export default chatSlice.reducer