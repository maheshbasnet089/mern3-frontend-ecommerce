
export enum OrderStatus{
    Preparation = "preparation", 
    Ontheway = "ontheway", 
    Delivered = "delivered", 
    Pending = "pending", 
    Cancelled = "cancelled"
}
export enum PaymentMethod{
    Khalti = "khalti", 
    Esewa = "esewa", 
    COD = "cod"
}

export enum PaymentStatus{
    Paid = "paid", 
    Unpaid = "unpaid"
}
export interface IOrderDetail {
    id: string,
    quantity: number,
    createdAt: string,
    
    orderId: string,
    productId: string,
    Order: {
        orderStatus: OrderStatus,
        AddressLine: string,
        City: string,
        State: string,
        totalAmount: number,
        phoneNumber: string,
        firstName : string, 
        lastName : string, 
        Payment: {
            paymentMethod: PaymentMethod,
            paymentStatus: PaymentStatus
        }
    },
    Product: {
        productImageUrl: string,
        productName: string,
        productPrice: number,
        Category: {
       
            categoryName: string,
      
        }
    }
}