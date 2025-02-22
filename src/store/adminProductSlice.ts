import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { Status } from "../globals/types/type";
import { AppDispatch, RootState } from "./store";
import { API, APIWITHTOKEN } from "../http";
import { IProduct } from "../pages /admin/products/components/ProductModal";
import { IProducts } from "../pages /product/types";


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
    status : Status, 
    product : null | IProductAdmin
}
const initialState:IInitialState = {
    products : [], 
    status : Status.LOADING, 
    product : null
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
        setProduct(state:IInitialState,action:PayloadAction<IProductAdmin>){
            state.product = action.payload
        }, 
    }
})

export const {setStatus,setProducts,addProductToProducts,setProduct} = productSlice.actions
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

export function fetchProductAdmin(id:string){
    return async function fetchProductAdminThunk(dispatch:AppDispatch,getState:()=>RootState){
        const store = getState()
        const productExists = store.adminProducts.products.find((product:IProductAdmin)=>product.id == id) 
     
        if(productExists){
            dispatch(setProduct(productExists))
            dispatch(setStatus(Status.SUCCESS))
        }else{
            try {
                const response = await API.get("/product/" + id)
                if(response.status === 200){
                    dispatch(setStatus(Status.SUCCESS))
                    dispatch(setProduct( response.data.data))
                }else{
                    dispatch(setStatus(Status.ERROR))
                }
            } catch (error) {
                console.log(error)
                dispatch(setStatus(Status.ERROR))
            }
        }
    }
}