
import React, { useState } from 'react'

import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import LoginPopUp from './components/LoginPopUp/LoginPopUp.jsx'
import Home from './pages/Home/Home.jsx'


const App = () => {
  const [showligin,setshowlogin]=useState(false)
  return (
    <>
    {showligin?<LoginPopUp setshowlogin={setshowlogin}/>:<></>}
    <div className='app'>
     <Navbar setshowlogin={setshowlogin} />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<LoginPopUp />} />
      
      </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App
