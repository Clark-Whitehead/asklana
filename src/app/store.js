import { createStore, combineReducers } from 'redux';
// import { lightSwitchReducer } from '../features/lightSwitchSlice.js';
// import { textBoxReducer } from '../features/textBox/textBoxSlice.js';
import { conversationBox, conversationBoxReducer } from '../features/conversationBox/conversationBoxSlice.js';

export const store = createStore(combineReducers({
    conversationBox: conversationBoxReducer
  }));