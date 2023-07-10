import React from "react";
import { showProduct } from "@/contents/bengali";
import {BsFillCalendarDateFill, BsFillClipboardFill } from "react-icons/bs"
import {FaUserCircle} from "react-icons/fa"

const Details = ({ data }) => {
  const {
    pageTitle,
    date,
    productName,
    productCode,
    productQty,
    productDetails,
    stockHistoryTitle,
    prodStockTitle,
    stockUpdateTitle,
    dateSub,
    stockAddHistorySub,
    stockRemoveHistorySub
  } = showProduct;
  return (
    <main>
      <div className="mt-5 space-y-2">
        <h3 className="text-gray-600 text-2xl font-semibold px-4">
          {pageTitle}
        </h3>
        <hr />
      </div>
      <div className="grid grid-cols-4 px-4 my-10 divide-x-2  text-center">
        <div className="p-2">
          <p className="bg-primary-600 text-white rounded-md">{productName}</p>
          <p> {data?.name}</p>
        </div>
        <div className="p-2">
          <p className="bg-primary-600 text-white rounded-md">{productCode}</p>
          <p> {data?.slug}</p>
        </div>
        <div className="p-2">
          <p className="bg-primary-600 text-white rounded-md">{productQty}</p>
          <p>
            {" "}
            {data?.quantity} ({data?.unit})
          </p>
        </div>
        <div className="p-2">
          <p className="bg-primary-600 text-white rounded-md">{date}</p>
          <p> {data?.date.split("T")[0]}</p>
        </div>
      </div>
      <div className="px-4">
        <div className="bg-primary-600 text-white rounded-md px-3">
          {productDetails} :{" "}
        </div>
        <div className="px-2">{data?.details}</div>
      </div>

      <div className="mt-10 space-y-4">
        <h3 className="text-gray-600 text-2xl font-semibold px-4">
          {stockHistoryTitle}
        </h3>
        <hr />
      </div>
      <div>
        <ul className="space-y-4">
          {data?.productActivity?.map((item, idx) => (
            <li key={idx} className="px-5 py-2 bg-white rounded-md shadow-sm">
              <div>
                <div className="justify-between sm:flex">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-primary-600">
                      {idx === 0 ? prodStockTitle : stockUpdateTitle}
                    </h3>
                    <p>{item?.updatedAt.split("T")[0]} {dateSub} {idx !== 0 && item?.quantityChange} { idx !== 0 && data?.unit} {data?.name}  {stockAddHistorySub} </p>
                  </div>
                  <div className="mt-5 space-y-2 text-sm sm:mt-0">
                    <span className="flex gap-2 justify-between items-center text-gray-500">
                      <BsFillCalendarDateFill className="text-[18px]"/>
                      {item?.updatedAt.split("T")[0]}
                    </span>
                    <span className={`flex gap-2 justify-between items-center text-gray-500`}>
                      <BsFillClipboardFill className="text-[18px]"/>
                      {item?.quantityChange}
                    </span>
                    <span className="flex gap-2 justify-between items-center text-gray-500">
                      <FaUserCircle className="text-[18px]"/>
                      by superadmin
                    </span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Details;
