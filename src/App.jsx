import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import ExploreMenu from './components/ExploreMenu/ExploreMenu';
import StoreContextProvider from './context/StoreContext';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
const App = () => {

  const [showLogin , setShowLogin] = useState(false)
  return (
    <>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : <></>}
    <div className='app'>
    
      <BrowserRouter>
      <StoreContextProvider>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
    <Route path="/" element={<Home/>} /> 
    <Route path="/cart" element={<Cart/>} /> 
    <Route path="/order" element={<PlaceOrder/>} /> 
  </Routes>

      </StoreContextProvider>
 
</BrowserRouter>

    </div>
    <Footer/>
    </>

  )
}

export default App