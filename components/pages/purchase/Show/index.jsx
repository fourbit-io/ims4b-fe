import { useRouter } from "next/router";
import { sidebarDatas } from "@/layout/utils/sidebarDatas";
import BreadCrumb from "@/components/reusable/Breadcrumb";
import { showPurchase } from "@/contents/bengali";
import Head from "next/head";
import { usePurchase } from "./useShowPurchase";
import StatusHandler from "@/components/reusable/StatusHandler";
import Details from "./Details";

const PurchaseShow = () => {
  const router = useRouter();
  const id = router?.query?.id;
  const pathname = "/" + router?.pathname.split("/")[1];
  const previousPages = sidebarDatas()?.filter((item) => item?.url === pathname);

  const { data, isLoading, error } = usePurchase(id);
  return (
    <>
      <Head>
        <title>{showPurchase?.pageTitle}</title>
      </Head>
      <StatusHandler isLoading={isLoading} error={error}>
        <BreadCrumb
          previousPages={previousPages}
          currentPage={showPurchase?.pageTitle}
        />
        <Details data={data?.data?.data}/>
      </StatusHandler>
    </>
  );
};

export default PurchaseShow;
