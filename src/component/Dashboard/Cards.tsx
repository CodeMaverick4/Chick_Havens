import { TrendingDown, TrendingUp } from 'lucide-react'
import React from 'react'
import SimpleLineChart from './order page/SimpleLineChart'
interface cardsProp {
  text:string,
  count?:[number,string]
  lineChart?:[boolean,string]
}
const Cards: React.FC<cardsProp> = ({text,count=[100],lineChart=[true,"not text"]})=> {
  
  return (
    <div>
      <div className='px-3 py-2 min-w-[265px] bg-secondary border border-black rounded-lg shadow-[1px_1px_0px_1px_#000000]'>
          <div className='flex-col flex'>
            <div className='flex items-center gap-3'>
              <h1 className='font-bold text-[1vw] text-nowrap'>{text}</h1>
              {/* <h1 className='text-[1vw] flex gap-2 font-bold'><TrendingDown color='red'/><TrendingUp color='green'/>10%</h1> */}
            </div>
            
            <span className={`text-[3vw] pl-4`}>{count[0]}</span>
            
            {lineChart ? 
            <>
            <div className='flex gap-2 items-center justify-between w-full'>
              <span className='text-[1vw] font-bold'>{lineChart[1]}</span>
              <SimpleLineChart/>
              </div>
            </>
              
            :""}
          </div>
      </div>
    </div>
  )
}

export default Cards 