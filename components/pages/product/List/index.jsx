import React, { useEffect } from "react";
import { newProduct } from "@/contents/bengali";
import Table from "@/components/reusable/Table";
import { useProducts } from "./useProduct";
import StatusHandler from "@/components/reusable/StatusHandler";
import { products } from "./utils/products";
import Modal from "@/components/reusable/Modal";
import Pagination from "../../../reusable/Pagination";
import { convertDate, convertNumber } from "@/lib";
import Head from "next/head";

const List = () => {
  const {
    router,
    tableColumns,
    tableHeaders,
    pageTitle,
    productLists,
    productItem,
    setProductLists,
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
  } = products();

  const { data, isLoading, error } = useProducts(currentPage);

  useEffect(() => {
    const dataValues = data?.data?.data?.map((dataValue, idx) => {
      const values = {
        sl: convertNumber(idx + 1),
        id: dataValue?.id,
        name: dataValue?.name,
        slug: dataValue?.slug,
        quantity: convertNumber(dataValue?.quantity),
        unit: dataValue?.unit,
        vendorName: dataValue?.vendorName,
        vendorAddress: dataValue?.vendorAddress,
        vendorBillNumber: dataValue?.vendorBillNumber,
        vendorInfo: dataValue?.vendorInfo,
        details: dataValue?.details,
        date: convertDate(dataValue?.date),
      };
      return values;
    });
    setProductLists(dataValues);
    let totalPages = Math.ceil(
      data?.data?.meta?.total / data?.data?.meta?.limit
    );
    setPages(totalPages);
  }, [data, currentPage]);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      {deleteModal && (
        <Modal
          state={deleteModal}
          setState={setDeleteModal}
          content={deleteModalContent}
          action={deleteAction}
          id={productItem?.id}
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
              onClick={() => router.push("/products/new")}
              className="inline-block px-4 py-2 text-white duration-150 font-medium bg-primary-600 rounded-lg hover:bg-primary-500 active:bg-primary-700 md:text-sm">
              {newProduct?.pageTitle}
            </button>
          </div>
        </div>
        <StatusHandler isLoading={isLoading || dltIsLoading} error={error}>
          <Table
            tableHeaders={tableHeaders}
            tableItems={productLists}
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
