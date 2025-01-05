import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";


const store = configureStore({
    reducer : {
        auth : authSlice
    }
})

export default store 
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>


