import { useEffect, useState } from "react";
import { useDashboard } from "./useDashboard";
import { userInfo } from "@/api/authentication/userInfo";
import StatusHandler from "@/components/reusable/StatusHandler";
import { dashboardContent } from "@/contents/bengali";
import ManagerDashboard from "./ManagerDashboard";
import UserDashboard from "./UserDashboard";
import Head from "next/head";
import ShopkeeperDashboard from "./ShopkeeperDashboard";
import SuperadminDashboard from "./SuperadminDashboard";
const { role } = userInfo();

const Dashboard = () => {
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [dashboard, setDashboard] = useState([]);
  const { data, isLoading, error } = useDashboard({ role, currentPage });

  useEffect(() => {
    setDashboard(data?.data?.data);
  }, [data, role]);

  return (
    <div>
      <Head>
        <title>{dashboardContent?.pageTitle}</title>
      </Head>
      <div className="max-w-screen-xl mx-auto p-4 md:p-8">
        <div className="items-start justify-between md:flex">
          <div className="max-w-lg">
            <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
              {dashboardContent?.pageTitle}
            </h3>
          </div>
        </div>
        <StatusHandler isLoading={isLoading} error={error}>
        {role === "SUPERADMIN" && (
            <SuperadminDashboard
              dashboard={dashboard}
              dashboardContent={dashboardContent}
            />
          )}
          {role === "MANAGER" && (
            <ManagerDashboard
              dashboard={dashboard}
              dashboardContent={dashboardContent}
            />
          )}
          {role === "USER" && (
            <UserDashboard
              dashboard={dashboard}
              dashboardContent={dashboardContent}
            />
          )}
          {role === "SHOPKEEPER" && (
            <ShopkeeperDashboard
              dashboard={dashboard}
              dashboardContent={dashboardContent}
            />
          )}
        </StatusHandler>
      </div>
    </div>
  );
};

export default Dashboard;
