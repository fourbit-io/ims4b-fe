import { useRouter } from "next/router";
import { sidebarDatas } from "@/layout/utils/sidebarDatas";
import BreadCrumb from "@/components/reusable/Breadcrumb";
import { assignRequisition } from "@/contents/bengali";
import Head from "next/head";
import StatusHandler from "@/components/reusable/StatusHandler";
import ProductDetails from "./ProductDetails";
import { useRequisition } from "./useAssignRequisition";
import StoreKeepers from "./StoreKeepers";

const Assign = () => {
  const router = useRouter();
  const id = router?.query?.id;
  const pathname = "/" + router?.pathname.split("/")[1];
  const previousPages = sidebarDatas?.filter((item) => item?.url === pathname);

  const { data, isLoading, error } = useRequisition(id);
  return (
    <>
      <Head>
        <title>{assignRequisition?.pageTitle}</title>
      </Head>
      <StatusHandler isLoading={isLoading} error={error}>
        <BreadCrumb
          previousPages={previousPages}
          currentPage={assignRequisition?.pageTitle}
        />
        <div className="mt-5 space-y-2">
          <h3 className="text-gray-600 text-2xl font-semibold px-4 my-6">
            {assignRequisition?.pageTitle}
          </h3>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <ProductDetails
            data={data?.data?.data}
            assignRequisition={assignRequisition}
          />
          <StoreKeepers id={id} assignRequisition={assignRequisition} />
        </div>
      </StatusHandler>
    </>
  );
};

export default Assign;
