import React from 'react'

const Profile:React.FC=()=> {
  return (
    <div className='flex flex-col flex-grow border border-black rounded-md p-5 gap-5'>
    <div className='pb-3 border-b border-gray-400 font-bold text-xl'>Profile</div>

    <div className='flex flex-col gap-3'>
        <h1 className='font-bold text-lg '>Basic Details</h1>
        <div className='flex border border-black rounded-md p-7 gap-2'>
            <div className='flex flex-col gap-2 flex-grow'>
                <label htmlFor="" className='text-sm'>First Name</label>
                <input type="text"  className='p-3 border-b border-black bg-[#E5E5E5]'/>
            </div>
            <div className='flex flex-col gap-2 flex-grow'>
                <label htmlFor="" className='text-sm'>Last Name</label>
                <input type="text"  className='p-3 border-b border-black bg-[#E5E5E5]'/>
            </div>
            
        </div>
    </div>

    <div className='flex flex-col gap-3'>
        <h1 className='font-bold text-lg '>Contact Details</h1>
        <div className='flex border border-black rounded-md p-7 gap-2'>
            <div className='flex flex-col gap-2 flex-grow'>
                <label htmlFor="" className='text-sm'>Email</label>
                <input type="text"  className='p-3 border-b border-black bg-[#E5E5E5]'/>
            </div>
            <div className='flex flex-col gap-2 flex-grow'>
                <label htmlFor="" className='text-sm'>Phone </label>
                <input type="text"  className='p-3 border-b border-black bg-[#E5E5E5]'/>
            </div>
            
        </div>
    </div>

    <div className='flex justify-end gap-2'>
    <button className=' border border-black bg-black text-white px-10 py-3 text-sm rounded-sm '>CANCLE</button>                
        <button className=' border border-black bg-black text-white px-12 py-3 text-sm rounded-sm'>SAVE</button>                
    </div>

</div>
  )
}

export default Profile
