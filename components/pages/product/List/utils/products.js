import { useRouter } from "next/router";
import { HiPencilAlt } from "react-icons/hi";
import { BiShow } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { useState } from "react";
import {
  productTableHeader as tableHeaders,
  productModal,
  productsTable,
  buttons,
} from "@/contents/bengali";
import { useDeleteProduct } from "../useProduct";
import { userInfo } from "@/api/authentication/userInfo";

const { role } = userInfo();

export const products = () => {
  const router = useRouter();
  const tableColumns = [
    "name",
    "slug",
    "quantity",
    "unit",
    "vendorName",
    "vendorAddress",
    "vendorBillNumber",
    "vendorInfo",
    "details",
    "date",
    "actions",
  ];
  const { pageTitle } = productsTable;
  const { deleteModalContent } = productModal;

  const [productLists, setProductLists] = useState([]);
  const [deleteModal, setDeleteModal] = useState(false);
  const [productItem, setProductItem] = useState();

  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const { mutate: deleteProduct, isLoading: dltIsLoading } = useDeleteProduct();

  const redirectEditPage = (id) => {
    router.push(`/products/edit/${id}`);
  };

  const redirectShowPage = (id) => {
    router.push(`/products/show/${id}`);
  };

  const renderActions = (row) => (
    <div className="flex items-center gap-2 justify-center">
      {(role === "MANAGER" || role === "SUPERADMIN") && (
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
            setProductItem(row);
          }}>
          <BsTrash />
          {buttons?.delete}
        </button>
      )}
    </div>
  );

  const deleteAction = (id) => {
    deleteProduct(id);
  };

  return {
    router,
    tableColumns,
    tableHeaders,
    pageTitle,
    productLists,
    setProductLists,
    renderActions,
    deleteModal,
    setDeleteModal,
    deleteModalContent,
    deleteAction,
    dltIsLoading,
    productItem,
    pages,
    setPages,
    currentPage,
    setCurrentPage,
  };
};
