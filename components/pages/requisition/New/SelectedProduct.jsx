import React from "react";
import { AiOutlineFileSearch } from "react-icons/ai";

const SelectedProduct = () => {
  return (
    <div className="px-4">
      <div className="bg-gray-50 p-2 rounded-md">
        <h3 className="p-3 text-gray-600">Selected Products</h3>
        <div className="h-[300px] flex items-center justify-center">
          <div>
            <AiOutlineFileSearch className="text-[100px] text-gray-300 m-auto" />
            <span className="text-gray-400 text-sm m-auto">
              No product added yet. Please add product from product list
            </span>
          </div>
        </div>
        <hr className="text-gray-600" />
        <div className="ml-4 flex justify-start gap-8 items-center text-gray-400">
          <p>Total qty: 0</p>
          <p>Total item: 0</p>
        </div>
      </div>
      <div>
        <h4 className="p-1 text-gray-600">Note (Optional)</h4>
        <textarea
          rows={4}
          placeholder="Enter your note"
          className="w-full bg-gray-50 border-2 border-gray-200 rounded-sm placeholder:px-2 placeholder:py-1"></textarea>
      </div>
      <div className="flex items-center gap-4 py-2">
        <button className="px-2 py-1 bg-red-400 text-white rounded-md">
          Cancel
        </button>
        <button className="px-2 py-1 bg-blue-400 text-white rounded-md">
          Request this requisition
        </button>
      </div>
    </div>
  );
};

export default SelectedProduct;
