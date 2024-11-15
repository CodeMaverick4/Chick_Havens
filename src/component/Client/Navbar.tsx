import { CircleUser, House, Shield, ShoppingCart, User } from 'lucide-react'
import React from 'react' 
import { Link, useLocation } from 'react-router-dom'

const Navbar:React.FC = ()=> {
  const location = useLocation();
  return (
    <div className={`fixed top-0 bg-white z-50 w-full flex items-center border-b border-black justify-between pl-2 lg:pl-10 pr-5`}>      
      <Link to={''}><img src="/newLogo.svg" alt="" className='w-16 lg:w-32 ' /></Link>      
      <div className='hidden lg:flex items-center gap-3'>
        <div className='grid justify-center pr-4'>
          <Link className={`peer`} to=''>Contact Us</Link>        
          <span className=' bg-orange-400 h-1 rounded-full w-3 peer-hover:w-full transition-[width] duration-300'></span>
        </div>
      
        <button className='border border-black py-3 px-5'>Login</button>        
        <button className="relative overflow-hidden bg-black text-white border py-3 px-5 border-black transition-all duration-500 ease-out group">
          <span className="absolute inset-0 bg-white transition-transform duration-500 ease-out transform translate-y-full group-hover:translate-y-0"></span>
          <span className="relative z-10 group-hover:text-black">Sign Up</span>          
        </button>

        {location.pathname.startsWith('/account') ? 
          <Link to={'shop'} className='flex items-center gap-2 cursor-pointer border border-black py-3 px-4'><House/> Home</Link>
          :
          <Link to={'account'} className='flex items-center gap-2 cursor-pointer border border-black py-3 px-4'><CircleUser/> Account</Link>                  

        }
        <Link to={'admin/overview'} className='flex items-center gap-2 cursor-pointer border border-black bg-gradient-to-r from-green-200 to-green-500 py-3 px-4'><Shield/> Admin Dashboard</Link>
        
      </div>

      <div className='lg:hidden flex gap-2'>
        <Link className='text-[1vw]' to=''>Contact Us</Link>        
        <Link to={'/account'} className='px-5 text-[1vw]'>Account</Link>
      </div>
      
    
    </div>
  )
}

export default Navbar
