import React, { useState } from 'react';
import { Trash2, X } from 'lucide-react'; // Import the Trash2 icon from Lucide

interface props{
    handleCancel:() => void
}
const AddProductDialog: React.FC<props> = ({handleCancel}) => {
  const [images, setImages] = useState<File[]>([]);
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    discount: '',
    category: '',
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages([...images, ...Array.from(e.target.files)]);
    }
  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Product added:', form, images);
    handleCancel(); // Close dialog after submission
  };

  

  return (
    <>
      {/* Modal/Dialogue Overlay */}      
        <div className="fixed inset-0 bg-gray-800 bg-opacity-70 z-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl p-8 relative">
            {/* Close Button */}
            <span
              onClick={handleCancel}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              <X/>
            </span>
            

            <h2 className="text-2xl font-semibold text-center mb-6">Add New Product</h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left side: Image Upload */}
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700">Product Images</label>
                <input
                  type="file"
                  multiple
                  onChange={handleImageUpload}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                  accept="image/*"
                />
                <div className="grid grid-cols-3 gap-2 mt-2">
                  {images.length > 0 &&
                    images.map((image, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={URL.createObjectURL(image)}
                          alt="Preview"
                          className="w-full h-24 object-cover rounded-md border border-gray-300"
                        />
                        {/* Trash icon on hover */}
                        <button
                          type="button"
                          onClick={() => handleRemoveImage(index)}
                          className="absolute top-2 right-2 bg-gray-800 bg-opacity-50 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Trash2 className="text-white w-4 h-4" />
                        </button>
                      </div>
                    ))}
                </div>
              </div>

              {/* Right side: Form fields */}
              <div className="space-y-4">
                {/* Product Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Product Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Enter product name"
                    required
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Description</label>
                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Enter product description"
                    rows={3}
                    required
                  ></textarea>
                </div>

                {/* Price and Discount */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Price ($)</label>
                    <input
                      type="number"
                      name="price"
                      value={form.price}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                      placeholder="Enter price"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Discount (%)</label>
                    <input
                      type="number"
                      name="discount"
                      value={form.discount}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                      placeholder="Enter discount"
                    />
                  </div>
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Category</label>
                  <input
                    type="text"
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Enter product category"
                    required
                  />
                </div>

                {/* Submit and Cancel Buttons */}
                <div className="flex justify-between">
                  <button
                    type="submit"
                    className="inline-block px-6 py-3 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition-colors"
                  >
                    Add Product
                  </button>
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="inline-block px-6 py-3 bg-gray-300 text-gray-700 font-semibold rounded-md hover:bg-gray-400 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      
    </>
  );
};

export default AddProductDialog;
