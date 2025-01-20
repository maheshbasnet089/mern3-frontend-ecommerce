import axios from 'axios'

const API = axios.create({
    baseURL : "http://localhost:3000/api", 
    headers : {
        "Content-Type" : "application/json", 
        "Accept" : "application/json" 
    }
})

const APIWITHTOKEN = axios.create({
    baseURL : "http://localhost:3000/api", 
    headers : {
        "Content-Type" : "application/json", 
        "Accept" : "application/json" , 
        "Authorization" : localStorage.getItem("tokenHoYo")
    }
})

export {API,APIWITHTOKEN}