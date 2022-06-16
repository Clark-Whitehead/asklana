import { createStore, combineReducers } from 'redux';
import { lightSwitchReducer } from '../features/lightSwitchSlice.js';


export const store = createStore(lightSwitchReducer)