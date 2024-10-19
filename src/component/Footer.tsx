import { Github, Linkedin, Twitter } from 'lucide-react'
import React from 'react'

const Footer:React.FC=()=> {
  return (
    <div className='bg-black px-10 py-10  mt-10 text-white'>
      <div className='h-[1px] bg-gray-400 w-full'></div>
      <div className='grid justify-center py-10 gap-3'>
        <p>Connect with me </p>
        <div className='flex'>
            <div className="flex justofy-center item-center border border-white p-2 cursor-pointer"><Github/></div>
            <div className="flex justofy-center item-center border border-white p-2 cursor-pointer"><Linkedin/></div>
            <div className="flex justofy-center item-center border border-white p-2 cursor-pointer"><Twitter /></div>
        </div>

      </div>
      <div className='h-[1px] bg-gray-400 w-full'></div>
      <div className='text-center mt-5'>
        <span className=''>Design and Built by Burhan Ahmed {': >'}</span>
      </div>
    </div>
  )
}

export default Footer
