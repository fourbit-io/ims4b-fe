import { useState } from "react";
import { reqTableHeader, requisitionsTable, buttons } from "@/contents/bengali";
import { useRouter } from "next/router";
import { userInfo } from "@/api/authentication/userInfo";

const { role } = userInfo();

export const requisitions = () => {
  const router = useRouter();
  const reqTableColumns = ["reqId", "date", "status", "actions"];
  const { pageTitle } = requisitionsTable;

  const [requisitionLists, setRequisitionLists] = useState([]);
  const [releasedRequsition, setReleasedRequisition] = useState([]);

  const redirectToPage = (id) => {
    router.push(`/requisitions/show/${id}`);
  };

  const renderActions = (row) => (
    <div className="flex items-center gap-2 justify-center">
      <button
        className="flex items-center gap-1 w-[100px] md:w-auto border px-2 py-1 rounded-md bg-red-600 text-white hover:bg-red-500 cursor-pointer"
        onClick={() => redirectToPage(row?.id)}>
        {buttons?.show}
      </button>
    </div>
  );

  return {
    reqTableColumns,
    reqTableHeader,
    pageTitle,
    requisitionLists,
    setRequisitionLists,
    releasedRequsition,
    setReleasedRequisition,
    renderActions,
  };
};
