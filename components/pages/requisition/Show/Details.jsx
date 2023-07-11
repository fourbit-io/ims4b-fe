import React from "react";
import { showRequisition } from "@/contents/bengali";
import { BsFillCircleFill } from "react-icons/bs";

const Details = ({ data }) => {
  const {
    status,
    remark,
    createdByUser,
    assginedUser,
    assginedByUser,
    approvedByUser,
    updatedAt,
    requisitionProduct,
    requisitionActivity,
  } = data;

  const {
    productHeader,
    pageTitle,
    productName,
    productCode,
    productQty,
    productUnit,
    date,
    remarks,
    statusContent,
    createdBy,
    assignedBy,
    assignedTo,
    approvedBy,
  } = showRequisition;

  return (
    <main>
      <div className="mt-5 space-y-2">
        <h3 className="text-gray-600 text-2xl font-semibold px-4 my-6">
          {productHeader}
        </h3>
      </div>
      <div className="flex items-center justify-between">
        <div className="px-4 flex gap-2 items-center">
          <span className="font-extrabold text-gray-600">{createdBy} :</span>
          <span>{createdByUser?.userName}</span>
        </div>
        <div className="px-4 flex gap-2 items-center">
          <span className="font-extrabold text-gray-600">{date} : </span>
          <span>{updatedAt.split("T")[0]}</span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="px-4 flex gap-2 items-center">
          <span className="font-extrabold text-gray-600">{assignedTo} : </span>
          <span>{assginedUser?.userName}</span>
        </div>
        <div className="px-4 flex gap-2 items-center">
          <span className="font-extrabold text-gray-600">
            {statusContent} :{" "}
          </span>
          <span>{status}</span>
        </div>
      </div>

      <div className="px-4 flex gap-2 items-center">
        <span className="font-extrabold text-gray-600">{approvedBy} : </span>
        <span>{approvedByUser?.userName}</span>
      </div>

      <div className="grid grid-cols-4 px-4 mt-4 border divide-x-2  text-center">
        <div>
          <p className="font-extrabold text-gray-600">{productName}</p>
        </div>
        <div>
          <p className="font-extrabold text-gray-600">{productCode}</p>
        </div>
        <div>
          <p className="font-extrabold text-gray-600">{productQty}</p>
        </div>
        <div>
          <p className="font-extrabold text-gray-600">{productUnit}</p>
        </div>
      </div>
      {requisitionProduct?.map((item, id) => (
        <div
          key={id}
          className="grid grid-cols-4 px-4 my-4 border divide-x-2 text-center">
          <div>
            <p className="text-gray-600">{item?.product?.name}</p>
          </div>
          <div>
            <p className="text-gray-600">{item?.product?.slug}</p>
          </div>
          <div>
            <p className="text-gray-600">{item?.quantity}</p>
          </div>
          <div>
            <p className="text-gray-600">{item?.product?.unit}</p>
          </div>
        </div>
      ))}

      <div className="px-4 flex gap-2 items-center">
        <span className="font-extrabold text-gray-600">{remarks} : </span>
        <span>{remark}</span>
      </div>

      <div className="mt-10 space-y-4">
        <h3 className="text-gray-600 text-2xl font-semibold px-4">
          {pageTitle}
        </h3>
      </div>
      <div>
        <ul className="space-y-4">
          {/* {requisitionActivity?.map((item, idx) => (
            <li key={idx} className="px-5 py-2 bg-white rounded-md shadow-sm">
              <div>
                <div className="justify-between sm:flex">
                  <div className="flex-1 flex gap-2 items-center">
                    <BsFillCircleFill
                      className={`${
                        idx !== 0 && !item?.incrementQuantity
                          ? "text-red-600"
                          : "text-primary-600"
                      }`}
                    />
                    <p>
                        {item?.user?.userName} 
                      <span className="font-bold">
                      {" "} {idx === 0 ? data?.date.split("T")[0] : item?.updatedAt.split("T")[0]}{" "}
                      </span>
                      {dateSub}
                      <span className="font-bold">
                      {" "}
                        {idx !== 0 && item?.quantityChange}{" "}
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
          ))} */}
        </ul>
      </div>
    </main>
  );
};

export default Details;
