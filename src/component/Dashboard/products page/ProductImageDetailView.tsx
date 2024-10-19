import { Plus, X } from 'lucide-react';
import React, { Dispatch, SetStateAction, useState } from 'react';

interface DatatableProps {
  setDialogue: Dispatch<SetStateAction<boolean>>;
}

const ProductImageDetailView: React.FC<DatatableProps> = ({ setDialogue }) => {
  const [images, setImages] = useState<string[]>(['shirt.jpg', 'shirt2.jpg', 'shirt3.jpg', 'shirt4.jpg', 'shirt5.jpg']);
  const [current, setCurrent] = useState<number>(0);
  const [scaling, setScaling] = useState<boolean>(false);

  const handleImageChange = (newIndex: number) => {
    setScaling(true);
    setTimeout(() => {
      setCurrent(newIndex);
      setScaling(false);
    }, 300); // Timing matches CSS transition duration
  };

  return (
    <div
      className="fixed inset-0 bg-transparent backdrop-blur-sm flex justify-center items-center"
      onClick={() => setDialogue(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative border-2 border-black bg-[#E5E5E5] flex px-3  py-10  rounded-lg shadow-[1px_1px_400px_10px_#000000] w-[65%] h-[80%] "
      >
        <span className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 cursor-pointer" onClick={() => setDialogue(false)}>
          <X size={30} color='purple'/>
        </span>

        {/* Left Side: Main Image */}
        <div className="w-[55%] h-full flex justify-center items-center">
          {/* <div
            className={`w-[90%] h-[85%] overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out ${scaling ? 'scale-95' : 'scale-100'}`}
          > */}
            <img
              src={images[current]}
              alt="product"
              className="w-full h-full object-cover rounded-lg"
            />
          {/* </div> */}
        </div>

        {/* Right Side: Thumbnail Collection */}
        <div className="  h-full pt-6 pl-10">
          
          <div className="flex flex-wrap gap-2">
            {images.map((image, index) => (
              <img
                src={image}
                key={index}
                alt="thumbnail"
                onClick={() => handleImageChange(index)}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer transition-all duration-300 ease-in-out 
                  ${current === index ? 'border-4 border-purple-400 shadow-sm scale-110' : 'opacity-90 hover:opacity-90 scale-100'}`}
              />
            ))}
            <div className='w-20 h-20 bg-slate-400 flex items-center justify-center rounded-lg cursor-pointer'>
            <Plus size={68} color='grey'/>

            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProductImageDetailView;
