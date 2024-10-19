import React, { Dispatch, SetStateAction } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'



const Client:React.FC=()=> {
  return (
    <div className='bg-white font-serif'>
        <Navbar />
        <Outlet/>
      <Footer/>
    </div>
  )
}

export default Client
