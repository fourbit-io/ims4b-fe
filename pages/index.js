import Head from "next/head";
import Dashboard from "../components/pages/dashboard";

export default function Home() {

  const stats = [
    {
      data: "35K",
      title: "Customers",
    },
    {
      data: "40+",
      title: "Countries",
    },
    {
      data: "30M+",
      title: "Total revenue",
    },
    {
      data: "30M+",
      title: "Total revenue",
    },
  ];

  return (
    <>
    <Head>
      <title>ড্যাসবোর্ড</title>
    </Head>
      <Dashboard/>
    </>
  );
}
