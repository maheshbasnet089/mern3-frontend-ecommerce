import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { ICartInitialState, ICartItem } from "../pages /cart/types";
import { Status } from "../globals/types/type";
import { AppDispatch } from "./store";
import API from "../http";


const initialState:ICartInitialState = {
    items : [], 
    status : Status.LOADING
}
const cartSlice = createSlice({
    name : "cart", 
    initialState, 
    reducers : {
        setItems(state:ICartInitialState,action:PayloadAction<ICartItem[]>){
            state.items = action.payload
        }, 
        setStatus(state:ICartInitialState,action:PayloadAction<Status>){
            state.status = action.payload
        }
    }
})
export const {setItems,setStatus} = cartSlice.actions
export default cartSlice.reducer

function addToCart(){
    return async function addToCartThunk(dispatch:AppDispatch){
        try {
            const response = await APIWITH.post("/cart")
        } catch (error) {
            
        }
    }
}