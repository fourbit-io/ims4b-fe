import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { newProduct } from "@/contents/bengali";
import {
  productTableHeader as tableHeaders,
  productsTable,
} from "@/contents/bengali/product";
import Table from "../../../reusable/Table";
import { useProducts } from "./useProduct";
import StatusHandler from "../../../reusable/StatusHandler";

const List = () => {
  const router = useRouter();
  const tableItems = [
    {
      name: "Solo learn app",
      quantity: "0",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut odio temporibus voluptas error distinctio hic quae corrupti vero doloribus optio! Inventore ex quaerat modi blanditiis",
      createdAt: "09/02/2023",
    },
    {
      name: "Solo learn app",
      quantity: "0",
      details: "Hello",
      createdAt: "09/02/2023",
    },
    {
      name: "Solo learn app",
      quantity: "0",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut odio temporibus voluptas error distinctio hic quae corrupti vero doloribus optio! Inventore ex quaerat modi blanditiis",
      createdAt: "09/02/2023",
    },
  ];
  const tableColumns = ["name", "quantity", "details", "createdAt", "actions"];
  const { pageTitle } = productsTable;

  const [productLists, setProductLists] = useState([]);
  const { data, isLoading, error } = useProducts();

  useEffect(() => {
    setProductLists(data?.data?.data);
  }, [data]);

  const renderActions = () => (
    <>
      <button
        className="bg-primary-600 text-white px-2 py-1 rounded-md hover:bg-primary-500"
        onClick={() => console.log("btn clicked")}>
        view details
      </button>
    </>
  );
  return (
    <div className="max-w-screen-xl mx-auto p-4 md:p-8">
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
      <StatusHandler isLoading={isLoading} error={error}>
      <Table
        tableHeaders={tableHeaders}
        tableItems={productLists}
        tableColumns={tableColumns}
        getActions={renderActions}
      />
      </StatusHandler>
    </div>
  );
};

export default List;
