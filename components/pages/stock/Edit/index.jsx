import { useRouter } from "next/router";
import { sidebarDatas } from "@/layout/utils/sidebarDatas";
import BreadCrumb from "@/components/reusable/Breadcrumb";
import { editStock } from "@/contents/bengali";
import Head from "next/head";
import Form from "./Form";
import StatusHandler from "@/components/reusable/StatusHandler";
import { useProducts, useStock } from "./useEditStock";
import { useEffect, useState } from "react";

const EditStock = () => {
  const router = useRouter();
  const id = router?.query?.id;
  const pathname = "/" + router?.pathname.split("/")[1];
  const previousPages = sidebarDatas()?.filter((item) => item?.url === pathname);

  const { data, isLoading, error } = useStock(id);
  const { productData, isLoading:productLoading } = useProducts();


  return (
    <>
      <Head>
        <title>{editStock?.pageTitle}</title>
      </Head>
      <StatusHandler isLoading={isLoading} error={error}>
        <BreadCrumb
          previousPages={previousPages}
          currentPage={editStock?.pageTitle}
        />
        <Form productData={productData} productLoading={productLoading} stockData={data?.data?.data} id={id} />
      </StatusHandler>
    </>
  );
};

export default EditStock;
