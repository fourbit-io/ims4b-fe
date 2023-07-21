import { sidebarDatas } from "@/layout/utils/sidebarDatas";
import BreadCrumb from "@/components/reusable/Breadcrumb";
import { showRequisition, buttons } from "@/contents/bengali";
import Head from "next/head";
import { useRequisition } from "./useShowRequisition";
import StatusHandler from "@/components/reusable/StatusHandler";
import ProductDetails from "./ProductDetails";
import RequisitionDetails from "./RequisitionDetails";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import FormTemplate from "@/components/reusable/FormTemplate";

import { AiFillCaretLeft } from "react-icons/ai";

const RequisitionShow = () => {
  const router = useRouter();
  const id = router?.query?.id;
  const pathname = "/" + router?.pathname.split("/")[1];
  const previousPages = sidebarDatas()?.filter(
    (item) => item?.url === pathname
  );

  const { data, isLoading, error } = useRequisition(id);

  const [requisition, setRequisition] = useState(null);

  const [showReport, setShowReport] = useState(false);

  useEffect(() => {
    setRequisition(data?.data?.data);
  },[data])

  return (
    <>
      <Head>
        <title>{showRequisition?.pageTitle}</title>
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
          <FormTemplate
            id={id}
            date={requisition?.updatedAt}
            userName={requisition?.createdByUser?.userName}
            items={requisition?.requisitionProduct}
            remark={requisition?.remark}
          />
        </>
      ) : (
        <StatusHandler isLoading={isLoading} error={error}>
          <BreadCrumb
            previousPages={previousPages}
            currentPage={showRequisition?.pageTitle}
          />
          <ProductDetails
            data={data?.data?.data}
            showRequisition={showRequisition}
            buttons={buttons}
            setShowReport={setShowReport}
          />
          <RequisitionDetails
            data={data?.data?.data}
            showRequisition={showRequisition}
          />
        </StatusHandler>
      )}
    </>
  );
};

export default RequisitionShow;
