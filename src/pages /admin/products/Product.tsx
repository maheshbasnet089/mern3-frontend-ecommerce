import { useEffect } from "react";
import AdminLayout from "../AdminLayout";
import ProductTable from "./components/ProductTable";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { fetchProducts } from "../../../store/adminProductSlice";


function AdminProduct(){
   const dispatch = useAppDispatch()
   const {products} = useAppSelector((store)=>store.adminProducts)
    useEffect(()=>{
        dispatch(fetchProducts())
    },[])
    return(

        <AdminLayout>
            <ProductTable products={products} />
        </AdminLayout>
    )
}

export default AdminProduct