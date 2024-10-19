import React, { Dispatch, SetStateAction, useState } from 'react';
import { FilePenLine, Trash2, ArrowUpDown, Users, BaggageClaim, FileText } from 'lucide-react';
import Iconwithspan from '../Iconwithspan';
import orders from './orderdata';

interface datatableProps {
  setDialogue: Dispatch<SetStateAction<boolean>>;
  setDeleteDialogue: Dispatch<SetStateAction<boolean>>;
}

type SortDirection = 'asc' | 'desc' | null;

const Orders_Data_table: React.FC<datatableProps> = ({ setDialogue, setDeleteDialogue }) => {
  
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

  const sortedData = [...orders].sort((a, b) => {
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
    <div className="flex flex-col  ">
      
      <div className='flex gap-2 lg:justify-between flex-wrap justify-center'>
        <div className='flex gap-2 '>
          <button className='flex items-center gap-2 text-sm border border-borderC px-3 py-1 bg-primary mb-1 '><Users size={15}/> By customer</button>
          <button className='flex items-center gap-2 text-sm border border-borderC px-3 py-1 bg-primary mb-1 '><BaggageClaim size={15} />By Order</button>        
        </div>
        <div className='flex items-center gap-3 flex-wrap'>
            <input type="search" className='p-1 lg:p-2 bg-background border border-borderC rounded-lg lg:w-72' placeholder='Order id/cutomer name/email....'/>
            <button className='border border-borderC p-1 lg:py-2 lg:px-5 bg-primary'>Search</button>            
          </div>
      </div>

      <div className='overflow-y-scroll max-h-[777px]'>
        <table className=" shadow-lg text-xs mt-4 min-w-full"  >
          <thead className="bg-orange-300 text-black sticky top-0">
            <tr >
              {['Order ID','Customer Name','Customer Email','Order Date','Order Status','Total Ammount','Shipping Address','Payment Method','Payment Status','Download invoice'].map((header, idx) => (
                <th
                  key={idx}
                  className="py-1 px-2 cursor-pointer border-b-2 border-accent"
                  onClick={() => handleSort(header.toLowerCase().replace(/\s+/g, ''))}
                >
                  <div className="flex items-center justify-start gap-1">
                    {header}
                    {idx < 8 && !(['Product Code', 'Image'].includes(header)) && <ArrowUpDown size={12} />}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="">
            {sortedData.map((order, index) => (
              <tr key={index} className="lg:hover:bg-[#dd8086] border-b-2 border-accent">
                <td className="py-1  px-2 ">{order.orderId}</td>
                {/* <td className="py-3 px-2 text-center">
                  <img src={'/Shirt.jpg'} alt="Product" className="w-8 h-8 object-cover mx-auto" />
                </td> */}
                <td className="py-1  px-2 ">{order.customerName}</td>
                <td className="py-1  px-2 ">{order.customerEmail}</td>
                <td className="py-1  px-2 ">{order.orderDate}</td>
                <td className='py-1  px-2 '><span className={`${order.orderStatus === 'Pending' && 'bg-[#FFC107]'} ${order.orderStatus === 'Cancelled' && 'bg-[#FF6B6B]'} ${order.orderStatus === 'Completed' && 'bg-[#4CAF50]'} ${order.orderStatus === 'Processing' && 'bg-purple-500'} rounded-md p-1 text-black `}>{order.orderStatus}</span></td>                
                <td className="py-1  px-2 ">{order.totalAmount} </td>              
                <td className="py-1  px-2 ">{order.shippingAddress}</td>              
                <td className="py-1  px-2 ">{order.paymentMethod} </td>              
                <td className="py-1  px-2 "><span className={`${order.paymentStatus === 'Paid' && 'bg-[#2196F3]'} ${order.paymentStatus === 'Unpaid' && 'bg-[#FF9800]'} ${order.paymentStatus === 'Refunded' && 'bg-[#9E9E9E]'} rounded-md p-1 text-black `}>{order.paymentStatus}</span></td>
                <td className="py-1  px-2 ">
                  <div className='flex items-center justify-center'><a href="#" onClick={() => setDialogue(true)}>
                  <Iconwithspan icon={<FileText size={15} className='text-accent'/>} text="Invoice" abovePosition={true}/> 
                  </a></div>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    </div>
  );
};

export default Orders_Data_table;
