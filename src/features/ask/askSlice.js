import { createSlice } from '@reduxjs/toolkit';

const ask = {
    name: 'ask',
    initialState: "",
    reducers: {
        addAsk: (state, action) => {
            return action.payload;
        }
    }

}

export const askSlice = createSlice(ask);

export const {

    addAsk

} = askSlice.actions;

export default askSlice.reducer;
