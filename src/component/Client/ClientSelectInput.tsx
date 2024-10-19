import { useEffect, useRef, useState } from "react";

type CategoryType = {
    [categoryName: string]: string[]; // The category name is a string, and the items are arrays of strings
  };
  
  type SelectInputProps = {
    categories: CategoryType;
  };

const ClientSelectInput: React.FC<SelectInputProps> = ({ categories }) => {
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
         <input ref={inputRef} onClick={handleInputClick} type='search' className={`peer flex-grow px-2 py-3 w-60 text-xs border-2 border-black bg-white focus:border-purple-500 outline-none`} />
         <span className="absolute transition-all duration-300 whitespace-nowrap top-2 left-1  text-xl peer-focus:left-2 peer-focus:-top-3  bg-white px-1 peer-focus:text-purple-500 peer-focus:text-xs">Category</span>
  
        {isOptionsVisible && (
          <div
            className={`absolute inset-0  px-3 z-50 top-12 border-2 border-purple-500  bg-white h-[150px] overflow-y-scroll`}
            ref={optionsContainerRef}
          >
            {Object.entries(categories).map(([categoryName, items]) => (
              <>
              <div className="pt-3 " key={categoryName}>
                {/* Display the category name */}
                <div className='bg-gray-400 h-[1px] mb-3'></div>   
                <span className='bg-purple-200 rounded-md px-3 py-1 text-purple-900'>{categoryName}</span>
                <div className='bg-gray-400 h-[1px] mt-3'></div>   
                {/* Map through the items of each category */}
                <div className="grid ">
                  {items.map(item => (
                    <div className="flex items-center gap-2 " key={item}>
                      <input type="checkbox" id={item} />
                      <label htmlFor={item}>{item}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              </>
            ))}
          </div>
        )}
      </div>
    );
  };

export default ClientSelectInput;