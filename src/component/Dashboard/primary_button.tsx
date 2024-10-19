import React from 'react'

interface buttonProps{
  text:string,
  size?:string,
  icon?:React.ReactNode,
  showShadow?:boolean,
  handleClick?:(event: React.MouseEvent<HTMLSpanElement>) => void;
}
const PrimButton: React.FC<buttonProps> = ({text,icon,size='',showShadow=true,handleClick}) => {
  return (    
      <button className={`${size ? size : 'text-xs sm:text-sm md:text-base'} flex items-center gap-3 border-2 border-borderC px-3 py-1 rounded-lg transition-all duration-300  bg-primary
      ${showShadow ? 'sm:shadow-[1px_1px_0px_1px_#000000] sm:transition-shadow sm:duration-300 sm:hover:shadow-none' : 'hover:scale-105'} `} onClick={handleClick}>    
    {icon}
            {text}</button>
  )
}

export default PrimButton