import React, { useEffect } from "react";
import { newPurchase } from "@/contents/bengali";
import Table from "@/components/reusable/Table";
import { usePurchases } from "./usePurchase";
import StatusHandler from "@/components/reusable/StatusHandler";
import { purchases } from "./utils/purchases";
import Modal from "@/components/reusable/Modal";
import Pagination from "../../../reusable/Pagination";
import { convertDate, convertNumber } from "@/lib";

const List = () => {
  const {
    router,
    tableColumns,
    tableHeaders,
    pageTitle,
    purchaseLists,
    purchaseItem,
    setPurchaseLists,
    renderActions,
    deleteModal,
    setDeleteModal,
    deleteModalContent,
    deleteAction,
    dltIsLoading,
    pages,
    setPages,
    currentPage,
    setCurrentPage,
  } = purchases();

  const { data, isLoading, error } = usePurchases(currentPage);

  useEffect(() => {
    const dataValues = data?.data?.data?.map((dataValue) => {
      const values = {
        id: dataValue?.id,
        poId: convertNumber(dataValue?.id),
        title: dataValue?.title,
        status: dataValue?.status,
        remark: dataValue?.remark,
        description: dataValue?.description,
        date: convertDate(dataValue?.date),
        createdBy: dataValue?.createdByUser?.name ?? dataValue?.createdByUser?.userName,
      };
      return values;
    });
    setPurchaseLists(dataValues);
    console.log({purchaseLists});
    let totalPages = Math.ceil(
      data?.data?.meta?.total / data?.data?.meta?.limit
    );
    setPages(totalPages);
  }, [data, currentPage]);

  return (
    <>
      {deleteModal && (
        <Modal
          state={deleteModal}
          setState={setDeleteModal}
          content={deleteModalContent}
          action={deleteAction}
          id={purchaseItem?.id}
        />
      )}
      <div className="w-full mx-auto p-4 md:p-8">
        <div className="items-start justify-between md:flex">
          <div className="max-w-lg">
            <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
              {pageTitle}
            </h3>
          </div>
          <div className="mt-3 md:mt-0">
            <button
              onClick={() => router.push("/purchases/new")}
              className="inline-block px-4 py-2 text-white duration-150 font-medium bg-primary-600 rounded-lg hover:bg-primary-500 active:bg-primary-700 md:text-sm">
              {newPurchase?.pageTitle}
            </button>
          </div>
        </div>
        <StatusHandler isLoading={isLoading || dltIsLoading} error={error}>
          <Table
            tableHeaders={tableHeaders}
            tableItems={purchaseLists}
            tableColumns={tableColumns}
            getActions={renderActions}
          />
          <Pagination
            pages={pages}
            setPages={setPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </StatusHandler>
      </div>
    </>
  );
};

export default List;
