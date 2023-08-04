import React, { useRef } from "react";
import { showPurchase, buttons } from "@/contents/bengali";
import { convertDate, convertNumber } from "@/lib";
import { useReactToPrint } from "react-to-print";

const Details = ({ data }) => {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const {
    pageTitle,
    date,
    id,
    purchaseTitle,
    status,
    createdBy,
    remark,
    details,
  } = showPurchase;
  return (
    <main>
      <div ref={componentRef}>
        <div className="mt-5 space-y-2">
          <div className="flex items-center py-2">
            <h3 className="text-gray-600 text-2xl font-semibold px-4">
              {pageTitle}
            </h3>
          </div>
          <hr />
        </div>
        <div className="grid grid-cols-5 px-4 my-10 divide-x-2  text-center">
          <div className="p-2">
            <p className="font-extrabold text-gray-600">{id}</p>
            <hr />
            <p> {convertNumber(data?.id)}</p>
          </div>
          <div className="p-2">
            <p className="font-extrabold text-gray-600">{purchaseTitle}</p>
            <hr />
            <p> {data?.title}</p>
          </div>
          <div className="p-2">
            <p className="font-extrabold text-gray-600">{status}</p>
            <hr />
            <p> {data?.status}</p>
          </div>
          <div className="p-2">
            <p className="font-extrabold text-gray-600">{createdBy}</p>
            <hr />
            <p> {data?.createdByUser?.name ?? data?.createdByUser?.userName}</p>
          </div>
          <div className="p-2">
            <p className="font-extrabold text-gray-600">{date}</p>
            <hr />
            <p> {convertDate(data?.date)}</p>
          </div>
        </div>
        <div className="px-4 py-2">
          <div className="font-extrabold text-gray-600 underline">
            {remark} :{" "}
          </div>
          <div className="px-0">{data?.remark}</div>
        </div>
        <div className="px-4 py-2">
          <div className="font-extrabold text-gray-600 underline">
            {details} :{" "}
          </div>
          <div className="px-0">{data?.description}</div>
        </div>
      </div>
      <div className="my-10 flex justify-center">
        <button
          className="text-center bg-primary-600 text-white hover:bg-primary-500 rounded-md px-2 py-1"
          onClick={handlePrint}>
          {buttons?.print}
        </button>
      </div>
    </main>
  );
};

export default Details;
