import { useRouter } from "next/router";
import { HiPencilAlt } from "react-icons/hi";
import { BiShow } from "react-icons/bi";
import { BsTrash, BsCheckLg } from "react-icons/bs";
import { useState } from "react";
import {
  requisitionTableHeader as tableHeaders,
  requisitionModal,
  requisitionsTable,
} from "@/contents/bengali";
import { useApproveRequisition, useDeleteRequisition } from "../useRequisition";

export const requisitions = () => {
  const router = useRouter();
  const tableColumns = [
    "id",
    "productName",
    "productCode",
    "quantity",
    "status",
    "actions",
  ];
  const { pageTitle } = requisitionsTable;
  const { deleteModalContent, approveModalContent } = requisitionModal;

  const [requisitionLists, setRequisitionLists] = useState([]);
  const [deleteModal, setDeleteModal] = useState(false);
  const [approveModal, setApproveModal] = useState(false);
  const [requisitionItem, setRequisitionItem] = useState();

  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const { mutate: deleteRequisition, isLoading: dltIsLoading } = useDeleteRequisition();

  const { mutate: approveRequisition, isLoading: aprvIsLoading } = useApproveRequisition();

  const redirectEditPage = (id) => {
    router.push(`/requisitions/edit/${id}`);
  };

  const redirectShowPage = (id) => {
    router.push(`/requisitions/show/${id}`);
  };

  const renderActions = (row) => (
    <div className="flex items-center gap-2 justify-center">
      <BsCheckLg
        className={`w-7 h-7 border p-1 rounded-md bg-primary-600 text-white hover:bg-primary-500 cursor-pointer ${
          row?.status === "PENDING" ? "block" : "hidden"
        }`}
        onClick={() => {
          setApproveModal(true);
          setRequisitionItem(row);
        }}
      />
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
          setRequisitionItem(row);
        }}
      />
    </div>
  );

  const deleteAction = (id) => {
    deleteRequisition(id);
  };
  const approveAction = (id) => {
    approveRequisition(id);
  };

  return {
    router,
    tableColumns,
    tableHeaders,
    pageTitle,
    requisitionLists,
    setRequisitionLists,
    renderActions,
    approveModal,
    setApproveModal,
    approveModalContent,
    approveAction,
    aprvIsLoading,
    deleteModal,
    setDeleteModal,
    deleteModalContent,
    deleteAction,
    dltIsLoading,
    requisitionItem,
    pages,
    setPages,
    currentPage,
    setCurrentPage,
  };
};
