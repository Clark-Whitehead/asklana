import { createSlice } from '@reduxjs/toolkit';

const ask = {
    name: 'ask',
    initialState: {ask: "", response: ""},
    reducers: {
        addAsk: (state, action) => {
            return {...state, ask: action.payload};
        },
        addResponse: (state, action) => {
            return {...state, response: action.payload};
        }
    }

}

export const askSlice = createSlice(ask);

export const {

    addAsk,
    addResponse

} = askSlice.actions;

export default askSlice.reducer;
