import React, {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Products } from './components/products'
import { Footer } from './components/Footer'
import { Cart } from './components/cart'
import { HeaderTwo } from './components/Header2'
import { Checkout } from './components/checkout'
import { HeaderOne } from './components/header1'
import { HomeImg } from './components/home'
import { Bottom } from './components/bottom'
import { Ads } from './components/ads'
import { BG } from './components/bg'
import Details from './components/productdetails'
import ConfirmPayment from './components/confirm'
const App = () => {
  const [cartItem,setCartItem] = useState([]) 
  return(
    <div className=''>
 <Router>
  <BG />
  <HeaderOne  cartItem={cartItem}/>
  <HeaderTwo cartItem={cartItem} />
  {/* <Ads /> */}
  {/* <HomeImg /> */}
      <Routes>
        
        <Route path='/' element={<Products cartItem={cartItem} setCartItem={setCartItem} />} />
        <Route path='/cart' element={<Cart cartItem={cartItem} setCartItem={setCartItem} />} />
        <Route path='/checkout' element={<Checkout cartItem={cartItem} setCartItem={setCartItem}/>} />
        <Route path='/details/:id' element={<Details cartItem={cartItem} setCartItem={setCartItem} />} />


      </Routes>
      <Footer />
      <Bottom cartItem={cartItem} />
    </Router>
    </div>
  )
}
 

  
export default App
