import { configureStore } from '@reduxjs/toolkit'

import chatReducer from '../features/chat/chatSlice';



const store = configureStore({
    reducer: {
        chat: chatReducer
    }
});

export default store;