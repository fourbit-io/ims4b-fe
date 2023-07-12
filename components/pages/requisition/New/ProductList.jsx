import React, { useState, useEffect } from "react";
import Pagination from "@/components/reusable/Pagination";
import { newRequisition, productsTable } from "@/contents/bengali";
import StatusHandler from "@/components/reusable/StatusHandler";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../../../slices/productSlice";
import { useProducts } from "./useNewRequisition";

const ProductList = () => {
  const { pageTitle } = productsTable;
  const { productAddBtn } = newRequisition;

  const [productLists, setProductLists] = useState([]);

  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchString, setSearchString] = useState("");

  const { data, isLoading, error } = useProducts(searchString, currentPage);

  useEffect(() => {
    setProductLists(data?.data?.data);
    let totalPages = Math.ceil(
      data?.data?.meta?.total / data?.data?.meta?.limit
    );
    setPages(totalPages);
  }, [data, currentPage, searchString]);

  const dispatch = useDispatch();
  const selectedProducts = useSelector((state) => state.product.productData);

  const handleAddProduct = (product) => {
    let { id, name, slug } = product;
    dispatch(
      add({
        productId: id,
        name,
        code: slug,
        quantity: 0,
      })
    );
  };

  return (
    <div className="space-y-4">
      <h2>
        {pageTitle}
        <span className="text-gray-400"> ({data?.data?.meta?.total})</span>
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
          onChange={(e) => setSearchString(e?.target?.value)}
          className="w-full py-2 pl-12 pr-4 text-sm text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-primary-600"
        />
      </div>
      {/* search field */}

      {/* product list  */}
      <StatusHandler isLoading={isLoading} error={error}>
        <ul className="space-y-2">
          {productLists?.map((item, id) => (
            <li className="flex justify-start items-center gap-4" key={id}>
              <p className="w-10  h-10 flex justify-center items-center font-bold bg-gray-400 text-white text-4xl uppercase border-2 border-gray-400 rounded-md bg-secondary-main">
                {item?.name[0] ?? "N"}
              </p>
              <div className="flex-1 flex-col">
                <h4 className="text-gray-700">{item?.name}</h4>
                <span className="text-sm text-gray-400">{item?.slug}</span>
              </div>
              {selectedProducts?.filter(
                (sItem) => sItem?.productId === item?.id).length === 0 && (
                <button
                  onClick={() => handleAddProduct(item)}
                  className="bg-primary-500 hover:bg-primary-600 text-white px-2 py-1 rounded-md">
                  + {productAddBtn}
                </button>
              )}
            </li>
          ))}
        </ul>
        {/* product list */}
        <Pagination
          pages={pages}
          setPages={setPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </StatusHandler>
    </div>
  );
};

export default ProductList;
