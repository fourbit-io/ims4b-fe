import { useRouter } from "next/router";
import { HiPencilAlt } from "react-icons/hi";
import { BiShow } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { useState } from "react";
import {
  userTableHeader as tableHeaders,
  userModal,
  usersTable,
  buttons,
} from "@/contents/bengali";
import { useDeleteUser } from "../useUser";
import { userInfo } from "@/api/authentication/userInfo";

const { role } = userInfo();

export const users = () => {
  const router = useRouter();
  const tableColumns = [
    "id",
    "userName",
    "role",
    "date",
  ];
  const { pageTitle } = usersTable;
  const { deleteModalContent } = userModal;

  const [userLists, setUserLists] = useState([]);
  const [deleteModal, setDeleteModal] = useState(false);
  const [userItem, setUserItem] = useState();

  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const { mutate: deleteUser, isLoading: dltIsLoading } = useDeleteUser();

  const redirectEditPage = (id) => {
    router.push(`/users/edit/${id}`);
  };

  const redirectShowPage = (id) => {
    router.push(`/users/show/${id}`);
  };

  const renderActions = (row) => (
    <div className="flex items-center gap-2 justify-center">
      {(role === "MANAGER" || role === "SUPERADMIN") && (
        <button
          className="flex items-center gap-1 w-[100px] md:w-auto border px-2 py-1 rounded-md bg-orange-600 text-white hover:bg-orange-500 cursor-pointer"
          onClick={() => redirectEditPage(row?.id)}>
          <HiPencilAlt/>
          {buttons?.edit}
        </button>
      )}
      <button
          className="flex items-center gap-1 w-[100px] md:w-auto  border px-2 py-1 rounded-md bg-primary-600 text-white hover:bg-primary-500 cursor-pointer"
          onClick={() => redirectShowPage(row?.id)}>
          <BiShow/>
          {buttons?.show}
        </button>
      {role === "SUPERADMIN" && (
        <button
          className="flex items-center gap-1 w-[100px] md:w-auto  border px-2 py-1 rounded-md bg-red-600 text-white hover:bg-red-500 cursor-pointer"
          onClick={() => {
            setDeleteModal(true);
            setUserItem(row);
          }}>
          <BsTrash/>
          {buttons?.delete}
        </button>
      )}
    </div>
  );

  const deleteAction = (id) => {
    deleteUser(id);
  };

  return {
    router,
    tableColumns,
    tableHeaders,
    pageTitle,
    userLists,
    setUserLists,
    renderActions,
    deleteModal,
    setDeleteModal,
    deleteModalContent,
    deleteAction,
    dltIsLoading,
    userItem,
    pages,
    setPages,
    currentPage,
    setCurrentPage,
  };
};
