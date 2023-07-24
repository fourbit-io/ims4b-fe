import { useRouter } from "next/router";
import { useState } from "react";
import {
  stockReportTableHeader as tableHeaders,
  stockModal,
  stocksTable,
  buttons,
} from "@/contents/bengali";
import { userInfo } from "@/api/authentication/userInfo";

export const stocks = () => {
  const { role } = userInfo();
  const router = useRouter();
  const tableColumns = [
    "stockId",
    "productName",
    "productCode",
    "quantity",
    "productUnit",
  ];
  const { pageTitle, newStockType, damagedStockType } = stocksTable;

  const [stockLists, setStockLists] = useState([]);

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
    pageTitle,
    stockLists,
    setStockLists,
    role,
    printHeader,
  };
};
