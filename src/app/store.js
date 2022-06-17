import { createStore } from 'redux';
import { lightSwitchReducer } from '../features/lightSwitchSlice.js';


export const store = createStore(lightSwitchReducer)