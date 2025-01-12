
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Register from './pages /user/Register'
import { Provider } from 'react-redux'
import store from './store/store'
import Home from './pages /home/Home'
import Login from './pages /user/Login'
import Product from './pages /product/Product'

function App() {

  return (
  <Provider store={store}>
     <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/register' element={<Register />}/>
    <Route path='/login' element={<Login />}/>
    <Route path='/products' element={<Product />}/>
    
    </Routes>
    </BrowserRouter>
  </Provider>
  )
}

export default App
