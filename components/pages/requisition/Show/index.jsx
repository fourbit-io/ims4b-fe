import { useRouter } from "next/router";
import { sidebarDatas } from "@/layout/utils/sidebarDatas";
import BreadCrumb from "@/components/reusable/Breadcrumb";
import { showRequisition } from "@/contents/bengali";
import Head from "next/head";
import { useRequisition } from "./useShowRequisition";
import StatusHandler from "@/components/reusable/StatusHandler";
import Details from "./Details";

const RequisitionShow = () => {
  const router = useRouter();
  const id = router?.query?.id;
  const pathname = "/" + router?.pathname.split("/")[1];
  const previousPages = sidebarDatas?.filter((item) => item?.url === pathname);

  const { data, isLoading, error } = useRequisition(id);
  return (
    <>
      <Head>
        <title>{showRequisition?.pageTitle}</title>
      </Head>
      <StatusHandler isLoading={isLoading} error={error}>
        <BreadCrumb
          previousPages={previousPages}
          currentPage={showRequisition?.pageTitle}
        />
        <Details data={data?.data?.data}/>
      </StatusHandler>
    </>
  );
};

export default RequisitionShow;
