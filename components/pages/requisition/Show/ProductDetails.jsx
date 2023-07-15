import React from "react";
import { convertNumber, convertDate } from "@/lib";
import Actions from "./Actions";

const ProductDetails = ({ data, showRequisition, buttons }) => {
  const {
    id,
    status,
    remark,
    createdByUser,
    assginedUser,
    assginedByUser,
    approvedByUser,
    updatedAt,
    requisitionProduct,
  } = data;

  const {
    productHeader,
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
    <div>
      <div className="mt-5 space-y-2">
        <div className="flex items-center py-2">
          <h3 className="text-gray-600 text-2xl font-semibold px-4 my-6">
            {productHeader}
          </h3>
          <Actions id={id} status={status}/>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="px-4 flex gap-2 items-center">
          <span className="font-extrabold text-gray-600">{createdBy} :</span>
          <span>{createdByUser?.userName}</span>
        </div>
        <div className="px-4 flex gap-2 items-center">
          <span className="font-extrabold text-gray-600">{date} : </span>
          <span>{convertDate(updatedAt)}</span>
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
          className="grid grid-cols-4 px-4 my-2 border divide-x-2 text-center">
          <div>
            <p className="text-gray-600">{item?.product?.name}</p>
          </div>
          <div>
            <p className="text-gray-600">{item?.product?.slug}</p>
          </div>
          <div>
            <p className="text-gray-600">{convertNumber(item?.quantity)}</p>
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
    </div>
  );
};

export default ProductDetails;
