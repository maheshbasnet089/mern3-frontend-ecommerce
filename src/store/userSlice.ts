import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { User } from "./types";




const userInfo:User = {
    name : "manish basnet", 
    age : 22
}

const userSlice = createSlice({
    name : "user", 
    initialState : userInfo, 
    reducers : {
        setName(state:User,action:PayloadAction<string>){
            state.name = action.payload // Hari bahadur
        }, 
        setAge(state:User,action:PayloadAction<number>){
            state.age = action.payload // 100
        }
    }
})
// actions 
export const {setName,setAge} = userSlice.actions
export default userSlice.reducer

