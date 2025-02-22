import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
import checkoutSlice from "./checkoutSlice";
import adminCategorySlice from "./adminCategorySlice";
import adminUserSlice from "./adminUserSlice";


const store = configureStore({
    reducer : {
        auth : authSlice, 
        products : productSlice, 
        cart : cartSlice, 
        orders : checkoutSlice, 
        categories : adminCategorySlice, 
        users : adminUserSlice
    }
})

export default store 
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>


