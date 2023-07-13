import React from "react";
import { showPurchase } from "@/contents/bengali";
import { convertDate, convertNumber } from "@/lib";
import { useChangePurchaseData } from "./useShowPurchase";
import { userInfo } from "@/api/authentication/userInfo";

const { role } = userInfo();

const Details = ({ data }) => {
  const { mutate: approveMutate, isLoading: approveLoading } =
    useChangePurchaseData();
  const { mutate: rejectMutate, isLoading: rejectLoading } =
    useChangePurchaseData();
  const handleApprovePO = () => {
    const { id, title, description, remark } = data;
    const status = "APPROVED";
    const date = new Date().toISOString();
    approveMutate({ id, title, description, remark, status, date });
  };
  const handleCancelPO = () => {
    const { id, title, description, remark } = data;
    const status = "REJECTED";
    const date = new Date().toISOString();
    rejectMutate({ id, title, description, remark, status, date });
  };
  const {
    pageTitle,
    date,
    id,
    purchaseTitle,
    status,
    createdBy,
    remark,
    details,
    approveBtn,
    cancelBtn,
    loadingSubmitBtn,
  } = showPurchase;
  return (
    <main>
      <div className="mt-5 space-y-2">
        <div className="flex items-center py-2">
          <h3 className="text-gray-600 text-2xl font-semibold px-4">
            {pageTitle}
          </h3>
          { role !== "SHOPKEEPER" &&
            <div className="flex-1 px-2 flex gap-4 items-center justify-end">
            {data?.status !== "REJECTED" && (
              <button
                onClick={handleCancelPO}
                className={`${
                  rejectLoading
                    ? "bg-gray-600 hover:bg-gray-500 cursor-not-allowed"
                    : "bg-red-600 hover:bg-red-500 cursor-pointer"
                }  px-2 py-1 rounded-md text-white`}>
                {rejectLoading ? loadingSubmitBtn : cancelBtn}
              </button>
            )}
            {data?.status !== "APPROVED" && (
              <button
              onClick={handleApprovePO}
              className={`${
                approveLoading
                  ? "bg-gray-600 hover:bg-gray-500 cursor-not-allowed"
                  : "bg-primary-600 hover:bg-primary-500 cursor-pointer"
              } px-2 py-1 rounded-md text-white`}>
              {approveLoading ? loadingSubmitBtn : approveBtn}
            </button>
            )}

            
          </div>
          }
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
          <p> {data?.createdByUser?.userName}</p>
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
    </main>
  );
};

export default Details;
