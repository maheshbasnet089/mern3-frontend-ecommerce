
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Register from './pages /user/Register'
import { Provider } from 'react-redux'
import store from './store/store'
import Home from './pages /home/Home'
import Login from './pages /user/Login'
import Product from './pages /product/Product'
import SingleProduct from './pages /single-product/SingleProduct'
import MyCart from './pages /cart/my-cart'
import Checkout from './pages /checkout/Checkout'
import MyOrder from './pages /my-orders/MyOrder'
import MyOrderDetail from './pages /my-orders-details/MyOrderDetail'
import AdminIndex from './pages /admin/AdminLayout'
import Categories from './pages /admin/categories/Categories'
import AdminLayout from './pages /admin/AdminLayout'
import AdminStats from './pages /admin/stats/AdminStats'
import User from './pages /admin/users/Users'
import AdminProduct from './pages /admin/products/Product'
import ProductDescription from './pages /admin/productDescription/ProductDescription'
import AdminOrder from './pages /admin/orders/AdminOrder'
import AdminOrderDetail from './pages /admin/order-details/AdminOrderDetails'
import { io } from 'socket.io-client'
export const socket = io("http://localhost:3000",{
  auth : {
    token  : localStorage.getItem("tokenHoYo")
  }
})


function App() {

  return (
  <Provider store={store}>
     <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/register' element={<Register />}/>
    <Route path='/login' element={<Login />}/>
    <Route path='/products' element={<Product />}/>
    <Route path='/products/:id' element={<SingleProduct />}/>
    <Route path="/my-cart" element={<MyCart />} />
    <Route path="/my-checkout" element={<Checkout />} />
    <Route path="/my-orders" element={<MyOrder />} />
    <Route path="/my-orders/:id" element={<MyOrderDetail />} />
    <Route path='/admin' element={<AdminStats />} />
    <Route path='/admin/categories' element={<Categories />} />
    <Route path='/admin/users' element={<User />} />
    <Route path='/admin/products' element={<AdminProduct />} />
    <Route path='/admin/orders' element={<AdminOrder />} />
    <Route path='/admin/products/:id' element={<ProductDescription />} />
    <Route path='/admin/orders/:id' element={<AdminOrderDetail />} />
    </Routes>
    </BrowserRouter>
  </Provider>
  )
}

export default App
