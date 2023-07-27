import { useEffect, useState } from "react";
import { useDashboard } from "./useDashboard";
import { userInfo } from "@/api/authentication/userInfo";
import Head from "next/head";
const { role } = userInfo();

const Dashboard = () => {
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, error } = useDashboard({ role, currentPage });

  useEffect(() => {
    console.log({ data });
  }, [data, role]);
  return (
    <div>
      <Head>
        <title>ড্যাসবোর্ড</title>
      </Head>
    </div>
  );
};

export default Dashboard;
