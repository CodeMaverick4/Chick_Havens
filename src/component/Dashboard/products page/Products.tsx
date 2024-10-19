import React, { useState } from 'react'
import Data_table from './Data_table'
import ProductImageDetailView from './ProductImageDetailView'
import DeleteProductDialog from './DeleteDialogue';
import AddProductDialog from './AddProduct';
import Cards from '../Cards';
import SimpleBarChart from './BarChart';
import { ListFilter, SlidersHorizontal, X } from 'lucide-react';
import ProductsPieChart from './PieChart';
import ProductFilter from './ProductFilter';


const Products:React.FC = ()=>{
  const [isPhotoDialogueOpen,setDialogue] = useState<boolean>(false);
  const [deleteDialogue, setDeleteDialogue] = useState<boolean>(false);
  const [addProductDialog,setAddPrductDialogue] =useState<boolean>(false);
  const [showFilter,setShowFilter] = useState(false);
  
  const handleDeleteProduct = () => {
    // Logic to delete the product
    console.log("Product deleted");
    setDeleteDialogue(false);
  };
  const filterSidebar = ()=>{
    setShowFilter(!showFilter);
  }

  return (
    <div className={` sm:px-20 pt-10 `}>
  
  {/* constiner 1 */}
     <div className='flex gap-1 mb-5'>

      <div className=' p-3 rounded-lg border border-borderC '>
        <div className='flex flex-col  '>

          <div><h1 className='text-[2vw] underline underline-offset-8 decoration-accent decoration-2 mb-3'>Product Overview</h1></div>
          <div className='flex justify-center'>
            <div className='flex gap-3'>
              <Cards text='Total Product'/>
              <Cards text='Total Product'/>
            </div>
            
          </div>          
        </div>  
        

      </div>
      

      <div className='flex-grow border border-borderC rounded-lg'>
        <div className=" flex flex-col justify-center items-center bg-transparent]">
          <div className='pb-6 text-[2vw] font-semibold underline underline-offset-8 decoration-accent decoration-2'>Price vs Sales</div>
          <SimpleBarChart />
        </div>
        
      </div>
  
    </div> 
  

    {/* container 2 */}
    <div className='flex justify-between items-center text-text px-5 py-3 mt-10'>
      <div className='flex gap-3'>
        <button onClick={filterSidebar} className='flex gap-2 items-center border border-borderC py-2 px-5 bg-primary'><ListFilter size={20}/> Filter</button>
        <span className='text-[2vw]'>Total Product: <span className='text-accent'>545</span></span>
      </div>
      
      <div className='flex items-center gap-3'>
        <input type="search" className='p-2 bg-background border border-borderC rounded-lg w-96' placeholder='Write product name and number....'/>
        <button className='border border-borderC py-2 px-5 bg-primary'>Search</button>
        <button className='border border-borderC px-5 py-2 bg-primary text-text'>Add Product</button>
      </div>


    </div>
    {/* container 3 */}
    <div className='flex w-full gap-2 mt-5 '>
        
      <div className='flex flex-grow gap-2 shadow-xl'>
        
        <Data_table setDialogue = {setDialogue} setDeleteDialogue= {setDeleteDialogue}/>
        
      </div>



      {isPhotoDialogueOpen && (
        <ProductImageDetailView setDialogue={setDialogue}/>
       )} 

       {addProductDialog && (
        <AddProductDialog handleCancel={()=>setAddPrductDialogue(false)}/>
        )}  

      {deleteDialogue && (
        <DeleteProductDialog
          setDeleteDialogue={setDeleteDialogue}
          productName="Cool Shirt"
          productImage="shirt.jpg"
          onDelete={handleDeleteProduct}
        />
      )}  
      
      </div>
{/* container 4  */}
    {/* <div className='flex items-center justify-center border-2 rounded-md border-black'><ProductsPieChart /></div> */}
      
     
     <div className={`${showFilter ? 'w-[300px] opacity-100': '-translate-x-7 w-0 opacity-0' } transition-all duration-300 fixed left-0 top-0 inset-0  bg-background gap-7 z-50 overflow-y-scroll ` }>

      <div className='flex justify-between items-center px-2 py-3'>
        <h1 className='flex gap-2 items-center text-[2vw] underline underline-offset-8 decoration-accent decoration-2 '><SlidersHorizontal size={20}/>Filter</h1>
        <X onClick={filterSidebar} className='cursor-pointer'/>
      </div>
     
        <ProductFilter/> 
     </div>  


    </div>
  )
}

export default Products
