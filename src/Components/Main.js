import React from 'react'
import Header from './Header/Header';
import {Route, Routes, } from 'react-router-dom'
import Orders from './Orders/Orders';
import BurgerBuilder from './burgerBuilder/burgerBuilder'
import CheckOut from './Orders/CheckOut/CheckOut'
import Auth from './Auth/Auth';


 const Main = props => {
  return (
    <div>
        <Header/>
       <div className='container'>
       <Routes>
            <Route path='/' exact element={<BurgerBuilder/>}></Route>
            <Route path='/Orders' element={<Orders/>}></Route>
            <Route path='/login' element={<Auth/>}></Route>
            <Route path='CheckOut' element={<CheckOut/>}></Route>
       </Routes>
       </div>
    </div>
  )
}
export default Main;
