import { useRouter } from "next/router";
import { sidebarDatas } from "@/layout/utils/sidebarDatas";
import BreadCrumb from "@/components/reusable/Breadcrumb";
import { showStock } from "@/contents/bengali";
import Head from "next/head";
import { useStock } from "./useShowProduct";
import StatusHandler from "@/components/reusable/StatusHandler";
import Details from "./Details";

const StockShow = () => {
  const router = useRouter();
  const id = router?.query?.id;
  const pathname = "/" + router?.pathname.split("/")[1];
  const previousPages = sidebarDatas()?.filter((item) => item?.url === pathname);

  const { data, isLoading, error } = useStock(id);
  return (
    <>
      <Head>
        <title>{showStock?.pageTitle}</title>
      </Head>
      <StatusHandler isLoading={isLoading} error={error}>
        <BreadCrumb
          previousPages={previousPages}
          currentPage={showStock?.pageTitle}
        />
        <Details data={data?.data?.data}/>
      </StatusHandler>
    </>
  );
};

export default StockShow;
