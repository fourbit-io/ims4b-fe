import { useRouter } from "next/router";
import { sidebarDatas } from "@/layout/utils/sidebarDatas";
import BreadCrumb from "@/components/reusable/Breadcrumb";
import { editProduct } from "@/contents/bengali";
import Head from "next/head";
import Form from "./Form";
import { useProduct } from "./useEditProduct";
import StatusHandler from "@/components/reusable/StatusHandler"

const EditPurchase = () => {
  const router = useRouter();
  const id = router?.query?.id;
  const pathname = "/" + router?.pathname.split("/")[1];
  const previousPages = sidebarDatas?.filter((item) => item?.url === pathname);

  const { data, isLoading, error } = useProduct(id);

  return (
    <>
      <Head>
        <title>{editProduct?.pageTitle}</title>
      </Head>
      <StatusHandler isLoading={isLoading} error={error}>
      <BreadCrumb
        previousPages={previousPages}
        currentPage={editProduct?.pageTitle}
      />
      <Form productData={data?.data?.data} id={id} />
      </StatusHandler>
    </>
  );
};

export default EditPurchase;
