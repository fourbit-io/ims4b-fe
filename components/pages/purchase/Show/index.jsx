import { useRouter } from "next/router";
import { sidebarDatas } from "@/layout/utils/sidebarDatas";
import BreadCrumb from "@/components/reusable/Breadcrumb";
import { showPurchase, buttons } from "@/contents/bengali";
import Head from "next/head";
import { usePurchase } from "./useShowPurchase";
import StatusHandler from "@/components/reusable/StatusHandler";
import Details from "./Details";

import { AiFillCaretLeft } from "react-icons/ai";
import { useEffect, useState } from "react";

const PurchaseShow = () => {
  const router = useRouter();
  const id = router?.query?.id;
  const pathname = "/" + router?.pathname.split("/")[1];
  const previousPages = sidebarDatas()?.filter(
    (item) => item?.url === pathname
  );

  const { data, isLoading, error } = usePurchase(id);
  const [purchase, setPurchase] = useState(null);
  const [showReport, setShowReport] = useState(false);

  useEffect(() => {
    setPurchase(data?.data?.data);
  }, [data]);
  return (
    <>
      <Head>
        <title>{showPurchase?.pageTitle}</title>
      </Head>
      {showReport ? (
        <>
          <div className="p-4">
            <button
              className="text-center bg-primary-600 text-white hover:bg-primary-500 rounded-md px-2 py-1  flex gap-1 items-center"
              onClick={() => setShowReport(false)}>
              <AiFillCaretLeft />
              {buttons?.previousPage}
            </button>
          </div>
          <Details data={purchase} />
        </>
      ) : (
        <StatusHandler isLoading={isLoading} error={error}>
          <BreadCrumb
            previousPages={previousPages}
            currentPage={showPurchase?.pageTitle}
          />
          <Details data={purchase} setShowReport={setShowReport} />
        </StatusHandler>
      )}
    </>
  );
};

export default PurchaseShow;
