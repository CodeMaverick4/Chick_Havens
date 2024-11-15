import { ChevronRight, X } from 'lucide-react'
import React, { Dispatch, useEffect, useState } from 'react'
import { DoubleRangeInput } from '../../custom inputs/Input';

type MyJsonType = { [key: string]: string[] };

interface filterProps{    
    setFilter:React.Dispatch<React.SetStateAction<boolean>>;
    setDiscounts:React.Dispatch<React.SetStateAction<number[]>>;
    setSizeFilter:React.Dispatch<React.SetStateAction<string[]>>;
    selectedSizeFilters:string[]
    showFilter:boolean;
    onRangeChange: (min: number, max: number) => void; // for price filter
}
const FilterSideBar:React.FC<filterProps>=({showFilter,setFilter,setDiscounts,selectedSizeFilters,setSizeFilter,onRangeChange})=> {
    const [showOption,setOption] = useState<string>('')
    const [minPrice,setMinPrice] = useState<number>(0)
    const [maxPrice,setMaxPrice] = useState<number>(5000)    

    const [finalPrice, setfinalPrice] = useState<{min:number,max:number}>({ min: 0, max: 5000}); //for price filter

    const handleFinalPrice = (min:number,max:number)=>{
        setfinalPrice({min,max})
    }

    useEffect(()=>{
        onRangeChange(minPrice,maxPrice)
    },[finalPrice])

    const handleSizeFilter = (size:string)=>{
        setSizeFilter((prevSizes)=>{
            if(prevSizes.includes(size)){
                return prevSizes.filter(prev=> prev!==size)
            }else{
                return [...prevSizes,size]
            }
        })
    }

    const handleDiscountToggle = (discount:number) => {
        setDiscounts(prevSelected => {
          // If the discount is already selected, remove it, otherwise add it
          if (prevSelected.includes(discount)) {
            return prevSelected.filter(d => d !== discount);
          } else {
            return [...prevSelected, discount];
          }
        });        
      };    


  return (
    <>
    {/* <div className='fixed inset-0  blur-md '></div> */}
        <div className={`${showFilter ? 'w-[400px] opacity-100': '-translate-x-7 w-0 opacity-0' } transition-all duration-300 fixed left-0 top-0 flex flex-col inset-0 bg-white py-6 gap-7 z-50`}>
            <div className='flex justify-between items-center text-2xl px-3'>
                <h1>Filters</h1>
                <X onClick={()=>setFilter(false)}/>
            </div>        
            <div className='text-xl'>
            
                {/* Price Filter    */}
                <div>                        
                    <div className='flex items-center justify-between py-3 pr-3 pl-5  cursor-pointer' onClick={() => showOption === 'price' ? setOption('') : setOption('price')}>
                        <span>Price</span> 
                        <ChevronRight className={` ${showOption === 'price' ? 'rotate-90' : ''} transition-all duration-300`}/>
                    </div>
                    
                    <div className={`${showOption === 'price' ? 'translate-y-0 opacity-100 max-h-40' : '-translate-y-10 opacity-0 max-h-0'} w-full overflow-hidden ease-in-out grid transition-all duration-300`}>                                               
                        <div className='flex items-center justify-between px-4 '> 
                            <span>Min Price: {minPrice}</span>
                            <span>Max Price:  {maxPrice}</span>
                        </div>
                        <div  className=' px-4 py-5'>
                            <DoubleRangeInput handleFinalPrice={handleFinalPrice} showOption={showOption} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} priceRange={5000} />
                        </div>                        
                    </div>
                </div>
                <div className='h-[1px] bg-gray-500 '></div>


                {/* DiscountFilter  */}
                <div>                        
                    <div className='flex items-center justify-between py-3 pr-3 pl-5  cursor-pointer' onClick={() => showOption === 'discount' ? setOption('') : setOption('discount')} >
                        <span>Discount</span> 
                        <ChevronRight className={` ${showOption === 'discount' ? 'rotate-90' : ''} transition-all duration-300`}/>
                    </div>
                    
                    <div className={`${showOption === 'discount' ? 'translate-y-0 opacity-100 max-h-full' : '-translate-y-10 opacity-0 max-h-0'} overflow-hidden ease-in-out grid transition-all duration-300`}>                       
                        <div className='px-8 pb-5'>
                            <div className="flex items-center gap-3"><input onChange={()=>handleDiscountToggle(10)} type="checkbox" name="" id="" className='size-4'/> 10% or above</div>
                            <div className="flex items-center gap-3"><input onChange={()=>handleDiscountToggle(20)} type="checkbox" name="" id="" className='size-4'/> 20% or above</div>
                            <div className="flex items-center gap-3"><input onChange={()=>handleDiscountToggle(30)} type="checkbox" name="" id="" className='size-4'/> 30% or above</div>
                            <div className="flex items-center gap-3"><input onChange={()=>handleDiscountToggle(40)} type="checkbox" name="" id="" className='size-4'/> 40% or above</div>
                            <div className="flex items-center gap-3"><input onChange={()=>handleDiscountToggle(50)} type="checkbox" name="" id="" className='size-4'/> 50% or above</div>
                        </div>
                        
                    </div>
                </div>
                <div className='h-[1px] bg-gray-500 '></div>

                 {/* size  Filter  */}
                 <div>                        
                    <div className='flex items-center justify-between py-3 pr-3 pl-5  cursor-pointer' onClick={() => showOption === 'size' ? setOption('') : setOption('size')}>
                        <span>Size</span> 
                        <ChevronRight className={` ${showOption === 'size' ? 'rotate-90' : ''} transition-all duration-300`}/>
                    </div>
                    
                    <div className={`${showOption === 'size' ? 'translate-y-0 opacity-100 max-h-full' : '-translate-y-10 opacity-0 max-h-0'} overflow-hidden ease-in-out grid transition-all duration-300`}>                       
                        <div  className='flex flex-wrap justify-between  gap-y-4 py-3 px-4 '>                            
                            {['S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36', '38', '40', '42', '44'].map((size) => (
                                <div key={size} className={`border border-black size-16 flex justify-center items-center cursor-pointer transition-all duration-200 ${selectedSizeFilters.includes(size) ? 'bg-green-500' : '' }`} onClick={() => handleSizeFilter(size) }>
                                    {size}
                                </div>
                            ))}
                        </div>                        
                    </div>
                </div>
                <div className='h-[1px] bg-gray-500 '></div>

                {/* Availability Filter  */}
                {/* <div>                        
                    <div className='flex items-center justify-between py-3 pr-3 pl-5  cursor-pointer' onClick={() => showOption === 'availability' ? setOption('') : setOption('availability')} >
                        <span>Availability</span> 
                        <ChevronRight className={` ${showOption === 'availability' ? 'rotate-90' : ''} transition-all duration-300`}/>
                    </div>
                    
                    <div className={`${showOption === 'availability' ? 'translate-y-0 opacity-100 max-h-full' : '-translate-y-10 opacity-0 max-h-0'} overflow-hidden ease-in-out grid transition-all duration-300`}>                       
                        <div className='px-8 pb-5 flex flex-col gap-2'>
                            <div className="flex items-center gap-3"><input  type="checkbox" name="" id="" className='size-4'/> In Stock</div>
                            <div className="flex items-center gap-3"><input  type="checkbox" name="" id="" className='size-4' /> Out Of Stock (455) </div>
                    
                        </div>
                        
                    </div>
                </div> */}
                <div className='h-[1px] bg-gray-500 '></div>

            </div>
        </div>
        </>
  )
}
export default FilterSideBar