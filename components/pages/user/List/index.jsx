import React, { useEffect } from "react";
import { newUser } from "@/contents/bengali";
import Table from "@/components/reusable/Table";
import { useUsers } from "./useUser";
import StatusHandler from "@/components/reusable/StatusHandler";
import { users } from "./utils/users";
import Pagination from "@/components/reusable/Pagination";
import { convertNumber, convertDate } from "@/lib";
import Head from "next/head";
import PasswordChange from "../PasswordChange";
import Modal from "@/components/reusable/Modal";

const List = () => {
  const {
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
    deleteModal,
    setDeleteModal,
    deleteModalContent,
    deleteAction,
  } = users();

  const { data, isLoading, error } = useUsers(currentPage);

  useEffect(() => {
    const dataValues = data?.data?.data?.map((dataValue) => {
      const values = {
        id: dataValue?.id,
        uId: convertNumber(dataValue?.id),
        name: dataValue?.name,
        userName: dataValue?.userName,
        role: dataValue?.role,
        date: convertDate(dataValue?.createdAt),
      };
      return values;
    });
    setUserLists(dataValues);
    let totalPages = Math.ceil(
      data?.data?.meta?.total / data?.data?.meta?.limit
    );
    setPages(totalPages);
  }, [data, currentPage]);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      {passwordModal && (
        <PasswordChange
          userItem={userItem}
          state={passwordModal}
          setState={setPasswordModal}
        />
      )}
      {deleteModal && (
        <Modal
          state={deleteModal}
          setState={setDeleteModal}
          content={deleteModalContent}
          action={deleteAction}
          id={userItem?.id}
        />
      )}
      <div className="max-w-screen-xl mx-auto p-4 md:p-8">
        <div className="items-start justify-between md:flex">
          <div className="max-w-lg">
            <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
              {pageTitle}
            </h3>
          </div>
          {role === "SUPERADMIN" && (
            <div className="mt-3 md:mt-0">
              <button
                onClick={() => router.push("/users/new")}
                className="inline-block px-4 py-2 text-white duration-150 font-medium bg-primary-600 rounded-lg hover:bg-primary-500 active:bg-primary-700 md:text-sm">
                {newUser?.pageTitle}
              </button>
            </div>
          )}
        </div>
        <StatusHandler isLoading={isLoading} error={error}>
          <Table
            tableHeaders={tableHeaders}
            tableItems={userLists}
            tableColumns={tableColumns}
            getActions={renderActions}
          />
          <Pagination
            pages={pages}
            setPages={setPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </StatusHandler>
      </div>
    </>
  );
};

export default List;
