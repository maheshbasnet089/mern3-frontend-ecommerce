import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import userSlice from "./userSlice";


const store = configureStore({
    reducer : {
        haha : productSlice, 
        hehe : userSlice, 
    }
})

export default store 