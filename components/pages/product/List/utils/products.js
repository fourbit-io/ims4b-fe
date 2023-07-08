import { useRouter } from "next/router";
import { HiPencilAlt } from "react-icons/hi";
import { BiShow } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { useState } from "react";
import {
  productTableHeader as tableHeaders,
  productModal,
  productsTable,
} from "@/contents/bengali";
import { useDeleteProduct } from "../useProduct";

export const products = () => {
  const router = useRouter();
  const tableColumns = ["name", "slug", "unit", "details", "date", "actions"];
  const { pageTitle } = productsTable;
  const { deleteModalContent } = productModal;

  const [productLists, setProductLists] = useState([]);
  const [deleteModal, setDeleteModal] = useState(false);
  const [productItem, setProductItem] = useState();

  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const { mutate: deleteProduct, isLoading: dltIsLoading } = useDeleteProduct();

  const redirectEditPage = (id) => {
    router.push(`/products/edit/${id}`)
  }

  const redirectShowPage = (id) => {
    router.push(`/products/show/${id}`)
  }

  const renderActions = (row) => (
    <div className="flex items-center gap-2 justify-center">
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
          setProductItem(row);
        }}
      />
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
