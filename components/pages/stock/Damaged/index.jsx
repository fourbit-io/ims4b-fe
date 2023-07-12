import { useRouter } from "next/router";
import { sidebarDatas } from "@/layout/utils/sidebarDatas";
import BreadCrumb from "@/components/reusable/Breadcrumb";
import { damagedStock } from "@/contents/bengali";
import Head from "next/head";
import { useDamagedStockData } from "./useDamagedStock";
import CreateWithProduct from "@/components/reusable/CreateWithProduct";

const DamagedStock = () => {
  const router = useRouter();
  const pathname = "/" + router?.pathname.split("/")[1];
  const previousPages = sidebarDatas()?.filter((item) => item?.url === pathname);

  const { mutate, isLoading, isError, error } = useDamagedStockData();
  return (
    <>
      <Head>
        <title>{damagedStock?.pageTitle}</title>
      </Head>
      <BreadCrumb
        previousPages={previousPages}
        currentPage={damagedStock?.pageTitle}
      />
      <CreateWithProduct incQty={false} mutate={mutate} isLoading={isLoading}/>
    </>
  );
};

export default DamagedStock;
