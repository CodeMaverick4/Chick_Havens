import { FilePenLine, Globe } from 'lucide-react';
import React, { useState } from 'react';
import PrimButton from './Dashboard/primary_button';

interface Product {
  name: string;
  price: number;
  photo: string;
  discount: number;
}

const GridView: React.FC = () => {
  const [temporary, setTemp] = useState<Product[]>([
    {
      name: "Smartphone",
      price: 699.99,
      photo: "shirt3.jpg",
      discount: 10,
    },
    {
      name: "Laptop",
      price: 1299.99,
      photo: "shirt4.jpg",
      discount: 15,
    },
    {
      name: "Wireless Headphones",
      price: 199.99,
      photo: "shirt.jpg",
      discount: 20,
    },
    {
      name: "Smartwatch",
      price: 249.99,
      photo: "shirt.jpg",
      discount: 5,
    },
    {
      name: "4K Television",
      price: 899.99,
      photo: "shirt4.jpg",
      discount: 25,
    },
    {
      name: "Digital Camera",
      price: 499.99,
      photo: "shirt.jpg",
      discount: 10,
    },
    {
      name: "Bluetooth Speaker",
      price: 89.99,
      photo: "shirt5.jpg",
      discount: 30,
    },
    {
      name: "Gaming Console",
      price: 499.99,
      photo: "shirt.jpg",
      discount: 15,
    },
    {
      name: "E-Reader",
      price: 129.99,
      photo: "shirt3.jpg",
      discount: 20,
    },
    {
      name: "Action Camera",
      price: 349.99,
      photo: "shirt2.jpg",
      discount: 10,
    },
  ]);

  return (
    <div className="container mx-auto  p-5 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {temporary.map((temp, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <img
              src={temp.photo}
              alt={temp.name}
              className="w-full h-60 object-cover "
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{temp.name}</h2>
              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-bold">${temp.price}</span>
                <span className="text-sm text-red-500">-{temp.discount}%</span>
              </div>
            </div>
            <div className="px-4 pb-4 bg-gray-50 flex flex-col justify-center gap-2">
              <button className="flex justify-center items-center gap-4  px-3 py-2 border border-black  bg-[#E5E5E5] text-black rounded hover:bg-purple-500 transition-colors duration-300">
              <FilePenLine/> edit Product
              </button>
              <button className="flex justify-center items-center gap-4  px-3 py-2 border border-black  bg-[#E5E5E5] text-black rounded hover:bg-purple-500 transition-colors duration-300">
              <Globe/> See on website
              </button>
              {/* <PrimButton text='edit Product' showShadow={false} icon={<FilePenLine/>}/>
              <PrimButton text='see on website' showShadow={false} icon={<Globe/>}/> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridView;
