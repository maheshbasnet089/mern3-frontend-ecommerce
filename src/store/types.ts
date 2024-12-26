

export interface User{
    name : string, 
    age : number 
}

interface ProductInfo{
    productName : string, 
    qty : number
}
export interface Product{
    products : [] | ProductInfo[]
}