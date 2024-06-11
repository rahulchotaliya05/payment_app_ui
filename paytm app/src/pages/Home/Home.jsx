import React from 'react'
import './Home.css'
import AppDownload from '../../components/AppDownload/AppDownload.jsx'
import Provider from '../../components/Provider/Provider.jsx'
import Middlecom from '../../components/Middlecom/Middlecom.jsx'
import Services from '../Services/Services.jsx'

const Home = () => {
  return (
    <>
    <Middlecom /> 
    <Provider />
    <Services />
    <AppDownload />
    </>
  )
}

export default Home
