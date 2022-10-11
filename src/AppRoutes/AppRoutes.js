import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Signin from '../components/Signin/Signin';
import Signup from '../components/Signup/Signup';

function AppRoutes() {
  return (
   <>
   <Routes>
    <Route path ='/signin' element={<Signin/>}/>
    <Route path ='/signup' element={<Signup/>}/>

   </Routes>

   </>
  )
}

export default AppRoutes