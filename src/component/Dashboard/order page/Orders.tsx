import React, { useState } from 'react'
import ProductImageDetailView from './ProductImageDetailView'
import DeleteProductDialog from './DeleteDialogue';
import GridView from '../../GridView';
import AddProductDialog from './AddProduct';
import Cards from '../Cards';
import Orders_Data_table from './Orders_Data_table';

const Orders:React.FC = ()=>{
  const [isPhotoDialogueOpen,setDialogue] = useState<boolean>(false);
  const [deleteDialogue, setDeleteDialogue] = useState<boolean>(false);
  const [gridView, setGridView] = useState<boolean>(false);
  const [isSearch ,setSearch] = useState<boolean>(false);
  const [addProductDialog,setAddPrductDialogue] =useState<boolean>(false);
  
  const handleDeleteProduct = () => {
    // Logic to delete the product
    console.log("Product deleted");
    setDeleteDialogue(false);
  };

  return (
    <div className={`flex flex-col gap-10 sm:px-24 pb-10 pt-5 `}>      
    {/* data table navbar */}
      <div className='flex flex-wrap items-center justify-center sm:justify-between gap-3 lg:gap-0 '>        
          <div className='flex flex-wrap gap-3 items-center '>
            <h1 className='text-[2vw] font-bold underline underline-offset-8 decoration-accent decoration-2 uppercase'>Orders Management</h1>                        
          </div>          
        
      </div>
      
      <div className='flex gap-4 justify-center '>
        
        <div className='flex flex-wrap lg:flex-nowrap  gap-4 justify-center'>            

            <div className=' flex flex-col items-center  min-w-[265px] bg-secondary border border-black rounded-lg shadow-[1px_1px_0px_1px_#000000]'>
              <span className='text-[4vw]'>5</span>
              <span className='text-[1vw] font-semibold'>Total Orders</span>              
            </div>

            <div className='flex flex-col items-center justify-center min-w-[265px] bg-secondary border border-black rounded-lg shadow-[1px_1px_0px_1px_#000000]'>
              <span className='text-[4vw]'>4</span>
              <span className='text-[1vw] font-semibold'>Total Pending Orders</span>              
            </div>
            <div className='flex flex-col items-center justify-center min-w-[265px] bg-secondary border border-black rounded-lg shadow-[1px_1px_0px_1px_#000000]'>
              <span className='text-[4vw]'>5</span>
              <span className='text-[1vw] font-semibold'>Total Completed Orders</span>              
            </div>
            <div className='flex flex-col items-center justify-center min-w-[265px] bg-secondary border border-black rounded-lg shadow-[1px_1px_0px_1px_#000000]'>
              <span className='text-[4vw]'>5</span>
              <span className='text-[1vw] font-semibold'>Total Cancelled/Refunded Orders</span>              
            </div>
        
        </div>  
      </div>                                

      <Orders_Data_table setDialogue = {setDialogue} setDeleteDialogue= {setDeleteDialogue}/>
           
    </div>
  )
}

export default Orders
