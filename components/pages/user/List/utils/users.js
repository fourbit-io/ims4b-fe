import { useRouter } from "next/router";
import { useState } from "react";
import { HiPencilAlt } from "react-icons/hi";
import { BsTrash } from "react-icons/bs";
import {
  userTableHeader as tableHeaders,
  usersTable,
  changePasswordContent,
  userModal,
  buttons,
} from "@/contents/bengali";
import { userInfo } from "@/api/authentication/userInfo";
import { useDeleteUser } from "../useUser";

const { role } = userInfo();

export const users = () => {
  const router = useRouter();
  const tableColumns = ["uId", "name", "userName", "role", "date", "actions"];
  const { pageTitle, credential } = usersTable;
  const { deleteModalContent } = userModal;

  const [userLists, setUserLists] = useState([]);
  const [passwordModal, setPasswordModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [credModal, setCredModal] = useState(false);
  const [userItem, setUserItem] = useState();

  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const { mutate: deleteUser, isLoading: dltIsLoading } = useDeleteUser();

  const redirectEditPage = (id) => {
    router.push(`/users/edit/${id}`);
  };

  const renderActions = (row) => (
    <div className="flex items-center gap-2 justify-center">
      {role === "SUPERADMIN" && (
        <>
          <button
            className="flex items-center gap-1 w-[100px] md:w-auto  border px-2 py-1 rounded-md bg-indigo-600 text-white hover:bg-indigo-500 cursor-pointer"
            onClick={() => {
              setPasswordModal(true);
              setUserItem(row);
            }}>
            {changePasswordContent?.pageTitle}
          </button>
          <button
            className="flex items-center gap-1 w-[100px] md:w-auto border px-2 py-1 rounded-md bg-orange-600 text-white hover:bg-orange-500 cursor-pointer"
            onClick={() => redirectEditPage(row?.id)}>
            <HiPencilAlt />
            {buttons?.edit}
          </button>
          <button
            className="flex items-center gap-1 w-[100px] md:w-auto  border px-2 py-1 rounded-md bg-red-600 text-white hover:bg-red-500 cursor-pointer"
            onClick={() => {
              setDeleteModal(true);
              setUserItem(row);
            }}>
            <BsTrash />
            {buttons?.delete}
          </button>
        </>
      )}
    </div>
  );

  const deleteAction = (id) => {
    deleteUser(id);
  };

  return {
    role,
    router,
    tableColumns,
    tableHeaders,
    pageTitle,
    userLists,
    setUserLists,
    renderActions,
    passwordModal,
    setPasswordModal,
    credModal,
    setCredModal,
    userItem,
    pages,
    setPages,
    currentPage,
    setCurrentPage,
    deleteAction,
    deleteModal,
    setDeleteModal,
    deleteModalContent,
  };
};
