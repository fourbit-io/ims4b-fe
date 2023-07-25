import { useRouter } from "next/router";
import { sidebarDatas } from "@/layout/utils/sidebarDatas"
import BreadCrumb from "@/components/reusable/Breadcrumb"
import { newUser } from "@/contents/bengali";
import Head from "next/head";
import Form from "./Form";

const NewUser = () => {
    const router = useRouter();
    const pathname = "/" + router?.pathname.split("/")[1];
    const previousPages = sidebarDatas()?.filter((item) => item?.url === pathname)
  return (
    <>
    <Head>
        <title>{newUser?.pageTitle}</title>
    </Head>
        <BreadCrumb previousPages={previousPages} currentPage={newUser?.pageTitle}/>
        <Form/>
    </>
  )
}

export default NewUser