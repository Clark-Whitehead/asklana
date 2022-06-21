import { createStore, combineReducers } from 'redux';
import { chatReducer } from '../features/chat/chatSlice';

const rootReducer = combineReducers({
    chat: chatReducer,
})

export const store = createStore(rootReducer);