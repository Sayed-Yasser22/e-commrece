import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './../../pages/Footer';

export default function Applayout() {
  return (
    <>
      <Navbar/>

      <Outlet/>

      <Footer/>

      
    </>
  )
}
