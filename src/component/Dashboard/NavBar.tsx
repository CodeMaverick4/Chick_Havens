// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import PrimButton from './primary_button';
// import { CircleUserRound, Ellipsis, Eye, Globe, Settings} from 'lucide-react';
// import Iconwithspan from './Iconwithspan';

// const NavBar: React.FC = ()=> {
//   const location = useLocation();
//   const currentPath = location.pathname;
  
//   const isActive = (path:string) => {
//     return currentPath === path ? "bg-black text-white" : "hover:bg-purple-700 hover:text-white";
//   }

//   return (
//     <nav className='flex relative items-center py-3  sm:px-6 border border-black rounded-lg' >
//         <h1 className='font-serif text-[3vw]'>Chic <span className='text-purple-600'>Haven</span><span className='font-extralight font-mono'>s</span></h1>
        
//         {/* <Ellipsis size={30} className='lg:hidden absolute left-1/2 -translate-x-1/2'/> */}
//       <div className=' hidden lg:flex absolute left-1/2 -translate-x-1/2  items-center justify-center gap-3 border border-black rounded-3xl'>
      
//         <Link className={`${isActive('/')} p-3  rounded-3xl transition-all duration-700`} to='/'>Overview</Link>
//         <Link className={`${isActive('/products')} p-3  rounded-3xl transition-all duration-700`} to='/products'>Products</Link>
//         <Link className={`${isActive('/orders')} p-3  rounded-3xl transition-all duration-700`} to='/orders'>Orders</Link>
//         <Link className={`${isActive('/customers')} p-3  rounded-3xl transition-all duration-700`} to='/customers'>Customers</Link>
//         </div>
//     <div className='absolute flex items-center gap-4 right-11 cursor-pointer'>
//         <div className='hidden sm:block'>
//         <PrimButton icon={<Eye size={20}/>} text="Open Website" />
//         </div>
//         <div className='sm:hidden'>
//         <Iconwithspan icon={<Globe color="purple" />} text='website' abovePosition={false}/>

//         </div>
        
//         <Iconwithspan icon={<Settings color="purple" />} text='Setting' abovePosition={false}/>
//         <Iconwithspan icon={<CircleUserRound color='purple'/>} text='Profile' abovePosition={false}/>
//     </div>
//     </nav>
//   )
// }

// export default NavBar




import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PrimButton from './primary_button';
import { CircleUserRound, Ellipsis, Eye, Globe, Settings, Sun, SunMoon} from 'lucide-react';
import Iconwithspan from './Iconwithspan';


const NavBar: React.FC = ()=> {
  const [darkMode, setnavDarkMode] = useState<boolean>(false);
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(()=>{
      document.documentElement.classList.toggle('dark');
  }
    ,[darkMode])

  return (
    <nav className='flex items-center justify-between pt-1 sm:px-6 border-b border-borderC rounded-lg bg-background '  >
        <div className=''>
        {/* <h1 className='font-serif text-[3vw]'>Chic <span className='text-purple-600'>Haven</span><span className='font-extralight font-mono'>s</span></h1> */}
        {darkMode ? <Link to={''}><img src="/newLogoWhite.svg" alt="" className='w-16 lg:w-32 ' /></Link>:
        <Link to={''}><img src="/newLogo.svg" alt="" className='w-16 lg:w-32 ' /></Link>}
        </div>
        {/* <Ellipsis size={30} className='lg:hidden absolute left-1/2 -translate-x-1/2'/> */}
      <div className='hidden lg:flex items-center justify-center gap-3 border border-borderC rounded-3xl '>      
        <Link className={` ${currentPath.includes('/overview')  ? 'bg-primary': ''} p-3  rounded-3xl transition-all duration-700 `} to='overview'>Overview</Link>
        <Link className={` ${currentPath.includes('/products') ? 'bg-primary': ''} p-3  rounded-3xl transition-all duration-700`} to='products'>Products</Link>
        <Link className={` ${currentPath.includes('/orders') ? 'bg-primary': ''} p-3  rounded-3xl transition-all duration-700`} to='orders'>Orders</Link>
        <Link className={` ${currentPath.includes('/customers') ? 'bg-primary': ''} p-3  rounded-3xl transition-all duration-700`} to='customers'>Customers</Link>
      </div>
    <div className=' flex items-center gap-4 right-11 cursor-pointer'>
        <div className='hidden sm:block'>
          <Link to={'/shop'}><PrimButton icon={<Eye size={20} className='text-accent'/>} text="Open Website" /></Link>
        </div>
        <div className='sm:hidden'>
          <Iconwithspan icon={<Globe color="purple" />} text='website' abovePosition={false}/>
        </div>
        
        {darkMode ? <Iconwithspan icon={<Sun color="purple" />} text='Light Mood' abovePosition={false} handleClick={()=>setnavDarkMode(!darkMode)}/> 
        :
        <Iconwithspan icon={<SunMoon color="purple" />} text='Dark Mood' abovePosition={false} handleClick={()=>setnavDarkMode(!darkMode)}/>

        }
        <Iconwithspan icon={<Settings color="purple" />} text='Setting' abovePosition={false}/>
        <Iconwithspan icon={<CircleUserRound color='purple'/>} text='Profile' abovePosition={false}/>
    </div>
    </nav>
  )
}

export default NavBar