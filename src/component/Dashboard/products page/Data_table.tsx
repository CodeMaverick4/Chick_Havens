import React, { Dispatch, SetStateAction, useState } from 'react';
import { FilePenLine, Trash2, ArrowUpDown } from 'lucide-react';
import Products from './ProductsData'
import products from './ProductsData';

interface datatableProps {
  setDialogue: Dispatch<SetStateAction<boolean>>;
  setDeleteDialogue: Dispatch<SetStateAction<boolean>>;
}

type SortDirection = 'asc' | 'desc' | null;

const Data_table: React.FC<datatableProps> = ({ setDialogue, setDeleteDialogue }) => {
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: SortDirection }>({
    key: '',
    direction: null,
  });

  const handleSort = (key: string) => {
    let direction: SortDirection = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...products].sort((a, b) => {
    if (sortConfig.key) {
      const directionMultiplier = sortConfig.direction === 'asc' ? 1 : -1;
      const valA = a[sortConfig.key as keyof typeof a];
      const valB = b[sortConfig.key as keyof typeof b];
      if (valA < valB) return -1 * directionMultiplier;
      if (valA > valB) return 1 * directionMultiplier;
      return 0;
    }
    return 0;
  });

  return (
    <div className="flex-grow overflow-y-scroll max-h-[500px] " >
      <table className=" min-w-full  text-text text-xs  ">
        <thead className=" bg-orange-300 text-black sticky top-0 uppercase" >
          <tr>
            {['productId','productName','image','category','price','discount','stock','status','dateAdded','sizes','colors','Action'].map((header, idx) => (
              <th
                key={idx}
                className="py-2 px-3 cursor-pointer "
                onClick={() => {['productName','price','discount','stock','dateAdded','status'].includes(header) && handleSort(header.toLowerCase().replace(/\s+/g, ''))} }
              >
                <div className="flex items-center justify-center gap-1">
                  {header} {['productName','price','discount','stock','dateAdded','status'].includes(header) &&<ArrowUpDown size={12} /> }
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="">         
          {sortedData.map((product, index) => (            
            <tr key={index} className="lg:hover:bg-[#dd8086] rounded-md  border-b border-accent ">
              <td className="py-2 px-3 text-center border-b border-accent  ">{product.productId}</td>
              <td className="py-2 px-3 text-center border-b border-accent  ">{product.productName}</td>
              <td className="py-2 px-3 text-center border-b border-accent ">
                <img src={product.image} alt="Product" className="w-8 h-8 object-cover mx-auto" />
              </td>
              <td className="py-2 px-3 text-center border-b border-accent ">{product.category}</td>
              <td className="py-2 px-3 text-center border-b border-accent ">${product.price}</td>
              <td className="py-2 px-3 text-center border-b border-accent ">{product.discount}%</td>
              <td className="py-2 px-3 text-center border-b border-accent text-nowrap ">{product.stock}</td>
              <td className="py-2 px-3 text-center border-b border-accent "><span className={`${product.status === 'Active'? 'bg-[#4CAF50]' : 'bg-[#FF6B6B]'} text-black p-1 rounded-md`}>{product.status}</span></td>
              <td className="py-2 px-3 text-center border-b border-accent text-nowrap">{product.dateAdded}</td>     
              <td className="py-2 px-3 text-center border-b border-accent text-nowrap">{product.sizes}</td>     
              <td className="py-2 px-3 text-center border-b border-accent text-nowrap">{product.colors}</td>              
              <td className="py-2 px-6 border-b border-accent ">
                <div className='flex items-center justify-center gap-1'>
                  <a
                    href="#"
                    aria-label="Edit"
                    className="text-green-500 hover:text-green-600 transition"
                    onClick={() => setDialogue(true)}
                  >
                    <FilePenLine size={15} />
                  </a>
                  <span>|</span>
                  <a
                    href="#"
                    aria-label="Delete"
                    className="text-red-500 hover:text-red-600 transition"
                    onClick={() => setDeleteDialogue(true)}
                  >
                    <Trash2 size={15} />
                  </a>
                </div>
              </td>
            </tr>
            
          ))}
        </tbody>
      </table>
      {/* <div className='border border-black py-3'></div> */}
    </div>
  );
};

export default Data_table;
