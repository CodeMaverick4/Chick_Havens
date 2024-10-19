import React, { useState } from 'react';

interface Iconwithspanprops {
  icon: React.ReactElement, // updated this to React.ReactElement to allow cloning
  text: string,
  abovePosition:boolean,
  handleClick?:(event: React.MouseEvent<HTMLSpanElement>) => void;
}

const Iconwithspan: React.FC<Iconwithspanprops> = ({ icon, text, abovePosition,handleClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div className='relative'>
      <span
        className={`absolute whitespace-nowrap ${abovePosition ? '-translate-y-8 -translate-x-1/3' : 'translate-y-8 -translate-x-1/3' } bg-yellow-500 border-2 border-black px-2 text-sm transition-opacity duration-700 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {text}
      </span>

      {/* Clone the icon and add mouse events */}
      {React.cloneElement(icon, {
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        onClick:handleClick
      })}
    </div>
  );
};

export default Iconwithspan;
