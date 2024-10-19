import { X } from 'lucide-react';
import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';

interface DeleteProductDialogProps {
  setDeleteDialogue: Dispatch<SetStateAction<boolean>>;
  productName: string;
  productImage: string;
  onDelete: () => void;  // Function to call when deletion is confirmed
}

const DeleteProductDialog: React.FC<DeleteProductDialogProps> = ({ setDeleteDialogue, productName, productImage, onDelete }) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  // Close dialog if clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
        setDeleteDialogue(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setDeleteDialogue]);

  return (
    <div className="fixed inset-0 backdrop-blur-md bg-opacity-70 flex justify-center items-center text-text ">
      <div ref={dialogRef} className="relative p-6 rounded-lg shadow-lg w-[90%] max-w-md mx-auto text-center border border-borderC bg-background">

        <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-700" onClick={() => setDeleteDialogue(false)} ><X /></button>        
        <img src={productImage} alt={productName} className="w-24 h-24 object-cover mx-auto mb-4 rounded-md border border-borderC"/>
        <h2 className="text-lg font-semibold mb-4">Delete "{productName}"?</h2>
        <p className="text-gray-600 mb-6">Are you sure you want to delete this product? This action cannot be undone.</p>
        
        <div className="flex justify-center gap-2">
          <button onClick={() => setDeleteDialogue(false)} className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-300 transition">
            Cancel</button>
          <button onClick={onDelete} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-500 transition">
            Delete </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteProductDialog;
