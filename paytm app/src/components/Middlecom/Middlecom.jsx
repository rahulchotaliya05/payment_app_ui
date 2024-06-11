import React from 'react'
import { assets } from '../../assets/assets'
import './Middlecom.css'
const Middlecom = () => {
  return (
    <div className="container" >
    <div className="support-items">

       
        <div className="support-text">
        <img src={assets.support} alt="" />
        </div>
     <div>
            <h3>10 years Experience</h3>
            <p>Experience</p>
        </div>

        <div className="support-text">
        <img src={assets.support} alt="" />
        </div>
     <div>
            <h3>Fully Secured</h3>
            <p>Instantaneous payments</p>
        </div>

     <div className="support-text">
     <img src={assets.support   } alt="" />
     </div>
     <div>
            <h3>Support</h3>
            <p>Online 24/7</p>
        </div>


    </div>

    </div>
  )
}

export default Middlecom
