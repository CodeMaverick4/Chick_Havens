import React, { Dispatch, SetStateAction } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

const Admin:React.FC = ()=> {
  
  return (  
    <div className='relative bg-background font-mono pb-10 text-text' >        
        <NavBar />
        <Outlet/>
    </div>
  )
}

export default Admin
