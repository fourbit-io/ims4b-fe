import { useRouter } from "next/router";
import { HiPencilAlt } from "react-icons/hi";
import { BsTrash, BsCheckLg } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";
import { useState } from "react";
import {
  stockTableHeader as tableHeaders,
  stockModal,
  stocksTable,
  buttons,
} from "@/contents/bengali";
import { useApproveStock, useDeleteStock, useRejectStock } from "../useStock";
import { userInfo } from "@/api/authentication/userInfo";

export const stocks = () => {
  const { role } = userInfo();
  const router = useRouter();
  const tableColumns = [
    "stockId",
    "date",
    "productName",
    "productCode",
    "quantity",
    "productUnit",
    "type",
    "status",
    "statusDate",
    "user",
    "actions",
  ];
  const { pageTitle, newStockType, damagedStockType } = stocksTable;
  const { deleteModalContent, approveModalContent, rejectModalContent } = stockModal;

  const [stockLists, setStockLists] = useState([]);
  const [deleteModal, setDeleteModal] = useState(false);
  const [approveModal, setApproveModal] = useState(false);
  const [rejectModal, setRejectModal] = useState(false);
  const [stockItem, setStockItem] = useState();

  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const { mutate: deleteStock, isLoading: dltIsLoading } = useDeleteStock();

  const { mutate: approveStock, isLoading: aprvIsLoading } = useApproveStock();

  const { mutate: rejectStock, isLoading: rjctIsLoading } = useRejectStock();

  const redirectEditPage = (id) => {
    router.push(`/stocks/edit/${id}`);
  };

  const redirectShowPage = (id) => {
    router.push(`/stocks/show/${id}`);
  };

  const renderActions = (row) => (
    <div className="flex items-center gap-2 justify-end">
      <button
        className={`flex items-center gap-1 w-[100px] md:w-auto  border px-2 py-1 rounded-md bg-primary-600 text-white hover:bg-primary-500 cursor-pointer ${
          row?.status === "PENDING" ? "block" : "hidden"
        }`}
        onClick={() => {
          setApproveModal(true);
          setStockItem(row);
        }}>
        <BsCheckLg />
        {buttons?.approve}
      </button>
      <button
        className={`flex items-center gap-1 w-[100px] md:w-auto  border px-2 py-1 rounded-md bg-red-600 text-white hover:bg-red-500 cursor-pointer ${
          row?.status === "PENDING" ? "block" : "hidden"
        }`}
        onClick={() => {
          setRejectModal(true);
          setStockItem(row);
        }}>
        <MdOutlineCancel />
        {buttons?.reject}
      </button>
      {row?.status === "PENDING" && (
        <button
          className="flex items-center gap-1 w-[100px] md:w-auto border px-2 py-1 rounded-md bg-orange-600 text-white hover:bg-orange-500 cursor-pointer"
          onClick={() => redirectEditPage(row?.id)}>
          <HiPencilAlt />
          {buttons?.edit}
        </button>
      )}

      {/* <BiShow
        className="w-7 h-7 border p-1 rounded-md bg-primary-600 text-white hover:bg-primary-500 cursor-pointer"
        onClick={() => redirectShowPage(row?.id)}
      /> */}
      {role === "SUPERADMIN" && (
        <button
          className="flex items-center gap-1 w-[100px] md:w-auto  border px-2 py-1 rounded-md bg-red-600 text-white hover:bg-red-500 cursor-pointer"
          onClick={() => {
            setDeleteModal(true);
            setStockItem(row);
          }}>
          <BsTrash />
          {buttons?.delete}
        </button>
      )}
    </div>
  );

  const deleteAction = (id) => {
    deleteStock(id);
  };
  const approveAction = (id) => {
    approveStock(id);
  };

  const rejectAction = (id) => {
    rejectStock(id);
  };

  return {
    router,
    tableColumns,
    tableHeaders,
    pageTitle,
    newStockType,
    damagedStockType,
    stockLists,
    setStockLists,
    renderActions,
    approveModal,
    setApproveModal,
    approveModalContent,
    approveAction,
    aprvIsLoading,

    rejectModal,
    setRejectModal,
    rejectModalContent,
    rejectAction,
    rjctIsLoading,

    deleteModal,
    setDeleteModal,
    deleteModalContent,
    deleteAction,
    dltIsLoading,
    stockItem,
    pages,
    setPages,
    currentPage,
    setCurrentPage,
    role,
  };
};
