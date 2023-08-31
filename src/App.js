import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { Route, Routes } from "react-router-dom"
import AllProducts from "./pages/AllProducts"
import CartPage from './components/CartPage'
import MyCart from './components/MyCart'
import Login from './components/Login'
import Register from './components/Register'

const App = () => {
  return (
    <>
    <div className='overflow-y-hidden no-scrollbar'>
      <Routes>
        <Route index element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contacts' element={<Contact />} />
        <Route path='/products' element={<AllProducts />} />
        <Route path='/cartPage' element={<CartPage />} />
        <Route path='/myCart' element={<MyCart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
    </>
  )
}

export default App;