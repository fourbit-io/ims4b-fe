import React, { useEffect } from "react";
import { buttons } from "@/contents/bengali";
import Table from "@/components/reusable/Table";
import { useProducts } from "./useProduct";
import StatusHandler from "@/components/reusable/StatusHandler";
import { products } from "./utils/product";
import { convertNumber, convertDate } from "@/lib/convertToBen";
import Head from "next/head";
import { CSVLink } from "react-csv";
import Filter from "./Filter";

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
        ref: dataValue?.stockOutReference,
        balance: convertNumber(dataValue?.balance ?? 0),
      };

      return values;
    });
    setProductLists(dataValues);
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
          {productLists?.length > 0 && (
            <div className="mt-3 md:mt-0 flex gap-2 items-center">
              <CSVLink
                data={productLists}
                headers={printHeader}
                filename={"product.csv"}
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
            productFilter={productFilter}
            filter={filter}
            setFilter={setFilter}
            refetch={refetch}
          />
          <Table
            tableHeaders={tableHeaders}
            tableItems={productLists}
            tableColumns={tableColumns}
          />
        </StatusHandler>
      </div>
    </>
  );
};

export default ProductReport;
