import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Product from './components/Product/Product';
import Contactus from './components/Contactus/Contactus';
import BuyProduct from './components/BuyProduct/BuyProduct';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Register />} />
          <Route path='/product' element={<Product />} />
          <Route path='/purchaseproduct' element={<BuyProduct />} />

          <Route path='/contact' element={<Contactus />} />


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App