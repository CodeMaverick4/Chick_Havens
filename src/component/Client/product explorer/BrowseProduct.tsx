import React, { useEffect, useState } from 'react'
import { ArrowUpDown,  ListFilter, Search } from 'lucide-react'
import ProductCard from './ProductCard';
import FilterSideBar from './FilterSideBar';
import allProducts from './Constants';

interface PriceRange {
    min: number;
    max: number;
  }

const BrowseProduct:React.FC = ()=> {    
    const [showFilter,setFilter] = useState<boolean>(false);
    const [products,setProducts] = useState<typeof allProducts>([]);
    const [showSortBY,setSortBY] = useState<boolean>(false);
    const [sortCriteria, setSortCriteria] = useState<string | null>(null);
    const [priceRange, setPriceRange] = useState<PriceRange>({ min: 0, max: 5000}); //for price filter
    const [discounts, setDiscounts] = useState<number[]>([]);
    const [selectedSizeFilters, setSizeFilter] = useState<string[]>([]); // size filter state pass in filterside bar 

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement> )=>{        
        const target = e.target as HTMLInputElement;             
        const targetSearch = target.value.toLowerCase();
        const result = allProducts.filter(product=> product.productName.toLowerCase().includes(targetSearch));
        setProducts(result);                
    }

    // for price filter 
    const onRangeChange = (min:number,max:number) =>{
        setPriceRange({min,max})
    }
     // for price filter 
    useEffect(()=>{
        const filtredProduct = allProducts.filter((product) => product.price >= priceRange.min && product.price <= priceRange.max)
        setProducts(filtredProduct)
        console.log(priceRange,products)
    },[priceRange])


    useEffect(()=>{
        setProducts(allProducts);        
    },[])
    
    useEffect(()=>{
        if(discounts.length > 0){        
            const filteredProducts = products.filter(product =>
                discounts.some(discount => product.discount >= discount)
            );
            setProducts(filteredProducts);            
        }else{
            setProducts(allProducts);
        }
        
    },[discounts])

    useEffect(() => {
        if (selectedSizeFilters.length > 0) {
            const filteredProducts = allProducts.filter(product =>
                selectedSizeFilters.some(size => product.size === size)
            );
            setProducts(filteredProducts);
        } else {
            setProducts(allProducts);
        }
    }, [selectedSizeFilters]);
    

    useEffect(()=>{
        if(sortCriteria == 'lowesttohighest'){
            const sortedProducts = products.sort((a, b) => a.price - b.price);
            setProducts(sortedProducts)        
        }
        else if(sortCriteria == 'highesttolowest'){
            const sortedProducts = products.sort((a, b) => b.price - a.price);
            setProducts(sortedProducts)        
        }
        
    },[sortCriteria])

  return (    
    <div className='bg-white mt-20'> 
        
        <div className='relative flex flex-col gap-2'>
            <img src="gridpattern.svg" alt="" className='h-36 w-full object-cover'/>
            <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center bg-white'><span className='text-center text-4xl shadow-[0px_0px_100px_50px_rgba(255,255,255,10)]'>News Collection</span></span>
            <img src="gridpattern.svg" alt="" className='h-36 w-full object-cover rotate-180 '/>            
        </div>
                
        {/* nav 1 */}
        <div className='text-[1vw] flex flex-col gap-5 lg:flex-row py-5 px-5 border border-gray-300  items-center lg:justify-between'>
            <div className='flex gap-5 items-center justify-between w-full lg:w-auto'>
                <button onClick={()=>setFilter(!showFilter)} className='flex gap-2'><ListFilter size={20}/>Filter</button>
                <div className='relative' onMouseEnter={()=>setSortBY(!showSortBY)}  onMouseLeave={()=>setSortBY(!showSortBY)}>
                    <button className='flex gap-2' ><ArrowUpDown size={20}/>Sort By</button>
                    <div className={`${showSortBY ? 'w-auto h-auto' : 'w-0 h-0 opacity-0 hidden'}  transition-all duration-300 absolute left-1 flex flex-col border border-black rounded-md z-50 bg-white`}>
                        <div className="flex items-center gap-3 p-3" onClick={()=> setSortCriteria(sortCriteria === 'lowesttohighest' ? null : 'lowesttohighest')} > <div className={`border p-2 ${sortCriteria === "lowesttohighest" ? 'bg-black border-white':'border-black'}`}></div> <span className='text-nowrap'>Price: lowest to highest</span></div>
                        <div className="flex  items-center gap-3 p-3" onClick={()=> setSortCriteria(sortCriteria === 'highesttolowest' ? null : 'highesttolowest')}><div className={`border p-2 ${sortCriteria === "highesttolowest" ? 'bg-black border-white' : 'border-black'}`}></div> <span>Price: lowest to highest</span></div>                       
                    </div>
                </div>
            </div>
            <span className='text-[2vw]'>Total Products: {products.length}</span>               

            <div className='flex items-center gap-1 border-2 border-purple-500 pr-3 focus-within:border-yellow-600'>                
                <input onChange={handleSearch} type="search" className={`p-3  w-full lg:w-[20vw] outline-none`} placeholder='Enter product name here....'/><Search />
            </div>

        </div>

        {/* nav 2 Filter  */}
        
        <FilterSideBar selectedSizeFilters={selectedSizeFilters} setSizeFilter={setSizeFilter} onRangeChange={onRangeChange} setDiscounts={setDiscounts} showFilter={showFilter} setFilter={setFilter} />
        {/* nav 3 / products cards */}
        <div className={`px-5 md:px-10 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-4 place-items-center`}>
        
        {products.map((product,index) =>(            
            <ProductCard product={product} key={index}/>
        )
        )}
        
        </div>
    </div>
  )
}


export default BrowseProduct