import React from 'react'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Fetch from './components/Fetch'
import Create from './components/Create'
import UserData from './components/userData'



const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/fetch' element={<Fetch/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/userData' element={<UserData/>}/>

    
    </Routes>
    </BrowserRouter>


    </>
  )
}

export default App
