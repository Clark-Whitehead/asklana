import { configureStore } from '@reduxjs/toolkit'

import chatReducer from '../features/chat/chatSlice';
import optionsReducer from '../features/options/optionsSlice';


const store = configureStore({
    reducer: {
        chat: chatReducer,
        conversation: optionsReducer
    }
});

export default store;