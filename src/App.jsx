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
const App = () => {
  const [cartItem,setCartItem] = useState([]) 
  return(
    <div>
 <Router>
  <HeaderTwo />
      <Routes>
        
        <Route path='/' element={<Products cartItem={cartItem} setCartItem={setCartItem} />} />
        <Route path='/cart' element={<Cart cartItem={cartItem} setCartItem={setCartItem} />} />
        <Route path='/checkout' element={<Checkout/>} />
      </Routes>
      <Footer />
    </Router>
    </div>
  )
}
 

  
export default App
