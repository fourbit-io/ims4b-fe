import { useRouter } from "next/router";
import { useState } from "react";
import {
  stockReportTableHeader as tableHeaders,
  stocksTable,
  stockFilter,
} from "@/contents/bengali";

export const stocks = () => {
  const router = useRouter();
  const tableColumns = [
    "stockId",
    "productName",
    "productCode",
    "quantity",
    "productUnit",
  ];
  const { pageTitle } = stocksTable;

  const [stockLists, setStockLists] = useState([]);

  const [filter, setFilter] = useState({
    pid: "",
    pName: "",
    qtyOrder: "desc",
    startDate: "",
    endDate: "",
  });

  const toObject = (arr1, arr2) => {
    let obj = [];
    arr1.forEach((element, index) => {
      obj.push({ label: element, key: arr2[index] });
    });
    return obj;
  };

  const printHeader = toObject(tableHeaders, tableColumns);

  return {
    router,
    tableColumns,
    tableHeaders,
    stockFilter,
    pageTitle,
    stockLists,
    setStockLists,
    filter,
    setFilter,
    printHeader,
  };
};
