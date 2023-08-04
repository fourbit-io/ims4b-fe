import React, { useEffect, useRef } from "react";
import { buttons } from "@/contents/bengali";
import Table from "@/components/reusable/Table";
import { useStocks } from "./useStock";
import StatusHandler from "@/components/reusable/StatusHandler";
import { stocks } from "./utils/stock";
import { convertNumber } from "@/lib/convertToBen";
import Head from "next/head";
import Filter from "./Filter";
import { useReactToPrint } from "react-to-print";

const StockReport = () => {
  const {
    tableColumns,
    tableHeaders,
    stockFilter,
    pageTitle,
    stockLists,
    setStockLists,
    filter,
    setFilter,
    printHeader,
  } = stocks();

  const { data, isLoading, error, refetch } = useStocks(filter);

  useEffect(() => {
    const dataValues = data?.data?.data?.map((dataValue) => {
      const values = {
        stockId: convertNumber(dataValue?.id),
        quantity: convertNumber(dataValue?.quantity),
        productName: dataValue?.name,
        productCode: dataValue?.slug,
        productUnit: dataValue?.unit,
      };
      return values;
    });

    setStockLists(dataValues);
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
      <div className="max-w-screen-xl mx-auto p-4 md:p-8">
        <div className="items-start justify-between md:flex">
          <div className="max-w-lg">
            <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
              {pageTitle}
            </h3>
          </div>
          {stockLists?.length > 0 && (
            <div className="mt-3 md:mt-0 flex gap-2 items-center">
              <button
                className="text-center bg-primary-600 text-white hover:bg-primary-500 rounded-md px-2 py-1"
                onClick={handlePrint}>
                {buttons?.download}
              </button>
            </div>
          )}
        </div>
        <StatusHandler isLoading={isLoading} error={error}>
          <Filter
            stockFilter={stockFilter}
            filter={filter}
            setFilter={setFilter}
            refetch={refetch}
          />
          <div ref={tableRef} className="px-2">
            <Table
              tableHeaders={tableHeaders}
              tableItems={stockLists}
              tableColumns={tableColumns}
            />
          </div>
        </StatusHandler>
      </div>
    </>
  );
};

export default StockReport;
