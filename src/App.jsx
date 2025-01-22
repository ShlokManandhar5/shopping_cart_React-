import React from 'react'
import Navbar from './Components/Nav'
import ProductCard from './Components/ProductCard'
import OurServices from './Components/OurServices'
import FillForm from './Components/FillForm'
import {BrowserRouter, Routes ,Route} from'react-router-dom'
import ShopCart from './Components/ShopCart'
import OurServicesPrac from './Components/OurServicesPrac'


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Navbar/><OurServices/></>}/>
          <Route path='/shoes' element ={<><Navbar/><OurServices/></>}/>
          <Route path='/feature' element ={<><Navbar/><OurServicesPrac/></>}/>
          <Route path='/contact' element= {<><Navbar/><FillForm/></>}/>
          <Route path='/shopcart' element={<><Navbar/><ShopCart/></>}/>
          </Routes>
      </BrowserRouter>
      {/* <FillForm/> */}
    </div>
  )
}

export default App
