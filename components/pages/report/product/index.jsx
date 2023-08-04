import React, { useEffect, useRef } from "react";
import { buttons } from "@/contents/bengali";
import Table from "@/components/reusable/Table";
import { useProducts } from "./useProduct";
import StatusHandler from "@/components/reusable/StatusHandler";
import { products } from "./utils/product";
import { convertNumber, convertDate } from "@/lib/convertToBen";
import Head from "next/head";
import { CSVLink } from "react-csv";
import Filter from "./Filter";

import { useReactToPrint } from "react-to-print";

const ProductReport = () => {
  const {
    tableColumns,
    tableHeaders,
    productFilter,
    pageTitle,
    productLists,
    setProductLists,
    filter,
    setFilter,
    printHeader,
  } = products();

  const { data, isLoading, error, refetch } = useProducts(filter);

  useEffect(() => {
    const dataValues = data?.data?.data?.map((dataValue) => {
      const values = {
        pId: convertNumber(dataValue?.productId),
        pName: dataValue?.prodcutName,
        stockInDate: dataValue?.stockInDate
          ? convertDate(dataValue?.stockInDate)
          : "-",
        stockInQty: convertNumber(dataValue?.stockInQuantity ?? 0),
        stockOutDate: dataValue?.stockOutDate
          ? convertDate(dataValue?.stockOutDate)
          : "-",
        stockOutQty: convertNumber(dataValue?.stockOutQuantity ?? 0),
        ref: dataValue?.createdBy?.name ?? "-",
        balance: dataValue?.balance
          ? convertNumber(dataValue?.balance)
          : convertNumber(0),
      };

      return values;
    });
    setProductLists(dataValues);
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
          {productLists?.length > 0 && (
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
            productFilter={productFilter}
            filter={filter}
            setFilter={setFilter}
            refetch={refetch}
          />
          <div ref={tableRef} className="px-2">
            <Table
              tableHeaders={tableHeaders}
              tableItems={productLists}
              tableColumns={tableColumns}
            />
          </div>
        </StatusHandler>
      </div>
    </>
  );
};

export default ProductReport;
