import { useState } from 'react'
import './App.css'

import { Route, Routes } from 'react-router'

import SignIn from './components/signIn/SignIn'
import Signup from './components/signUp/SignUp'
import HomeBox from './components/homeBox/HomeBox'
import ChatBox from './components/chatBox/ChatBox'

function App() {


  return (
    <>
      {/* <SignIn/> */}
      {/* <SignUp/> */}
      <Routes>
        <Route path='/' element={<SignIn />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/home' element={<HomeBox />}></Route>
        <Route path='/chat' element={<ChatBox />}></Route>
      </Routes>
    </>
  )
}

export default App