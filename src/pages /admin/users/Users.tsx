import { useEffect } from "react";
import AdminLayout from "../AdminLayout";
import UserTable from "./components/UserTable";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { fetchUsers } from "../../../store/adminUserSlice";


function User(){
    const dispatch = useAppDispatch()
    const {users} = useAppSelector((store)=>store.users)
    useEffect(()=>{
        dispatch(fetchUsers())
    },[])
    return (
        <AdminLayout>
            <UserTable users={users} />
        </AdminLayout>
    )
}

export default User