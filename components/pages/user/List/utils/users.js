import { useRouter } from "next/router";
import { useState } from "react";
import {
  userTableHeader as tableHeaders,
  usersTable,
  changePasswordContent,
} from "@/contents/bengali";
import { userInfo } from "@/api/authentication/userInfo";

const { role } = userInfo();

export const users = () => {
  const router = useRouter();
  const tableColumns = ["id", "userName", "role", "date", "actions"];
  const { pageTitle, credential } = usersTable;

  const [userLists, setUserLists] = useState([]);
  const [passwordModal, setPasswordModal] = useState(false);
  const [credModal, setCredModal] = useState(false);
  const [userItem, setUserItem] = useState();

  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);



  const renderActions = (row) => (
    <div className="flex items-center gap-2 justify-center">
      {role === "SUPERADMIN" && (
        <button
          className="flex items-center gap-1 w-[100px] md:w-auto  border px-2 py-1 rounded-md bg-red-600 text-white hover:bg-red-500 cursor-pointer"
          onClick={() => {
            setPasswordModal(true);
            setUserItem(row);
          }}>
          {changePasswordContent?.pageTitle}
        </button>
      )}
    </div>
  );

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
  };
};
