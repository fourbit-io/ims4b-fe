import React, { useEffect } from "react";
import { newStock, damagedStock } from "@/contents/bengali";
import Table from "@/components/reusable/Table";
import { useStocks } from "./useStock";
import StatusHandler from "@/components/reusable/StatusHandler";
import { stocks } from "./utils/stock";
import Modal from "@/components/reusable/Modal";
import Pagination from "../../../reusable/Pagination";
import { convertDate, convertNumber } from "../../../../lib/convertToBen";
import Head from "next/head";
import { CSVLink } from "react-csv";

const StockReport = () => {
  const {
    tableColumns,
    tableHeaders,
    pageTitle,
    stockLists,
    setStockLists,
    printHeader,
  } = stocks();

  const { data, isLoading, error } = useStocks();

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
              <CSVLink
                data={stockLists}
                headers={printHeader}
                filename={"stock.csv"}
                style={{
                  backgroundColor: "green",
                  color: "white",
                  padding: 5,
                  borderRadius: 5,
                  cursor: "pointer",
                }}>
                Download me
              </CSVLink>
            </div>
          )}
        </div>
        <StatusHandler isLoading={isLoading} error={error}>
          <Table
            tableHeaders={tableHeaders}
            tableItems={stockLists}
            tableColumns={tableColumns}
          />
          {/* <Pagination
            pages={pages}
            setPages={setPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          /> */}
        </StatusHandler>
      </div>
    </>
  );
};

export default StockReport;
