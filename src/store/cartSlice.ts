import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { ICartInitialState, ICartItem } from "../pages /cart/types";
import { Status } from "../globals/types/type";
import { AppDispatch } from "./store";
import  { APIWITHTOKEN } from "../http";


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

export function addToCart(productId:string){
    return async function addToCartThunk(dispatch:AppDispatch){
        try {
            const response = await APIWITHTOKEN.post("/cart",{
                productId : productId, 
                quantity : 1
            })
            if(response.status === 200){
                dispatch(setStatus(Status.SUCCESS))
                dispatch(setItems(response.data.data))
            }else{
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            console.log(error)
            dispatch(setStatus(Status.ERROR))
        }
    }
}

export function fetchCartItems(){
    return async function fetchCartItemsThunk(dispatch:AppDispatch){
        try {
            const response = await APIWITHTOKEN.get("/cart")
            if(response.status === 200){
                dispatch(setItems(response.data.data))
                dispatch(setStatus(Status.SUCCESS))
            }else{
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            console.log(error)
            dispatch(setStatus(Status.ERROR))
        }
    }
}