import { ArrowLeft, BadgeIndianRupee, CircleCheck, Heart, MessagesSquare, Minus, Plus, RefreshCcw, Ruler, SendHorizontal, Share, Truck } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useLocation} from 'react-router-dom'

const DetailedView:React.FC=()=> {
  const [quantity,setQuantity] =  useState<number>(1);
  const [selectedSize,setSize] =  useState<string>('');
  const location = useLocation()    
  const product = location.state?.product 
  
  return (
    <>
    
    <div className='mt-24 w-full px-5'>      
    <div className='pb-4'><Link className='flex gap-2 items-center' to={'/shop'}><ArrowLeft size={20}/>Back</Link></div>
      <div className='flex flex-col lg:flex-row '>
        {/* first container  */}
        <div className='grid gap-2 lg:w-1/2 '>          
            {/* <img src="/1/1.webp" alt=""  className='w-full h-full object-cover'/>
            <img src="/1/2.webp" alt=""  className='w-full h-full object-cover'/>
            <img src="/1/3.webp" alt=""  className='w-full h-full object-cover'/>
            <img src="/1/4.webp" alt=""  className='w-full h-full object-cover'/>
            <img src="/1/5.webp" alt=""  className='w-full h-full object-cover'/>    */}
            {product.images.map((image: string, index: number) => (
              <img 
                key={index}
                src={image} 
                alt={`Slide ${index}`} 
                className='w-full h-full object-cover'
              />
            ))}       
        </div>

      {/* second container  */}
        <div className='flex flex-col lg:w-1/2 px-10 py-10 '>
          
          <div className=' flex justify-between items-center'>
            <span className='font-bold'>{product.productName}</span>
              <div className='flex gap-3 items-center'>
                <Heart fill='black' />
                <Share/>
              </div>
          </div>
          <h1>{product.description}</h1>

          <div className='flex items-center gap-4'> 
            <span className='text-lg'>Rs. {product.price - product.price % product.discount}</span>
            <s className='text-gray-400 text-md'>Rs. {product.price}</s>
            <span className='text-red-400'>{product.discount}% off</span>

          </div>

          <span className='font-sans text-sm '> (MRP incl. of all taxes)</span>

      {/* size section  */}
          <div className='flex flex-col py-7 gap-4'>
            <div className='flex justify-between '> 
              <span>Select size</span>
              <span className='flex gap-2 items-center font-bold'><Ruler className='-rotate-45' size={24}/> size guide</span>
            </div>
            <div className='flex gap-2 flex-wrap'> 
              {['S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36', '38', '40', '42', '44'].map(size => (
                <div className={` ${selectedSize === size ? 'bg-black text-white': ''} size-10 border border-black flex justify-center items-center`} onClick={()=>setSize(size)}>{size} </div>
              ))}
              
              
              
            </div>
          </div>

          <div className='flex flex-col gap-3'>
            <span className=''>Select Quantity</span>

            <div className='flex justify-between items-center select-none'>
              <div className='flex'>
                <div className="flex justify-center items-center size-10 border border-black cursor-pointer" onClick={()=> quantity >1 && setQuantity(quantity-1)}><Minus size={20}/></div>
                <div className="flex justify-center items-center size-10 border border-black">{quantity}</div>
                <div className="flex justify-center items-center size-10 border border-black cursor-pointer" onClick={()=>setQuantity( prev => product.stock>prev ? prev+1 : prev ) } ><Plus size={20}/></div>
              </div>
              {product.stock === 0 ?
               <span className='text-xl text-red-400'>Out Of stock</span> 
               :
               <span className='text-xl text-green-500'>In stock : {product.stock}</span>  }

            </div>
                        
              <Link to={''} className="flex py-3 text-lg justify-center bg-black text-white font-mono " >Add to Cart</Link>
            
          </div>

      {/* delhivery options  */}
            <div className='flex flex-col gap-3 py-5'>
              <span className='flex gap-3 '>Delivery Options <Truck/></span>
              
              <div className='flex flex-col gap-6'>
                  <div className='relative inline-block'>
                    <input type="number" className='border border-black py-3 px-2 w-full outline-none  appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' placeholder='Enter Pincode'/>
                    <span className='text-sm text-slate-500 font-sans pl-5 '>Please enter PIN code to check delivery time & Pay on Delivery Availability</span>
                    <span className='flex gap-2 font-bold font-sans absolute right-2 top-3 items-center'><CircleCheck size={18} color='green'/> Check</span>
                    {/* <span className='font-bold font-sans absolute right-2 top-3'>Change</span> */}                  
                  </div>

                  <div className='flex flex-col gap-3 font-sans'>
                    <p className='flex items-center gap-4'><Truck size={22} color="green"/> Get it by Tue, Oct 1</p>
                    <p className='flex items-center gap-4'><BadgeIndianRupee size={22} color="green"/> Pay on delivery available</p>
                    <p className='flex items-center gap-4'><RefreshCcw size={22} color="red" /> Easy return & exchange</p>

                  </div>
              </div>
            </div>

          <div className='py-5'>
            <p className='font-bold'>Product description:</p>
            <span>{product.description}</span>
          </div>

          <div className='flex justify-center '>  
            <button className='py-3 mt-5 bg-black text-white flex justify-center items-center gap-4 text-lg w-1/3'><MessagesSquare color='green'/> Chat with US</button>
          </div>
          
      {/* chat window */}
      <div className=' border-2 border-purple-500 rounded-lg h-[300px] p-5 mt-5 flex flex-col gap-3'>
        <div className='border border-black h-[80%]'>

        </div>


        <div className=' flex gap-4 justify-center items-center'>
          <input type="text" className=' rounded-2xl p-3 w-[90%] border border-cyan-400 bg-[#E5E5E5]' placeholder='Message us' />
          <button><SendHorizontal/></button>
        </div>
      </div>


        </div>
      </div>

    </div>
    </>
  )
}

export default DetailedView
