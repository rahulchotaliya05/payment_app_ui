import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';


const Navbar = ({setshowlogin}) => {

  const [list,setlist]=useState("home");
  
 

  return (
    
    <div className='navbar' >
        
      <Link to="/"><img src={assets.logo} alt='Logo '  className='logo'/></Link>
      <ul className="navbar-list">
        <Link to='/' onClick={()=>setlist("home")} className={list==="home"?"active":""}>home</Link>
        <a href='#services' onClick={()=>setlist("services")} className={list==="services"?"active":""}>Services</a>
        <a href='#app-download' onClick={()=>setlist("mobile-app")} className={list==="mobile-app"?"active":""}>mobile-app</a>
        <a  href='#footer' onClick={()=>setlist("contact-us")} className={list==="contact-us"?"active":""}>contact us</a>
      </ul>
      <div className='navbar-right'>
       
       
       <button onClick={() => {
    setshowlogin(true);
   
}}>
    Sign in
</button>
      </div>
    </div>
    
  )
}

export default Navbar
