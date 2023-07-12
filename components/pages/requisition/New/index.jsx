import { useRouter } from "next/router";
import { sidebarDatas } from "@/layout/utils/sidebarDatas";
import BreadCrumb from "@/components/reusable/Breadcrumb";
import { newRequisition } from "@/contents/bengali";
import Head from "next/head";
import ProductList from "./ProductList";
import SelectedProduct from "./SelectedProduct";

const NewRequisition = () => {
  const router = useRouter();
  const pathname = "/" + router?.pathname.split("/")[1];
  const previousPages = sidebarDatas?.filter((item) => item?.url === pathname);
  return (
    <>
      <Head>
        <title>{newRequisition?.pageTitle}</title>
      </Head>
      <BreadCrumb
        previousPages={previousPages}
        currentPage={newRequisition?.pageTitle}
      />
      <div className="mt-5 px-4 py-2 grid grid-cols-1 md:grid-cols-2 gap-2">
        <ProductList />
        <SelectedProduct />
      </div>
    </>
  );
};

export default NewRequisition;
