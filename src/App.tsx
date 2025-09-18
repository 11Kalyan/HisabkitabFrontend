import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as React from "react"
import { Button } from './components/ui/button'

import  {BrowserRouter as Router,Routes,Route  } from "react-router-dom";

// imported customized componentes
import Layout from './Layout/Layout'


import Sidebar from './component/sidebar/Sidebar'
import Dashboard from './component/Dashboard/Dashboard'

import Menu from './component/Menu/Menu'
import Shop from './component/Shop/Shop'
import Order from './component/Order/Order'
import ViewOrder from './component/Order/components/ViewOrderList/View_order_list'





function App() {
 

  return (
   <>
   <Router>
    <Routes>
      
      <Route path="/" element={<Layout/>}>
      <Route path="/dashboard" element={<Dashboard/>}/>

      <Route path='/menu' element={<Menu/>}></Route>
      <Route path='/order' element={<Order/>}></Route>
      <Route path='/shop'  element={<Shop/>}></Route>
      <Route path='/view_orderd_page' element={<ViewOrder/>}></Route>

         
      </Route>
    </Routes>
   </Router>
   
   
   </> 
   
  )
}

export default App
