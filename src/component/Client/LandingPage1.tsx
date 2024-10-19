import React from 'react'
import NavBar from './Navbar'

const LandingPage:React.FC = ()=> {
  return (
    <div className='relative bg-[#E5E5E5] '>
        {/* <NavBar position='fixed'/> */}
        <img src="HeroSectionImage.jpg" alt="" />
        <span className='fixed bottom-10 left-1/2   -translate-x-1/2 backdrop-blur-md'>
          <a href="shop"><button className='animate-bounce px-5 py-3 border border-purple-400 '>Explore</button></a>
        </span>

        

    </div>
  )
}

export default LandingPage