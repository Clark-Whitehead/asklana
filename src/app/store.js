import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { lightSwitchReducer } from '../features/lightSwitchSlice.js';
import logger from 'redux-logger';

// export const store = createStore(lightSwitchReducer)

export const store = createStore(lightSwitchReducer, composeWithDevTools(
    applyMiddleware(logger)
));