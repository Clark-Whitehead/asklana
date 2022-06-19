import { createStore, combineReducers } from 'redux';
// import { lightSwitchReducer } from '../features/lightSwitchSlice.js';
import { textBoxReducer } from '../features/textBox/textBoxSlice.js';



export const store = createStore(combineReducers({
    textBox: textBoxReducer
}));