import React from "react";
import { showProduct } from "@/contents/bengali";
import { BsFillCircleFill } from "react-icons/bs";
import { convertDate, convertNumber } from "@/lib";

const Details = ({ data }) => {
  const {
    pageTitle,
    date,
    productName,
    productCode,
    productQty,
    productUnit,
    vendorName,
    vendorAddress,
    vendorBillNumber,
    vendorInfo,
    productDetails,
    stockHistoryTitle,
    prodStockTitle,
    stockUpdateTitle,
    dateSub,
    stockAddHistorySub,
    stockRemoveHistorySub,
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
          <p className="font-extrabold text-gray-600">{date}</p>
          <hr />
          <p> {convertDate(data?.date)}</p>
        </div>

        <div className="p-2">
          <p className="font-extrabold text-gray-600">{productCode}</p>
          <hr />
          <p> {data?.slug}</p>
        </div>
        <div className="p-2">
          <p className="font-extrabold text-gray-600">{productQty}</p>
          <hr />
          <p> {convertNumber(data?.quantity)}</p>
        </div>
        <div className="p-2">
          <p className="font-extrabold text-gray-600">{productUnit}</p>
          <hr />
          <p> {data?.unit}</p>
        </div>
      </div>
      <div className="grid grid-cols-4 px-4 my-10 divide-x-2  text-center">
        <div className="p-2">
          <p className="font-extrabold text-gray-600">{productName}</p>
          <hr />
          <p> {data?.name}</p>
        </div>
        <div className="p-2">
          <p className="font-extrabold text-gray-600">{vendorName}</p>
          <hr />
          <p> {data?.vendorName}</p>
        </div>
        <div className="p-2">
          <p className="font-extrabold text-gray-600">{vendorAddress}</p>
          <hr />
          <p> {data?.vendorAddress}</p>
        </div>
        <div className="p-2">
          <p className="font-extrabold text-gray-600">{vendorBillNumber}</p>
          <hr />
          <p> {convertNumber(data?.vendorBillNumber)}</p>
        </div>
      </div>
      <div className="px-4">
        <div className="font-extrabold text-gray-600 underline">
          {vendorInfo} :{" "}
        </div>
        <div className="px-0">{data?.vendorInfo}</div>
      </div>

      <div className="px-4">
        <div className="font-extrabold text-gray-600 underline">
          {productDetails} :{" "}
        </div>
        <div className="px-0">{data?.details}</div>
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
                  <div className="flex-1 flex gap-2 items-center">
                    <BsFillCircleFill
                      className={`${
                        idx !== 0 && !item?.incrementQuantity
                          ? "text-red-400"
                          : "text-primary-400"
                      }`}
                    />
                    <p>
                      {item?.user?.name ?? item?.user?.userName}
                      <span className="font-bold">
                        {" "}
                        {idx === 0
                          ? convertDate(data?.date)
                          : convertDate(item?.updatedAt)}{" "}
                      </span>
                      {dateSub}
                      <span className="font-bold">
                        {" "}
                        {idx !== 0 && convertNumber(item?.quantityChange)}{" "}
                        {idx !== 0 && data?.unit} {data?.name}{" "}
                      </span>
                      {idx !== 0 && !item?.incrementQuantity
                        ? stockRemoveHistorySub
                        : stockAddHistorySub}{" "}
                    </p>
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
