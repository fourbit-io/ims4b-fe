import { useRouter } from "next/router";
import { sidebarDatas } from "@/layout/utils/sidebarDatas";
import BreadCrumb from "@/components/reusable/Breadcrumb";
import { editRequisition } from "@/contents/bengali";
import Head from "next/head";
import StatusHandler from "@/components/reusable/StatusHandler";
import { useProducts, useRequisition } from "./useEditRequisition";
import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import SelectedProduct from "./SelectedProduct";

const EditRequisition = () => {
  const router = useRouter();
  const id = router?.query?.id;
  const pathname = "/" + router?.pathname.split("/")[1];
  const previousPages = sidebarDatas?.filter((item) => item?.url === pathname);

  const { data, isLoading, error } = useRequisition(id);
  const { productData, isLoading: productLoading } = useProducts();
  useEffect(() => {
    console.log({ data });
  }, [data]);

  return (
    <>
      <Head>
        <title>{editRequisition?.pageTitle}</title>
      </Head>
      <StatusHandler isLoading={isLoading} error={error}>
        <BreadCrumb
          previousPages={previousPages}
          currentPage={editRequisition?.pageTitle}
        />
        <div className="mt-5 px-4 py-2 grid grid-cols-1 md:grid-cols-2 gap-2">
          {/* <ProductList />
          <SelectedProduct /> */}
        </div>
      </StatusHandler>
    </>
  );
};

export default EditRequisition;
