import { useRouter } from "next/router";
import { HiPencilAlt } from "react-icons/hi";
import { BiShow } from "react-icons/bi";
import { BsTrash, BsCheckLg } from "react-icons/bs";
import { ImExit } from "react-icons/im";
import { MdOutlineAssignmentInd } from "react-icons/md";
import { useState } from "react";
import {
  requisitionTableHeader as tableHeaders,
  requisitionModal,
  requisitionsTable,
} from "@/contents/bengali";
import {
  useApproveRequisition,
  useDeleteRequisition,
  useReleaseRequisition,
} from "../useRequisition";
import { userInfo } from "@/api/authentication/userInfo";

const { role } = userInfo();

export const requisitions = () => {
  const router = useRouter();
  const tableColumns = [
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
  const [approveModal, setApproveModal] = useState(false);
  const [releaseModal, setReleaseModal] = useState(false);

  const [requisitionItem, setRequisitionItem] = useState();

  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const { mutate: deleteRequisition, isLoading: dltIsLoading } =
    useDeleteRequisition();

  const { mutate: approveRequisition, isLoading: aprvIsLoading } =
    useApproveRequisition();

  const { mutate: releaseRequisition, isLoading: rlsIsLoading } =
    useReleaseRequisition();

  const redirectEditPage = (id) => {
    router.push(`/requisitions/edit/${id}`);
  };

  const redirectAssigneePage = (id) => {
    router.push(`/requisitions/assign/${id}`);
  };

  const redirectShowPage = (id) => {
    router.push(`/requisitions/show/${id}`);
  };

  const renderActions = (row) => (
    <div className="flex items-center gap-2 justify-center">
      {(role === "SHOPKEEPER" || role === "MANAGER" || role === "SUPERADMIN") &&
        row?.status === "APPROVED" && (
          <ImExit
            className="w-7 h-7 border p-1 rounded-md bg-gray-600 text-white hover:bg-gray-500 cursor-pointer"
            onClick={() => {
              setReleaseModal(true);
              setRequisitionItem(row);
            }}
          />
        )}
      {(role === "MANAGER" || role === "SUPERADMIN") && (
        <>
          {(row?.status === "PENDING" || row?.status === "MODIFIED") && (
            <>
              <MdOutlineAssignmentInd
                onClick={() => redirectAssigneePage(row?.id)}
                className="w-7 h-7 border p-1 rounded-md bg-purple-600 text-white hover:bg-purple-500 cursor-pointer"
              />
              <HiPencilAlt
                className="w-7 h-7 border p-1 rounded-md bg-orange-600 text-white hover:bg-orange-500 cursor-pointer"
                onClick={() => redirectEditPage(row?.id)}
              />
            </>
          )}
          {row?.status === "ASSIGNED" && (
            <BsCheckLg
              className={`w-7 h-7 border p-1 rounded-md bg-primary-600 text-white hover:bg-primary-500 cursor-pointer`}
              onClick={() => {
                setApproveModal(true);
                setRequisitionItem(row);
              }}
            />
          )}
        </>
      )}
      <BiShow
        className="w-7 h-7 border p-1 rounded-md bg-blue-600 text-white hover:bg-blue-500 cursor-pointer"
        onClick={() => redirectShowPage(row?.id)}
      />

      {role === "SUPERADMIN" && (
        <BsTrash
          className="w-7 h-7 border p-1 rounded-md bg-red-600 text-white hover:bg-red-500 cursor-pointer"
          onClick={() => {
            setDeleteModal(true);
            setRequisitionItem(row);
          }}
        />
      )}
    </div>
  );

  const deleteAction = (id) => {
    deleteRequisition(id);
  };
  const approveAction = (id) => {
    approveRequisition(id);
  };
  const releaseAction = (id) => {
    releaseRequisition(id);
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
    releaseModal,
    setReleaseModal,
    releaseModalContent,
    releaseAction,
    rlsIsLoading,
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
