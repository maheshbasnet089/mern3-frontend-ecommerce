import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { Status } from "../globals/types/type";
import { AppDispatch } from "./store";
import { APIWITHTOKEN } from "../http";
import { IProduct } from "../pages /admin/products/components/ProductModal";


export interface IProductAdmin{
    id : string, 
    productName : string, 
    productPrice : number, 
    productTotalStock : number, 
    productDescription : string, 
    productImageUrl : string, 
    createAt : string, 
    categoryId : string
    discount : number, 

    Category : {
        categoryName : string
    }
}

interface IInitialState{
    products : IProductAdmin[], 
    status : Status
}
const initialState:IInitialState = {
    products : [], 
    status : Status.LOADING
}

const productSlice = createSlice({
    name : "adminProducts", 
    initialState, 
    reducers : {
        setStatus(state:IInitialState,action:PayloadAction<Status>){
            state.status = action.payload
        }, 
        setProducts(state:IInitialState,action:PayloadAction<IProductAdmin[]>){
            state.products = action.payload
        }, 
        addProductToProducts(state:IInitialState,action:PayloadAction<IProductAdmin>){
            state.products.push(action.payload)
        }, 
    }
})

export const {setStatus,setProducts,addProductToProducts} = productSlice.actions
export default productSlice.reducer 

export function fetchProducts(){
    return async function fetchProductsThunk(dispatch:AppDispatch){
      try {
        const response = await APIWITHTOKEN.get("/product")
        if(response.status === 200){
        
            dispatch(setProducts(response.data.data))
        }else{
            dispatch(setStatus(Status.ERROR))
        }
      } catch (error) {
        dispatch(setStatus(Status.ERROR))
      }
    }
}
export function addProduct(data :IProduct){
    return async function addProduct(dispatch:AppDispatch){
      try {
        const response = await APIWITHTOKEN.post("/product",data,{
            headers : {
                "Content-Type" : "multipart/form-data"
            }
        })
        if(response.status === 200){
            dispatch(setStatus(Status.SUCCESS))
            dispatch(addProductToProducts(response.data.data))
        }else{
            dispatch(setStatus(Status.ERROR))
        }
      } catch (error) {
        dispatch(setStatus(Status.ERROR))
      }
    }
}