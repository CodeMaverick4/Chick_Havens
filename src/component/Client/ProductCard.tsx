import { ChevronLeft, ChevronRight, Plus } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

interface ProductType {
  productId: number;
  productName: string;
  color: string;
  size: string;
  price: number;
  discount: number;
  category: string;
  description: string;
  dateAdded: string; // or Date if you want to handle it as a Date object
  stock: number;
  images: string[];
}


interface productCardProps{
    product:ProductType,

}

const ProductCard:React.FC<productCardProps>=({product})=> {
  const [arrow,setArrow] = useState<boolean>(false);  
  const [activeIndex, setActiveIndex] = useState(0);
  // const images = ["/1/1.webp", "/1/2.webp", "/1/3.webp","/1/4.webp","/1/5.webp"];
  
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % product.images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + product.images.length) % product.images.length);
  };

  return (    
    <div className='relative grid gap-1 w-[156px] lg:w-[312px] border-2 border-dashed border-gray-400 p-3  text-[1vw]'>        

        <div className='lg:h-[420px] relative' onMouseEnter={() => setArrow(true)} onMouseLeave={() => setArrow(false)}>
             <ChevronLeft strokeWidth={3} size={45} color='black' onClick={handlePrev} className={`${arrow ? 'opacity-100' : 'opacity-0'} p-2 transition-opacity duration-300 absolute bottom-1/2 left-0 -translate-y-1/2 z-50`}/>
            <ChevronRight strokeWidth={3} size={45} color='black'  onClick={handleNext} className={`${arrow ? 'opacity-100' : 'opacity-0'} p-2 transition-opacity duration-300 absolute bottom-1/2 right-0 -translate-y-1/2 z-50`}/>
            {product.images.map((image, index) => (
              <img 
                key={index}
                src={image} 
                alt={`Slide ${index}`} 
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`} 
              />
            ))}
           <Link to={`/shop/detail`} state={{product}} ><div className={`p-3 ${arrow ? 'opacity-100' : 'opacity-0'} flex items-center justify-center w-[80%] absolute bottom-3 left-1/2  -translate-x-1/2 bg-white text-white p-3 bg-white  transition-all duration-300`}><button className={` w-full bg-black py-2 z-50`}>QUICK VIEW</button></div></Link>
        </div>
      <div className="flex flex-wrap font-semibold text-purple-600">Chick Havens</div>
      <div className="flex flex-wrap">{product.productName}</div>
      <div className="flex flex-wrap justify-between">
        <span>Rs. {product.price}</span>
        <span><span className={`rounded-full p-2 bg-${product.color}-600 inline-block`}></span></span>
      </div>
      <Plus className='absolute -top-3 -left-3' strokeWidth={1} color='purple'/>
      <Plus className='absolute -top-3 -right-3' strokeWidth={1} color='purple'/>
      <Plus className='absolute -bottom-3 -left-3' strokeWidth={1} color='purple'/>
      <Plus className='absolute -bottom-3 -right-3' strokeWidth={1} color='purple'/>
    </div>
  )
}

export default ProductCard
