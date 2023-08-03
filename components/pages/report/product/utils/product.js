import { useRouter } from "next/router";
import { useState } from "react";
import {
  productReportTableHeader as tableHeaders,
  productsTable,
  productFilter,
} from "@/contents/bengali";

export const products = () => {
  const router = useRouter();
  const tableColumns = [
    "pId",
    "pName",
    "stockInDate",
    "stockInQty",
    "stockOutDate",
    "stockOutQty",
    "balance",
    "ref",
  ];
  const { pageTitle } = productsTable;

  const [productLists, setProductLists] = useState([]);

  const [filter, setFilter] = useState({
    pId: "",
    pName: "",
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
    productFilter,
    pageTitle,
    productLists,
    setProductLists,
    filter,
    setFilter,
    printHeader,
  };
};
