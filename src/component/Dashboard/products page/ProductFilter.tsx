import { SlidersHorizontal } from 'lucide-react'
import React, { useState } from 'react'
import { DoubleRangeInput, Input, SelectInput } from '../../custom inputs/Input'


const ProductFilter:React.FC=()=> {
  const [minPrice,setMinPrice] = useState<number>(0);
  const [maxPrice,setMaxPrice] = useState<number>(10000);

  const category = {    
    "byStyle": [
      "Dress shirts",
      "Casual shirts",
      "T-shirts",
      "Polo shirts",
      "Henley shirts",
      "Button-up shirts",
      "Tank tops"
    ],
    "byFit": [
      "Slim fit",
      "Regular fit",
      "Relaxed fit",
      "Oversized"
    ],
    "byFabric": [
      "Cotton",
      "Linen",
      "Polyester",
      "Flannel",
      "Denim",
      "Silk"
    ],
    "bySleeveLength": [
      "Long sleeve",
      "Short sleeve",
      "Sleeveless"
    ],
    "byOccasion": [
      "Formal",
      "Business casual",
      "Casual",
      "Athletic"
    ],
    "byPattern": [
      "Solid",
      "Striped",
      "Checkered",
      "Printed"
    ]
};

  return (
    <div className='flex flex-col flex-grow gap-3 py-5 px-4  rounded-md text-xs'>
        {/* <h1 className='flex gap-2 items-center text-[2vw] underline underline-offset-8 decoration-accent decoration-2 mb-5'><SlidersHorizontal size={20}/>Filter</h1> */}
        <div className="flex flex-col gap-4 justify-center">    
    {/* Price filter  */}         
          <div className='grid gap-3'>
            <h1 className='text-2xl '>Price</h1>               
            <div className='flex justify-between'>            
              <div className='flex flex-col'><span className='text-xs'>Min price</span><span className=''>{minPrice}</span></div> 
              <div className='flex flex-col'><span className='text-xs'>Max price</span><span className=''>{maxPrice}</span></div> 
            </div>
            <DoubleRangeInput setMinPrice={setMinPrice} setMaxPrice={setMaxPrice}/>
          </div>
          
          <div className='bg-accent h-[1px]'></div>   
    {/* Discount  filter */}
          <div className='grid gap-3'>
            <h1 className='text-2xl '>Discount:</h1>               
            
            <div className='grid gap-1 pl-2'>           
              <div className='flex gap-2 items-center'>                
                <input type="checkbox" name="" id="" className='size-4' />
                <label htmlFor="">10% Off or more</label> 
              </div>
              <div className='flex gap-2 items-center'>                
                <input type="checkbox" name="" id="" className='size-4' />
                <label htmlFor="">25% Off or more</label> 
              </div>
              <div className='flex gap-2 items-center'>                
                <input type="checkbox" name="" id="" className='size-4' />
                <label htmlFor="">35% Off or more</label> 
              </div>
              <div className='flex gap-2 items-center'>                
                <input type="checkbox" name="" id="" className='size-4' />
                <label htmlFor="">50% Off or more</label> 
              </div>
            </div>            
          </div>
      
          <div className='bg-accent h-[1px]'></div>   
          {/* Stock  filter */}
          <div className='grid gap-3'>
            <h1 className='text-2xl '>Stock Left :</h1>               
            
            <div className='grid gap-1 pl-2'>           
              <div className='flex gap-2 items-center'>                
                <input type="checkbox" name="" id="" className='size-4' />
                <label htmlFor="">10 or less</label> 
              </div>
              <div className='flex gap-2 items-center'>                
                <input type="checkbox" name="" id="" className='size-4' />
                <label htmlFor="">25 or less</label> 
              </div>
              <div className='flex gap-2 items-center'>                
                <input type="checkbox" name="" id="" className='size-4' />
                <label htmlFor="">35 or less</label> 
              </div>
              <div className='flex gap-2 items-center'>                
                <input type="checkbox" name="" id="" className='size-4' />
                <label htmlFor="">50 or less</label> 
              </div>
              <div className='flex gap-2 items-center'>                
                <input type="checkbox" name="" id="" className='size-4' />
                <label htmlFor="">50 or more</label> 
              </div>
            </div>            
          </div>

          <div className='bg-accent h-[1px]'></div>   

        <div className='flex flex-col gap-3'>
          <h1 className='text-2xl'>Category:</h1>
          <SelectInput categories={category}/>
        </div>

        <div className='bg-accent h-[1px]'></div>   

        <div className='flex flex-col gap-8'>
          <h1 className='text-2xl'>Date Added</h1>
          <div className='flex justify-between gap-2'>
            <Input text="From" width="w-auto" inp_type="date"/>
            <Input text="TO" width="w-auto" inp_type="date"/>
          </div>
        </div>            
      </div>

      <div className='bg-accent h-[1px]'></div>   
      <div className='flex justify-end my-3 '>
        <button className='flex gap-2 items-center border border-borderC py-2 px-5 bg-primary'>Apply Filter</button>
      </div>
    </div>
  )
}

export default ProductFilter
