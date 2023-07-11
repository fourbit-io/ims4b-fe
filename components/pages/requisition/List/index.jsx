import React, { useEffect } from "react";
import { newRequisition } from "@/contents/bengali";
import Table from "@/components/reusable/Table";
import { useRequisitions } from "./useRequisition";
import StatusHandler from "@/components/reusable/StatusHandler";
import Modal from "@/components/reusable/Modal";
import Pagination from "@/components/reusable/Pagination";
import { requisitions } from "./utils/requisition";
import {convertNumber, convertDate } from "@/lib";

const List = () => {
  const {
    router,
    tableColumns,
    tableHeaders,
    pageTitle,
    requisitionLists,
    requisitionItem,
    setRequisitionLists,
    renderActions,
    approveModal,
    setApproveModal,
    approveModalContent,
    approveAction,
    aprvIsLoading,
    deleteModal,
    setDeleteModal,
    deleteModalContent,
    deleteAction,
    dltIsLoading,
    pages,
    setPages,
    currentPage,
    setCurrentPage,
  } = requisitions();

  const { data, isLoading, error } = useRequisitions(currentPage);

  useEffect(() => {
    const dataValues = data?.data?.data?.map((dataValue) => {
      const values = {
        id: convertNumber(dataValue?.id),
        date: convertDate(dataValue?.createdAt),
        createdBy: dataValue?.createdByUser?.userName,
        assignedTo: dataValue?.assginedUser?.userName,
        approvedBy: dataValue?.approvedByUser?.userName,
        status: dataValue?.status,
      };
      return values;
    });

    setRequisitionLists(dataValues);
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
          id={requisitionItem?.id}
        />
      )}
      {approveModal && (
        <Modal
          state={approveModal}
          setState={setApproveModal}
          content={approveModalContent}
          action={approveAction}
          id={requisitionItem?.id}
        />
      )}
      <div className="max-w-screen-xl mx-auto p-4 md:p-8">
        <div className="items-start justify-between md:flex">
          <div className="max-w-lg">
            <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
              {pageTitle}
            </h3>
          </div>
          <div className="mt-3 md:mt-0">
            <button
              onClick={() => router.push("/requisitions/new")}
              className="inline-block px-4 py-2 text-white duration-150 font-medium bg-primary-600 rounded-lg hover:bg-primary-500 active:bg-primary-700 md:text-sm">
              {newRequisition?.pageTitle}
            </button>
          </div>
        </div>
        <StatusHandler
          isLoading={isLoading || dltIsLoading || aprvIsLoading}
          error={error}>
          <Table
            tableHeaders={tableHeaders}
            tableItems={requisitionLists}
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
