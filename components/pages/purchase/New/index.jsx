import { useRouter } from "next/router";
import { sidebarDatas } from "@/layout/utils/sidebarDatas"
import BreadCrumb from "@/components/reusable/Breadcrumb"
import { newPurchase } from "@/contents/bengali";
import Head from "next/head";
import Form from "./Form";

const NewPurchase = () => {
    const router = useRouter();
    const pathname = "/" + router?.pathname.split("/")[1];
    const previousPages = sidebarDatas()?.filter((item) => item?.url === pathname)
  return (
    <>
    <Head>
        <title>{newPurchase?.pageTitle}</title>
    </Head>
        <BreadCrumb previousPages={previousPages} currentPage={newPurchase?.pageTitle}/>
        <Form/>
    </>
  )
}

export default NewPurchase