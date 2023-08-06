import { useRouter } from "next/router";
import { HiPencilAlt } from "react-icons/hi";
import { BiShow } from "react-icons/bi";
import { BsTrash, BsCheckLg } from "react-icons/bs";
import { useState } from "react";
import {
  requisitionTableHeader as tableHeaders,
  requisitionModal,
  requisitionsTable,
  buttons,
} from "@/contents/bengali";
import {
  useDeleteRequisition,
} from "../useRequisition";
import { userInfo } from "@/api/authentication/userInfo";

const { role } = userInfo();

export const requisitions = () => {
  const router = useRouter();
  const tableColumns = [
    "sl",
    "reqId",
    "date",
    "createdBy",
    "assignedTo",
    "approvedBy",
    "status",
    "actions",
  ];
  const { pageTitle } = requisitionsTable;
  const { deleteModalContent, approveModalContent, releaseModalContent } =
    requisitionModal;

  const [requisitionLists, setRequisitionLists] = useState([]);
  const [deleteModal, setDeleteModal] = useState(false);

  const [requisitionItem, setRequisitionItem] = useState();

  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const { mutate: deleteRequisition, isLoading: dltIsLoading } =
    useDeleteRequisition();

  const redirectEditPage = (id) => {
    router.push(`/requisitions/edit/${id}`);
  };

  const redirectShowPage = (id) => {
    router.push(`/requisitions/show/${id}`);
  };

  const renderActions = (row) => (
    <div className="flex items-center gap-2 justify-center">
      {( role === "SHOPKEEPER" || role === "MANAGER" || role === "SUPERADMIN") && (
        <>
          {(row?.status === "PENDING" || row?.status === "MODIFIED"  || row?.status === "ASSIGNED") && (
              <button
                className="flex items-center gap-1 w-[100px] md:w-auto border px-2 py-1 rounded-md bg-orange-600 text-white hover:bg-orange-500 cursor-pointer"
                onClick={() => redirectEditPage(row?.id)}>
                <HiPencilAlt />
                {buttons?.edit}
              </button>
          )}
        </>
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
            setRequisitionItem(row);
          }}>
          <BsTrash />
          {buttons?.delete}
        </button>
      )}
    </div>
  );

  const deleteAction = (id) => {
    deleteRequisition(id);
  };

  return {
    router,
    tableColumns,
    tableHeaders,
    pageTitle,
    requisitionLists,
    setRequisitionLists,
    renderActions,
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
    role,
  };
};
