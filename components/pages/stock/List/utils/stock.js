import { useRouter } from "next/router";
import { HiPencilAlt } from "react-icons/hi";
import { BiShow } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { useState } from "react";
import {
  stockTableHeader as tableHeaders,
  stockModal,
  stocksTable,
} from "@/contents/bengali";
import { useDeleteStock } from "../useStock";

export const stocks = () => {
  const router = useRouter();
  const tableColumns = [
    "productName",
    "productCode",
    "unit",
    "quantity",
    "status",
    "actions",
  ];
  const { pageTitle } = stocksTable;
  const { deleteModalContent } = stockModal;

  const [stockLists, setStockLists] = useState([]);
  const [deleteModal, setDeleteModal] = useState(false);
  const [stockItem, setStockItem] = useState();

  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const { mutate: deleteStock, isLoading: dltIsLoading } = useDeleteStock();

  const redirectEditPage = (id) => {
    router.push(`/stocks/edit/${id}`);
  };

  const redirectShowPage = (id) => {
    router.push(`/stocks/show/${id}`);
  };

  const renderActions = (row) => (
    <div className="flex items-center gap-2 justify-center">
      <HiPencilAlt
        className="w-7 h-7 border p-1 rounded-md bg-orange-600 text-white hover:bg-orange-500 cursor-pointer"
        onClick={() => redirectEditPage(row?.id)}
      />
      <BiShow
        className="w-7 h-7 border p-1 rounded-md bg-primary-600 text-white hover:bg-primary-500 cursor-pointer"
        onClick={() => redirectShowPage(row?.id)}
      />
      <BsTrash
        className="w-7 h-7 border p-1 rounded-md bg-red-600 text-white hover:bg-red-500 cursor-pointer"
        onClick={() => {
          setDeleteModal(true);
          setStockItem(row);
        }}
      />
    </div>
  );

  const deleteAction = (id) => {
    deleteStock(id);
  };

  return {
    router,
    tableColumns,
    tableHeaders,
    pageTitle,
    stockLists,
    setStockLists,
    renderActions,
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
  };
};
