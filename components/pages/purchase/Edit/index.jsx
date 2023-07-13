import { useRouter } from "next/router";
import { sidebarDatas } from "@/layout/utils/sidebarDatas";
import BreadCrumb from "@/components/reusable/Breadcrumb";
import { editPurchase } from "@/contents/bengali";
import Head from "next/head";
import Form from "./Form";
import { usePurchase } from "./useEditPurchase";
import StatusHandler from "@/components/reusable/StatusHandler"

const EditPurchase = () => {
  const router = useRouter();
  const id = router?.query?.id;
  const pathname = "/" + router?.pathname.split("/")[1];
  const previousPages = sidebarDatas()?.filter((item) => item?.url === pathname);

  const { data, isLoading, error } = usePurchase(id);

  return (
    <>
      <Head>
        <title>{editPurchase?.pageTitle}</title>
      </Head>
      <StatusHandler isLoading={isLoading} error={error}>
      <BreadCrumb
        previousPages={previousPages}
        currentPage={editPurchase?.pageTitle}
      />
      <Form purchaseData={data?.data?.data} id={id} />
      </StatusHandler>
    </>
  );
};

export default EditPurchase;
