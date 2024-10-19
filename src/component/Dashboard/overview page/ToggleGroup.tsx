import React, { useState } from 'react'

const ToggleGroup:React.FC = ()=> {
  const[active,setActive] = useState<string>('yearly')

  return (
    <div className='flex justify-end mb-2'>
      <button onClick={()=> setActive('quartly')} className={`${active === 'quartly' ? 'bg-black text-white':''} border-l-0 text-xs sm:text-sm  flex items-center gap-3 border-2 border-borderC px-3 py-1 rounded-l-lg`}>    
    
            Quartly</button>
            <button onClick={()=> setActive('yearly')} className={`${active === 'yearly' ? 'bg-black text-white':''} border-r-0 border-l-0 text-xs sm:text-sm   flex items-center gap-3 px-3 py-1 border-2 border-borderC rounded-r-lg`} >    
    
            Yearly</button>
      
    </div>
  )
}
export default ToggleGroup
