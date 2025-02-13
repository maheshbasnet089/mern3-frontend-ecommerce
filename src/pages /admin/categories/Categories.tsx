import AdminLayout from "../AdminLayout"
import CategoryTable from "./components/Table"
import { useEffect, useState } from "react"
import { API } from "../../../http"
import { fetchCategoryItems } from "../../../store/adminCategorySlice"
import { useAppDispatch, useAppSelector } from "../../../store/hooks"


export interface ICategory{
    id : string, 
    categoryName : string
}

function Categories(){
    const dispatch = useAppDispatch()
    const {items:categories} = useAppSelector((store)=>store.categories)
    useEffect(()=>{
        dispatch(fetchCategoryItems())
    },[])
    return (
        <AdminLayout>
            <CategoryTable categories={categories} />

        </AdminLayout>
    )
}

export default Categories