import React, { useEffect, useRef, useState } from 'react'

interface inputProp{
    text:string,
    width:string,
    inp_type:string
}

const Input:React.FC<inputProp>=({text,width,inp_type})=> {
    
  return (
    <div className="relative">
        <input type={inp_type} className={`peer ${width} rounded-lg p-2 h-8 text-xs border-2 border-borderC bg-background focus:border-purple-500 outline-none text-text`} />
        <span className="absolute transition-all duration-300 whitespace-nowrap -top-7 left-0  text-md peer-focus:left-2 peer-focus:-top-3  bg-background px-1 peer-focus:text-purple-500 peer-focus:text-xs">{text}</span>
    </div>
  )
}


// -------------------------------------------------

type CategoryType = {
  [categoryName: string]: string[]; // The category name is a string, and the items are arrays of strings
};

type SelectInputProps = {
  categories: CategoryType;
};

const SelectInput: React.FC<SelectInputProps> = ({ categories }) => {
  const [isOptionsVisible, setOptionsVisible] = useState<boolean>(false);
  const optionsContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputClick = () => {
    setOptionsVisible(true);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (optionsContainerRef.current && !optionsContainerRef.current.contains(event.target as Node) &&
        inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setOptionsVisible(false);
    }
  };

  useEffect(() => {
    // Attach global click event listener to detect clicks outside
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <input
        type="search" // Fixed typo from 'serch' to 'search'
        ref={inputRef}
        onClick={handleInputClick}
        placeholder="Type Category here.."
        className="border-2 border-borderC py-3 px-2 w-full bg-background "
      />
      {isOptionsVisible && (
        <div
          className={`absolute inset-0  px-3 z-50 top-12 border-2 border-borderC rounded-md bg-background h-[200px] overflow-y-scroll`}
          ref={optionsContainerRef}
        >
          {Object.entries(categories).map(([categoryName, items]) => (
            <>
            <div className="py-3" key={categoryName}>
              {/* Display the category name */}
              <h1 className=''>{categoryName}</h1>

              {/* Map through the items of each category */}
              <ul>
                {items.map(item => (
                  <li className="flex items-center gap-2 p-2" key={item}>
                    <input type="checkbox" id={item} />
                    <label htmlFor={item}>{item}</label>
                  </li>
                ))}
              </ul>
            </div>
            <div className='bg-accent h-[1px]'></div>   
            </>
          ))}
        </div>
      )}
    </div>
  );
};




// -----------------------------------

interface DoubleRangeInputProps {
  setMinPrice: React.Dispatch<React.SetStateAction<number>>;
  setMaxPrice: React.Dispatch<React.SetStateAction<number>>;   
  priceRange?:number ;
  showOption?:string;
  handleFinalPrice?: (min: number, max: number) => void; // for price filter  
}

const DoubleRangeInput: React.FC<DoubleRangeInputProps> = ({ setMinPrice, setMaxPrice, priceRange=5000, showOption, handleFinalPrice}) => {
  const [isLeftMouseDown, setLeftMouseDown] = useState<boolean>(false);
  const [isRightMouseDown, setRightMouseDown] = useState<boolean>(false);
  const [leftCirclePos, setLeftCirclePos] = useState<number>(0);
  const [rightCirclePos, setRightCirclePos] = useState<number>(0);

  // for price 
  const [localMinPrice,setLocalMinPrice] = useState<number>(0)
  const [localMaxPrice,setLocalMaxPrice] = useState<number>(5000)    

  const containerRef = useRef<HTMLDivElement>(null);

  ; // Container width in pixels

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>, num: number) => {
    if (num === 0) {
      setLeftMouseDown(true);
    } else {      
      setRightMouseDown(true);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (containerRef.current) {
      
      const containerRect = containerRef.current.getBoundingClientRect();
      const containerLeft = containerRect.left;
      const containerRight = containerRect.right;

      const containerWidth = containerRect.width;
      const mouseX = e.clientX-containerLeft;
      
      if (isLeftMouseDown) {                
        if (mouseX >= 0 && mouseX <= rightCirclePos) {          
          setLeftCirclePos(mouseX-8);
          setMinPrice(Math.round((mouseX / containerWidth) * priceRange));
          setLocalMinPrice(Math.round((mouseX / containerWidth) * priceRange));
        }
      } else if (isRightMouseDown) {        
        if (mouseX >= leftCirclePos+16 && e.clientX <= containerRight) {
          setRightCirclePos(mouseX-8);
          setMaxPrice(Math.round((mouseX / containerWidth) * priceRange));
          setLocalMinPrice(Math.round((mouseX / containerWidth) * priceRange));
        }
      }
    }
  };

  const handleMouseUp = () => {
    setLeftMouseDown(false);
    setRightMouseDown(false);
    if(handleFinalPrice) handleFinalPrice(localMinPrice,localMinPrice) // for price change update to parent
    
  };

  useEffect(() => {
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();      
      setRightCirclePos(containerRect.width-8);     
      // console.log(containerRect.width)
    }
  },[showOption])

  useEffect(() => {
    if (isLeftMouseDown || isRightMouseDown) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isLeftMouseDown, isRightMouseDown]);

  return (
    <div className=' py-2  relative' ref={containerRef}>
      
      <div className=" z-10 w-full relative h-1 rounded-lg"   style={{ backgroundColor: 'var(--borderC)' }}>
        {/* Left Circle */}
        <div
          onMouseDown={(e) => handleMouseDown(e, 0)}
          className='absolute p-2 rounded-full bg-purple-700 -translate-y-[6px]'
          style={{ left: `${leftCirclePos}px`}}
        ></div>
        {/* Right Circle */}
        <div
          onMouseDown={(e) => handleMouseDown(e, 1)}
          className='absolute  p-2 rounded-full bg-purple-700 -translate-y-[6px]'
          // style={{ left: `${rightCirclePos - 10}px` }}
          style={{ left: `${rightCirclePos}px` }}
        ></div>
      </div>
    </div>
  );
};


export {Input ,SelectInput,DoubleRangeInput}


