import React from 'react'
import CustomerBarChart from './BarGraph';
import Customer_Data_table from './customer_table';
import { ArrowDownUp, Search } from 'lucide-react';
import Cards from '../Cards';
import ProductFilter from '../products page/ProductFilter';

const Customer:React.FC = () => {
  return (
    
    <div className='flex flex-col  mt-4 px-20'>        
      <div className='text-[2vw]  uppercase flex gap-2 underline underline-offset-8 decoration-accent decoration-2'>Customers:</div>
        
      <div className='flex flex-col flex-grow-0'>          
          {/* <div className='flex gap-2 items-center justify-end shadow-lg px-3 py-4'>
              <input className='w-96 border border-borderC rounded-md text-base px-2 py-3 outline-none transition-transform duration-300' type="search" name="" id="" placeholder='write name or number...'/>
              <button className='flex items-center gap-2 border border-borderC px-3 py-3 rounded-md  bg-primary text-text'><ArrowDownUp size={15} />Search</button>
          </div> */}
          <div className='flex gap-3 mt-5 '>
            <div className='w-64 shadow-lg'><ProductFilter /></div>
            
            <div className='flex-grow shadow-lg border border-borderC rounded-lg '>
                
                <div className='flex gap-2 items-center justify-between px-3 py-4'>
                  <span className='text-[2vw]'>Total Customers: <span className='text-accent'>13546</span></span>
                  <div className='flex gap-2'>
                    <input className='w-64 bg-background border border-borderC rounded-md text-base px-2 py-3 outline-none transition-transform duration-300' type="search" name="" id="" placeholder='write name or number...'/>
                    <button className='flex items-center gap-2 border border-borderC px-3 py-3 rounded-md  bg-primary text-text'><Search size={15} />Search</button>
                  </div>
                </div>
                <div className='rounded-lg px-3'><Customer_Data_table /></div>
            </div>
            </div>
      </div>
      
      <div className='mt-10'>
        <CustomerBarChart />
      </div>
    </div>
      
    
  )
}

export default Customer;