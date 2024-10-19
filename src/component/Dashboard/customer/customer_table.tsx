import React, { Dispatch, SetStateAction, useState } from 'react';
import { FilePenLine, Trash2, ArrowUpDown, Users, BaggageClaim, FileText } from 'lucide-react';
import Iconwithspan from '../Iconwithspan';

interface datatableProps {
  setDialogue?: Dispatch<SetStateAction<boolean>>;
  setDeleteDialogue?: Dispatch<SetStateAction<boolean>>;
}

type SortDirection = 'asc' | 'desc' | null;

const Customer_Data_table: React.FC<datatableProps> = ({ setDialogue, setDeleteDialogue }) => {
  
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: SortDirection }>({
    key: '',
    direction: null,
  });

  const data = [
    { code: '001', image: 'img', name: 'Smart Earphone Mobile', price: 299.99, discount: 10, date: '2024-09-01', category: 'Electronics', quantity: 50 ,status:'sold out'},
    { code: '002', image: 'img', name: 'Wireless Headphones', price: 89.99, discount: 15, date: '2024-09-05', category: 'Accessories', quantity: 100,status:'un sold' },
    { code: '003', image: 'img', name: 'Laptop', price: 899.99, discount: 5, date: '2024-09-10', category: 'Electronics', quantity: 30,status:'sold out' },
  ];

  const handleSort = (key: string) => {
    let direction: SortDirection = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...data].sort((a, b) => {
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
    <div className="flex-grow overflow-x-auto mt-4 overflow-y-scroll max-h-[777px]">      
      <table className="min-w-full shadow-lg text-sm">
        <thead className="bg-orange-300 text-black sticky top-0">
          <tr>
            {['cutomer_name', 'Email', 'Location', 'Discount', 'Orders', 'Amount Spend','Action'].map((header, idx) => (
              <th
                key={idx}
                className="py-2 px-3 border-b-2 border-t-2 border-accent cursor-pointer"
                onClick={() => handleSort(header.toLowerCase().replace(/\s+/g, ''))}
              >
                <div className="flex items-center justify-center gap-1">
                  {header}
                  {idx < 8 && !(['Product Code', 'Image'].includes(header)) && <ArrowUpDown size={12} />}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="">
          {sortedData.map((product, index) => (
            <tr key={index} className="hover:bg-primary border-b-2 border-accent">
              <td className="py-2 px-3 text-center">{product.code}</td>
              <td className="py-2 px-3 text-center">
                <img src={product.image} alt="Product" className="w-8 h-8 object-cover mx-auto" />
              </td>
              <td className="py-2 px-3 text-center">{product.name}</td>
              <td className="py-2 px-3 text-center">${product.price}</td>
              <td className="py-2 px-3 text-center">{product.discount}%</td>
              <td className="py-2 px-3 text-center">{product.date}</td>
              <td className="py-2 px-3 text-center">{product.category}</td>
              {/* <td className="py-4 px-6 text-center">{product.quantity} Left</td>               */}
              {/* <td className="py-4 px-6 flex items-center justify-center gap-1"> */}
                {/* <a href="#" onClick={() => setDialogue(true)}>
                 <Iconwithspan icon={<FileText size={20} color='purple'/>} text="Invoice" abovePosition={true}/> 
                </a> */}
                
              {/* </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customer_Data_table;
