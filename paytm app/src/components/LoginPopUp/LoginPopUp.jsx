import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'
const LoginPopUp = ({setshowlogin}) => {

  const [currState,setcurrState]=useState('Sign Up')
  return (
    <div className='login-popup' >
     <form className='login-popup-container' >
    <div className="login-popup-title">
      <h2>{currState}</h2>
      <img src={assets.cross_icon} onClick={()=>setshowlogin(false)} alt="" />
    </div>
    <div className="login-popup-input">
      {currState==="Login"?<></>: <input type="text"  placeholder='enter your name' required />}
     
      <input type="text"  placeholder='enter your email' required />
      <input type="password"  placeholder='enter your password' required />
    
    </div>
    <button>{currState==='Sign Up' ? "Create Account":"Login"}</button>
    <div className="login-popup-condition">
      <input type="checkbox" required />
      <p>By Coutinuing,i agree to the terms of use & privacy policy.</p>
    </div>
    {currState==='Login' ? 
    <p>Create a new account ? <span onClick={()=>setcurrState("Sign Up")}> Click here</span></p>
   : <p>Already have an account ?<span onClick={()=>setcurrState("Login")}> Login </span></p>
  }
     </form>
    </div>
  )
}

export default LoginPopUp
