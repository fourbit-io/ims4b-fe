import React from "react";
import Pagination from "@/components/reusable/Pagination";

const ProductList = () => {
  const products = [1, 2, 3, 4, 5, 6];
  return (
    <div className="space-y-4">
      <h2>
        All Products
        <span className="text-gray-400"> (110)</span>
      </h2>

      {/* search field */}
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 bottom-0 w-4 h-4 my-auto text-gray-400 left-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search"
          className="w-full py-2 pl-12 pr-4 text-sm text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-primary-600"
        />
      </div>
      {/* search field */}

      {/* product list  */}
      <div>
        <ul className="space-y-2">
          {products?.map((item, id) => (
            <li className="flex justify-start items-center gap-4" key={id}>
              <img
                src="../images/product-sample.avif"
                className=" w-10  h-10"
                alt="product image"
              />
              <div className="flex-1 flex-col">
                <h4 className="text-gray-700">Prodduct name</h4>
                <span className="text-sm text-gray-400">#000code</span>
              </div>
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-2 py-1 rounded-md">+ Add this</button>
            </li>
          ))}
        </ul>
      </div>
      {/* product list */}
      <div>
        <Pagination />
      </div>
    </div>
  );
};

export default ProductList;
