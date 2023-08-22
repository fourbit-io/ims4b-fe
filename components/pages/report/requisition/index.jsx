import React, { useEffect, useRef } from "react";
import { buttons } from "@/contents/bengali";
import Table from "@/components/reusable/Table";
import { useRequisitions } from "./useRequisition";
import StatusHandler from "@/components/reusable/StatusHandler";
import { requisitions } from "./utils/requisition";
import { convertNumber, convertDate } from "@/lib/convertToBen";
import Head from "next/head";
import Filter from "./Filter";
import { useReactToPrint } from "react-to-print";
import { CSVLink } from "react-csv";

const RequisitionReport = () => {
  const {
    tableColumns,
    tableHeaders,
    requisitionFilter,
    pageTitle,
    requisitionLists,
    setRequisitionLists,
    filter,
    setFilter,
    printHeader,
  } = requisitions();

  const { data, isLoading, error, refetch } = useRequisitions(filter);

  useEffect(() => {
    let values = [];
    const dataValues = data?.data?.data?.map((dataValue) => {
      dataValue?.requisitionProduct?.map((item) => {
        values = {
          eId: convertNumber(dataValue?.createdByUser?.id),
          eName: dataValue?.createdByUser?.name,
          pId: convertNumber(item?.product?.id),
          pName: item?.product?.name,
          reqDate: convertDate(dataValue?.createdAt),
          reqQty: convertNumber(item?.quantity),
          deliveredQty:
            dataValue?.status === "RELEASED"
              ? convertNumber(item?.requisitionProductActivity[0]?.toQuantity)
              : convertNumber(0),
          status: dataValue?.status,
        };
      });

      return values;
    });
    setRequisitionLists(dataValues);
  }, [data]);

  //Print functions
  const tableRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => tableRef.current,
  });

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div className="w-full mx-auto p-4 md:p-8">
        <div className="items-start justify-between md:flex">
          <div className="max-w-lg">
            <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
              {pageTitle}
            </h3>
          </div>
          {requisitionLists?.length > 0 && (
            <div className="mt-3 md:mt-0 flex gap-2 items-center">
              <button
                className="text-center bg-primary-600 text-white hover:bg-primary-500 rounded-md px-2 py-1"
                onClick={handlePrint}>
                {buttons?.pdfDownload}
              </button>
              <CSVLink
                data={requisitionLists}
                headers={printHeader}
                filename={"requisition.csv"}
                style={{
                  backgroundColor: "green",
                  color: "white",
                  padding: 5,
                  borderRadius: 5,
                  cursor: "pointer",
                  padding: "5px 10px 5px 10px",
                }}>
                {buttons?.download}
              </CSVLink>
            </div>
          )}
        </div>
        <StatusHandler isLoading={isLoading} error={error}>
          <Filter
            requisitionFilter={requisitionFilter}
            filter={filter}
            setFilter={setFilter}
            refetch={refetch}
          />
          <div ref={tableRef} className="px-2">
            <Table
              tableHeaders={tableHeaders}
              tableItems={requisitionLists}
              tableColumns={tableColumns}
            />
          </div>
        </StatusHandler>
      </div>
    </>
  );
};

export default RequisitionReport;
