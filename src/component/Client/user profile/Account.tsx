import { User, Luggage, UserRoundPen, ScrollText } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Outlet, useLocation } from 'react-router-dom'

const Account:React.FC=()=> {
    const location = useLocation();

  return (
    <div className='bg-[#E5E5E5] px-12 py-10 mt-16'>
      <div className='flex flex-col w-full h-full bg-white p-3 '>
        {/* container 1 */}
        <div className='flex w-full border-b border-gray-500 py-3'>
            <div className='flex justify-between w-full'>
                <div className='flex'>
                    <User fill='black' size={40}/>
                    <div>
                        <h1>Burhan Ahmed</h1>
                        <p>Mo.burhanahmed.10dec@gmail.com</p>
                    </div>
                </div>
                <button className='border border-black hover:bg-black hover:text-white px-12 text-sm rounded-sm'>SIGN OUT</button>                
            </div>
        </div>

        {/* container 2 */}
        <div className='p-5 flex gap-3'>
            {/* box 1 */}
            <div className='flex flex-col bg-[#E5E5E5] w-1/4 p-4 rounded-md gap-3'>
                {/* cards */}
                <Link className={` ${location.pathname.includes('/account/profile') ? 'bg-black text-white' : 'hover:bg-gray-300'} py-4 px-2  flex gap-3 items-center rounded-md transition-all duration-300`} to={'profile'}>
                    <UserRoundPen strokeWidth={0.7} size={45}/>
                    <div className=''>
                        <h1>My Profile</h1>
                        <p className='text-sm'>See your info here.</p>
                    </div>
                    <div className={`${location.pathname.includes('/account/profile')? '': 'hidden'} h-full flex flex-grow justify-end`}><div className='w-1 rounded-lg bg-white  '></div></div>
                </Link>

                <Link className={` ${location.pathname.includes('/account/orders') ? 'bg-black text-white' : 'hover:bg-gray-300'} py-4 px-2  flex gap-3 items-center rounded-md transition-all duration-300`} to={'orders'}>
                    <Luggage strokeWidth={0.7} size={45}/>
                    <div className=''>
                        <h1>My Orders</h1>
                        <p className='text-sm'>Check you order status</p>
                    </div>
                    <div className={`${location.pathname.includes('/account/orders') ? '': 'hidden'} h-full flex flex-grow justify-end`}><div className='w-1 rounded-lg bg-white  '></div></div>
                </Link>

                <Link className={` ${location.pathname.includes('/account/wishlist') ? 'bg-black text-white' : 'hover:bg-gray-300'} py-4 px-2  flex gap-3 items-center rounded-md transition-all duration-300`} to={'wishlist'}>
                    <ScrollText strokeWidth={0.7} size={45}/>
                    <div className=''>
                        <h1>My WishList</h1>
                        <p className='text-sm'>Check your wishlist</p>
                    </div>
                    <div className={`${location.pathname.includes('/account/wishlist')? '': 'hidden'} h-full flex flex-grow justify-end`}><div className='w-1 rounded-lg bg-white  '></div></div>
                </Link>
            </div>
            {/* box 2 */}
           <Outlet/>

        </div>

      </div>
    </div>
  )
}

export default Account