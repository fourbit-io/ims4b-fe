import { useRouter } from "next/router";
import { HiPencilAlt } from "react-icons/hi";
import { BiShow } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { useState } from "react";
import {
  purchaseTableHeader as tableHeaders,
  purchaseModal,
  purchasesTable,
  buttons,
} from "@/contents/bengali";
import { useDeletePurchase } from "../usePurchase";
import { userInfo } from "@/api/authentication/userInfo";

const { role } = userInfo();

export const purchases = () => {
  const router = useRouter();
  const tableColumns = [
    "sl",
    "poId",
    "title",
    "status",
    "date",
    "remark",
    "description",
    "createdBy",
    "actions",
  ];
  const { pageTitle } = purchasesTable;
  const { deleteModalContent } = purchaseModal;

  const [purchaseLists, setPurchaseLists] = useState([]);
  const [deleteModal, setDeleteModal] = useState(false);
  const [purchaseItem, setPurchaseItem] = useState();

  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const { mutate: deletePurchase, isLoading: dltIsLoading } =
    useDeletePurchase();

  const redirectEditPage = (id) => {
    router.push(`/purchases/edit/${id}`);
  };

  const redirectShowPage = (id) => {
    router.push(`/purchases/show/${id}`);
  };

  const renderActions = (row) => (
    <div className="flex items-center gap-2 justify-center">
      {role !== "SHOPKEEPER" && (
        <button
          className="flex items-center gap-1 w-[100px] md:w-auto border px-2 py-1 rounded-md bg-orange-600 text-white hover:bg-orange-500 cursor-pointer"
          onClick={() => redirectEditPage(row?.id)}>
          <HiPencilAlt />
          {buttons?.edit}
        </button>
      )}

      <button
        className="flex items-center gap-1 w-[100px] md:w-auto  border px-2 py-1 rounded-md bg-primary-600 text-white hover:bg-primary-500 cursor-pointer"
        onClick={() => redirectShowPage(row?.id)}>
        <BiShow />
        {buttons?.show}
      </button>
      {role === "SUPERADMIN" && (
        <button
          className="flex items-center gap-1 w-[100px] md:w-auto  border px-2 py-1 rounded-md bg-red-600 text-white hover:bg-red-500 cursor-pointer"
          onClick={() => {
            setDeleteModal(true);
            setPurchaseItem(row);
          }}>
          <BsTrash />
          {buttons?.delete}
        </button>
      )}
    </div>
  );

  const deleteAction = (id) => {
    deletePurchase(id);
  };

  return {
    router,
    tableColumns,
    tableHeaders,
    pageTitle,
    purchaseLists,
    setPurchaseLists,
    renderActions,
    deleteModal,
    setDeleteModal,
    deleteModalContent,
    deleteAction,
    dltIsLoading,
    purchaseItem,
    pages,
    setPages,
    currentPage,
    setCurrentPage,
  };
};
