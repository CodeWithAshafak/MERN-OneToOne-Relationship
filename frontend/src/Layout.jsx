import React from 'react'
import Header from './Componets/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Componets/Footer'

const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>

<Footer/>
    
    </>
  )
}

export default Layout