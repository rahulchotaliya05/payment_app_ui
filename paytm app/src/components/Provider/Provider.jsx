import React from 'react'
import { company_list } from '../../assets/assets'
import './Provider.css'
const Provider = () => {
  return (
    <>
    <div className="main">
    <div className='provider' id='services'>
        <div className="header">
       
        <h2 style={{color:'red'}}>Service Providers</h2>
        <p style={{fontWeight:800}}>take a world best service from the our app and enjoy </p>
        </div>
        </div>
        
    {company_list.map((item, index) => (
        <div  className='provider-items' key={index}>
            <img src={item.com_img} alt={item.com_name} />
        </div>
    ))}
    </div>
    </>


  )
}

export default Provider
