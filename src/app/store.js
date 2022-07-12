import { configureStore } from '@reduxjs/toolkit'

import chatReducer from '../features/chat/chatSlice';
import optionsReducer from '../features/options/optionsSlice';
import askReducer from '../features/ask/askSlice';


const store = configureStore({
    reducer: {
        chat: chatReducer,
        conversation: optionsReducer,
        ask: askReducer
    }
});

export default store;