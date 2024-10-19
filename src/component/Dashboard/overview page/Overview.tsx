import React from 'react'
import NavBar from '../NavBar'
import Cards from '../Cards'
import SalesChart from './SalesChart'
import { MoveRight, Star } from 'lucide-react'
import ToggleGroup from './ToggleGroup'


const Overview: React.FC = ()=> {
    
  return (      
    <div className=' flex justify-center '>         
      <div className='flex flex-col xl:flex-row gap-3 '>      
          {/* container 1 */}          
          <div className='flex flex-col gap-3 '>
            
            <div>
            <h1 className='text-[3vw] translate-y-4 underline underline-offset-8 decoration-accent decoration-2'>Hello Admin ! </h1>      
              <ToggleGroup/>
              <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3  items-center justify-center sm:gap-x-2 gap-y-3'>            
                <Cards text="Sales"/>
                <Cards text="Total Orders"/>
                <Cards text="Total product sold"/>
                <Cards text="Total product sold"/>
                <Cards text="Total Active users"/>
                <Cards text="Total Active users"/>
              </div>                                
            </div>
            <SalesChart/>                
        </div>   
      {/* container 2 */}
          <div className='xl:mt-16'>
            <div className='grid gap-3'>

              {/* --------------- Order card ----------------------- */}
            <div className='rounded-lg p-3 xl:w-[330px] border border-borderC bg-background'>
              <div className='px-1 flex items-center justify-between'>
                <h1 className='font-semibold text-[2vw] '>Orders</h1>
            
                <button className='text-[2vw] sm:text-xs flex gap-1 items-center font-semibold hover:scale-105 transition-transform duration-300'>See All <MoveRight size={15}/></button>
              </div>

              <div className='flex flex-col text-[1vw]'>
                <div className='flex justify-between border p-3'>
                  <span>Total Pending Orders</span>
                  <span className='bg-red-200 text-red-600 rounded-md px-1'>1234</span>
                </div>
                <div className='flex justify-between border p-3'>
                  <span>Completed Orders</span>
                  <span className='bg-green-200 text-green-700 rounded-md px-1'>1234</span>
                </div>

              </div>
            </div>
    {/* --------------- products card ----------------------- */}
          <div className=' rounded-lg p-3 xl:w-[330px] border border-borderC bg-background'>
              <div className='px-1 flex items-center justify-between'>
                <h1 className='font-semibold text-[2vw]'>Products</h1>
                <button className='text-[2vw] sm:text-xs flex gap-1 items-center  font-semibold hover:scale-105 transition-transform duration-300'>See All <MoveRight size={15}/></button>
              </div>

              <div className='flex flex-col text-[1vw]'>
                <div className='flex justify-between border p-3'>
                  <span>Listed Products</span>
                  <span className='bg-purple-200 text-purple-700 rounded-md px-1'>1234</span>
                </div>
                <div className='flex justify-between border p-3'>
                  <span>sold out products</span>
                  <span className='bg-yellow-200 text-yellow-700 rounded-md px-1'>1234</span>
                </div>

              </div>
            </div>

        {/* --------------- products Review card ----------------------- */}
          <div className=' rounded-lg p-3 xl:w-[330px] border border-borderC bg-background'>
              <div className='px-1 flex items-center justify-between'>
                <h1 className='font-semibold text-[2vw]'>Recent Reviews</h1>
                <button className='flex text-[2vw] sm:text-xs whitespace-nowrap gap-1 items-center  font-semibold hover:scale-105 transition-transform duration-300'>See All <MoveRight size={15}/></button>
              </div>
              
              <div className='flex flex-col mt-4'>
                <div className='flex gap-3 justify-between border max-h-20 overflow-hidden'>
                  <span className='flex gap-1 items-center'>4.5 <Star color='orange' size={15}/></span>
                  <span className='text-[1vw]'>Good product Lorem ipsum dolor, sit amet consectetur adipisicing elit. A ullam expedita voluptate!</span>                  
                </div>

              </div>
            </div>

            </div>
            
          </div>
      </div>    
    </div>    
  )
}

export default Overview
