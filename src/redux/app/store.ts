import { configureStore } from "@reduxjs/toolkit";
import postReducer from './../feature/postSlice'
export const store = configureStore({
    reducer:{
        allPost:postReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch