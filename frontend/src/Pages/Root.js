import React from 'react'
import { Outlet } from 'react-router-dom';
import MainNav from '../Components/Navs/MainNav';
import Footer from '../Components/Footer/Footer';

const Root = () => {
  return (
    <>
    <MainNav/>
    <Outlet/>
    <Footer/>
  </>
  )
}

export default Root
