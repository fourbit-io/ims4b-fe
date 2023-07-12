import { useRouter } from "next/router";
import { sidebarDatas } from "@/layout/utils/sidebarDatas";
import BreadCrumb from "@/components/reusable/Breadcrumb";
import { newRequisition } from "@/contents/bengali";
import Head from "next/head";
import { useNewRequisitionData } from "./useNewRequisition";
import CreateWithProduct from "@/components/reusable/CreateWithProduct";

const NewRequisition = () => {
  const router = useRouter();
  const pathname = "/" + router?.pathname.split("/")[1];
  const previousPages = sidebarDatas()?.filter((item) => item?.url === pathname);
  const { mutate, isLoading, isError, error } = useNewRequisitionData();
  return (
    <>
      <Head>
        <title>{newRequisition?.pageTitle}</title>
      </Head>
      <BreadCrumb
        previousPages={previousPages}
        currentPage={newRequisition?.pageTitle}
      />
      <CreateWithProduct mutate={mutate} isLoading={isLoading} remark={true} />
    </>
  );
};

export default NewRequisition;
