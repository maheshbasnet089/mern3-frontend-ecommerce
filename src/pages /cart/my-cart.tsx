import Navbar from "../../globals/components/Navbar"
import { handleCartItemDelete, handleCartItemUpdate } from "../../store/cartSlice"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import store from "../../store/store"


function MyCart(){
    const {items} = useAppSelector((store)=>store.cart)
    const dispatch = useAppDispatch()
    const handleUpdate = (productId:string,quantity:number)=>{
        dispatch(handleCartItemUpdate(productId,quantity))
    }
    const handleDelete = (productId:string)=>{
        dispatch(handleCartItemDelete(productId))
    }
    const subTotal = items.reduce((total,item)=>item.Product.productPrice * item.quantity + total,0)
    const totalQtyInCarts = items.reduce((total,item)=>item.quantity + total, 0)
    const shippingPrice = 100
    const total = subTotal + shippingPrice

    return ( 
        <>
        <Navbar />
  <div className="bg-gray-100 h-screen py-8">
  <div className="container mx-auto px-4">
    <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
    <div className="flex flex-col md:flex-row gap-4">
      <div className="md:w-3/4">
        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left font-semibold">Product</th>
                <th className="text-left font-semibold">Price</th>
                <th className="text-left font-semibold">Quantity</th>
                <th className="text-left font-semibold">Total</th>
              </tr>
            </thead>
            <tbody>
              {
                items.length > 0 && items.map((item)=>{
                    return ( 
                        <tr>
                <td className="py-4">
                  <div className="flex items-center">
                    <img className="h-16 w-16 mr-4" src={`http://localhost:3000/${item.Product?.productImageUrl}`} alt="Product image" />
                    <span className="font-semibold">{item.Product.productName}</span>
                  </div>
                </td>
                <td className="py-4">Rs. {item.Product.productPrice}</td>
                <td className="py-4">
                  <div className="flex items-center">
                    <button className="border rounded-md py-2 px-4 mr-2" onClick={()=>handleUpdate(item.Product.id,item.quantity - 1)}>-</button>
                    <span className="text-center w-8">{item.quantity}</span>
                    <button className="border rounded-md py-2 px-4 ml-2" onClick={()=>handleUpdate(item.Product.id,item.quantity + 1)}>+</button>
                  </div>
                </td>
                <td className="py-4">{item.Product.productPrice * item?.quantity }</td>
                <td className="py-4">
                  <div className="flex items-center">
                    <button className="border rounded-md py-2 px-4 ml-2 bg-red-600 hover:bg-red-800" onClick={()=>handleDelete(item.Product.id)}>X</button>
                  </div>
                </td>
                
              </tr>

                    )
                })
              }
              
              {/* More product rows */}
            </tbody>
          </table>
        </div>
      </div>
      <div className="md:w-1/4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>Rs {subTotal}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Total Qty</span>
            <span>{totalQtyInCarts}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>Rs {shippingPrice}</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between mb-2">
            <span className="font-semibold">Total</span>
            <span className="font-semibold">Rs. {total}</span>
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default MyCart