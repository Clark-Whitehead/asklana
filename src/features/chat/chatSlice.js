import { createSlice } from '@reduxjs/toolkit';

const options = {
    name: 'chat',
    initialState: {id: 0, chat: 'Lana: Hi there! What do you need help with?'},
    reducers: {
        addHuman: (state, action) => {
            state.chat += "\n\n" + "Human: " + action.payload + "\n\nLana: ";
        },
        addAi: (state, action) => {
            state.chat += action.payload;
            state.id++;
        },
        setChat: (state, action) => {
            state.chat = action.payload;
        },
        decrement: (state, action) => {
            state.id--;
        },
        increment: (state, action) => {
            state.id++;
        },
        restart: (state, action) => {
            return {id: 0, chat: 'Lana: Hi there! What do you need help with?'};
        }
    }
}

export const chatSlice = createSlice(options)

export const selectChat = (state) => state.chat.chat;
export const selectIdx = (state) => state.chat.id;

export const {

    addHuman, 
    addAi, 
    setChat,
    decrement,
    increment,
    restart

} = chatSlice.actions;

export default chatSlice.reducer