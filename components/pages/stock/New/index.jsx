import { useRouter } from "next/router";
import { sidebarDatas } from "@/layout/utils/sidebarDatas";
import BreadCrumb from "@/components/reusable/Breadcrumb";
import { newStock } from "@/contents/bengali";
import Head from "next/head";
import CreateWithProduct from "@/components/reusable/CreateWithProduct";
import { useNewStockData } from "./useNewStock";

const NewStock = () => {
  const router = useRouter();
  const pathname = "/" + router?.pathname.split("/")[1];
  const previousPages = sidebarDatas()?.filter((item) => item?.url === pathname);

  const { mutate, isLoading, isError, error } = useNewStockData();
  return (
    <>
      <Head>
        <title>{newStock?.pageTitle}</title>
      </Head>
      <BreadCrumb
        previousPages={previousPages}
        currentPage={newStock?.pageTitle}
      />
      <CreateWithProduct mutate={mutate} isLoading={isLoading} />
    </>
  );
};

export default NewStock;
