import React, { useState } from "react";
import {
  AiOutlineFileSearch,
  AiOutlineClose,
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { selectedProductsContent } from "@/contents/bengali";
import { remove, qtyCount, removeAll } from "@/slices/productSlice";

const SelectedProduct = ({ mutate, isLoading, remarkValue }) => {
  const {
    pageTitle,
    emptyProdContent,
    productName,
    productCode,
    productQty,
    totalItm,
    totalQt,
    note,
    optional,
    submitBtn,
    submitBtnLoading,
    cancelBtn,
  } = selectedProductsContent;

  const selectedProducts = useSelector((state) => state.product.productData);

  const totalItem = useSelector((state) => state.product.totalItem);
  const totalQty = useSelector((state) => state.product.totalQty);
  const dispatch = useDispatch();

  const [remark, setRemark] = useState("");

  const removeProduct = (id) => {
    dispatch(remove(id));
  };

  const handleProductCount = (id, type) => {
    dispatch(qtyCount({ id, type }));
  };

  const handleCancelAll = () => {
    dispatch(removeAll());
    setRemark("");
  };

  const handleSubmit = () => {
    if (remarkValue) {
      mutate({ requisitionProducts: selectedProducts, remark });
    } else {
      mutate(selectedProducts);
    }
  };
  return (
    <div className="px-4">
      <div className="bg-gray-50 p-2 rounded-md">
        <h3 className="p-3 text-gray-600">{pageTitle}</h3>
        {selectedProducts?.length > 0 ? (
          <div>
            <div className="grid grid-cols-3 gap-2 px-2 text-gray-400">
              <div>{productName}</div>
              <div>{productCode}</div>
              <div>{productQty}</div>
            </div>
            <hr className="text-gray-600" />
            {selectedProducts?.map((item, id) => (
              <div
                key={id}
                className="grid grid-cols-3 gap-2 items-center my-2 px-2">
                <div>{item?.name}</div>
                <div>{item?.code}</div>
                <div className="flex gap-4 items-center">
                  <div className="flex-1 flex items-center justify-between border px-2 py-1 rounded-md">
                    <AiOutlineMinus
                      onClick={() => handleProductCount(item?.productId, "dec")}
                      className="cursor-pointer"
                    />
                    <span>{item?.quantity}</span>
                    <AiOutlinePlus
                      onClick={() => handleProductCount(item?.productId, "inc")}
                      className="cursor-pointer"
                    />
                  </div>
                  <AiOutlineClose
                    onClick={() => removeProduct(item?.productId)}
                    className="text-red-500 cursor-pointer"
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="h-[300px] flex items-center justify-center">
            <div>
              <AiOutlineFileSearch className="text-[100px] text-gray-300 m-auto" />
              <span className="text-gray-400 text-sm m-auto">
                {emptyProdContent}
              </span>
            </div>
          </div>
        )}

        <hr className="text-gray-600" />
        <div className="ml-4 flex justify-start gap-8 items-center text-gray-400">
          <p>
            {totalQt}: {totalQty}
          </p>
          <p>
            {totalItm}: {totalItem}
          </p>
        </div>
      </div>
      {remarkValue && (
        <div>
          <h4 className="p-1 text-gray-600">
            {note} ({optional})
          </h4>
          <textarea
            rows={4}
            placeholder={note}
            onChange={(e) => setRemark(e.target.value)}
            value={remark}
            className="w-full bg-gray-50 border-2 border-gray-200 rounded-sm px-3 py-2"></textarea>
        </div>
      )}

      <div className="flex items-center gap-4 py-2">
        <button
          onClick={handleCancelAll}
          className="px-2 py-1 bg-red-400 text-white rounded-md">
          {cancelBtn}
        </button>
        <button
          disabled={isLoading}
          onClick={handleSubmit}
          className={`px-2 py-1 ${
            isLoading ? "bg-gray-400" : "bg-primary-600"
          }  text-white rounded-md`}>
          {isLoading ? submitBtnLoading : submitBtn}
        </button>
      </div>
    </div>
  );
};

export default SelectedProduct;
