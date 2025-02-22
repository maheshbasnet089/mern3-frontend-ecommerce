import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { Status } from "../globals/types/type";
import { AppDispatch } from "./store";
import { APIWITHTOKEN } from "../http";
import {IOrderDetail, PaymentMethod, PaymentStatus } from "../pages /my-orders-details/types";
export interface IAdminOrder{
    id : string,
    productQty : number, 
    orderStatus? : string, 
    totalAmount?:number, 
    Payment? : {
        paymentMethod : PaymentMethod,
        paymentStatus : PaymentStatus 
        
    }
}
interface IInitialState{
    items : IAdminOrder[], 
    status : Status, 
    orderDetails : IOrderDetail[]
}
const initialState:IInitialState = {
    status : Status.LOADING, 
    items : [], 
    orderDetails : []
}

const orderSlice = createSlice({
    name : "adminOrders", 
    initialState, 
    reducers : {
        setItems(state:IInitialState, action:PayloadAction<IAdminOrder[]>){
            state.items = action.payload
        }, 
        setOrderDetails(state:IInitialState, action:PayloadAction<IOrderDetail[]>){
            state.orderDetails = action.payload
        }, 
        setStatus(state:IInitialState,action:PayloadAction<Status>){
            state.status = action.payload
        }, 

        // updateOrderStatusToCancel(state:IOrder, action: PayloadAction<{orderId:string}>){
        //     const orderId = action.payload.orderId
        //     // state.items.map((item)=>item.)
        //     // console.log(state.items,"ST")
        //     // const data =  state.orderDetails.map((order)=>order.orderId == orderId ? {...order, [order.Order.orderStatus] : OrderStatus.Cancelled} : order)
        //     const datas = state.orderDetails.find((order)=>order.orderId === orderId)
        //     datas ? datas.Order.orderStatus = OrderStatus.Cancelled : ""
        //     // state.orderDetails = data
           
        // }
    }
})

export default orderSlice.reducer
const {setItems,setStatus,setOrderDetails} = orderSlice.actions

export function fetchOrders(){
    return async function fetchOrdersThunk(dispatch:AppDispatch){
        try {
            const response =  await APIWITHTOKEN.get("/order/all")
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

export function fetchAdminOrderDetails(id:string){
    return async function fetchAdminOrderDetailsThunk(dispatch:AppDispatch){
        try {
            const response =  await APIWITHTOKEN.get("/order/" + id)
            if(response.status === 200){
                dispatch(setStatus(Status.SUCCESS))
                dispatch(setOrderDetails(response.data.data))
            }else{
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            console.log(error)
            dispatch(setStatus(Status.ERROR))
            
        }
    }
}
// export function cancelOrderAPI(id:string){
//     return async function cancelOrderAPIThunk(dispatch:AppDispatch){
//         try {
//             const response =  await APIWITHTOKEN.patch("/order/cancel-order/" + id)
//             if(response.status === 200){
//                 dispatch(setStatus(Status.SUCCESS))
//                 dispatch(updateOrderStatusToCancel({orderId : id}))
//             }else{
//                 dispatch(setStatus(Status.ERROR))
//             }
//         } catch (error) {
//             console.log(error)
//             dispatch(setStatus(Status.ERROR))
            
//         }
//     }
// }