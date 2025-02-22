import { useEffect } from "react";
import { fetchOrders } from "../../../store/adminOrderSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import AdminLayout from "../AdminLayout";
import AdminOrderTable from "./components/AdminOrderTable";


function AdminOrder(){
    const dispatch = useAppDispatch()
    const {items} = useAppSelector((store)=>store.adminOrders)
     useEffect(()=>{
         dispatch(fetchOrders())
     },[])
    return (
        <AdminLayout>
            <AdminOrderTable orders={items}  />
        </AdminLayout>
    )
}

export default AdminOrder