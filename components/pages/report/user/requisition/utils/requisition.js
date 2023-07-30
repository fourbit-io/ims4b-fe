import { useRouter } from "next/router";
import { useState } from "react";
import {
  requisitionReportTableHeader as tableHeaders,
  requisitionsTable,
  requisitionFilter,
} from "@/contents/bengali";

export const requisitions = () => {
  const router = useRouter();
  const tableColumns = [
    "eId",
    "eName",
    "pId",
    "pName",
    "reqDate",
    "reqQty",
    "deliveredQty",
    "status",
  ];
  const { pageTitle } = requisitionsTable;

  const [requisitionLists, setRequisitionLists] = useState([]);

  const [filter, setFilter] = useState({
    reqStatus: "",
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
    requisitionFilter,
    pageTitle,
    requisitionLists,
    setRequisitionLists,
    filter,
    setFilter,
    printHeader,
  };
};
