import Table from "@/components/reusable/Table";
import { useEffect } from "react";
import { requisitions } from "./utils/dashboard";
import { convertNumber, convertDate } from "@/lib";
import { tableHeaders } from "@/contents/bengali";

const ShopkeeperDashboard = ({ dashboard, dashboardContent }) => {
  const {
    reqTableColumns,
    reqTableHeader,
    requisitionLists,
    setRequisitionLists,
    releasedRequsition,
    setReleasedRequisition,
    renderActions,
  } = requisitions();

  useEffect(() => {
    const assignedValues = dashboard?.assignedRequisition?.map((dataValue) => {
      const assignedVal = {
        id: dataValue?.id,
        reqId: convertNumber(dataValue?.id),
        date: convertDate(dataValue?.createdAt),
        status: dataValue?.status,
      };
      return assignedVal;
    });

    const releasedValues = dashboard?.releasedRequisition?.map((dataValue) => {
      const values = {
        id: dataValue?.id,
        reqId: convertNumber(dataValue?.id),
        date: convertDate(dataValue?.createdAt),
        status: dataValue?.status,
      };
      return values;
    });
    if (assignedValues !== undefined && releasedValues !== undefined) {
      setRequisitionLists(assignedValues);
      setReleasedRequisition(releasedValues);
    }
  }, [dashboard]);
  return (
    <>
      <div className="my-10">
        <ul className="grid grid-cols-4 gap-4 items-center">
          <li className="w-full text-center bg-primary-500 px-12 py-4 rounded-lg sm:w-auto">
            <h4 className="text-4xl text-white font-semibold">
              {dashboard?.assignedRequisitionCount ?? 0}
            </h4>
            <p className="mt-3 text-gray-100 font-medium">
              {dashboardContent?.assignedReq}
            </p>
          </li>
          <li className="w-full text-center bg-primary-500 px-12 py-4 rounded-lg sm:w-auto">
            <h4 className="text-4xl text-white font-semibold">
              {dashboard?.releasedRequisitionCount ?? 0}
            </h4>
            <p className="mt-3 text-gray-100 font-medium">
              {dashboardContent?.releasedReq}
            </p>
          </li>
          <li className="w-full text-center bg-primary-500 px-12 py-4 rounded-lg sm:w-auto">
            <h4 className="text-4xl text-white font-semibold">
              {dashboard?.createdStockCount ?? 0}
            </h4>
            <p className="mt-3 text-gray-100 font-medium">
              {dashboardContent?.stockCreated}
            </p>
          </li>
          <li className="w-full text-center bg-primary-500 px-12 py-4 rounded-lg sm:w-auto">
            <h4 className="text-4xl text-white font-semibold">
              {dashboard?.approvedStockCount ?? 0}
            </h4>
            <p className="mt-3 text-gray-100 font-medium">
              {dashboardContent?.stockApproved}
            </p>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="max-w-lg">
            <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
              {tableHeaders?.assignedReq}
            </h3>
          </div>
          <Table
            tableHeaders={reqTableHeader}
            tableItems={requisitionLists}
            tableColumns={reqTableColumns}
            getActions={renderActions}
          />
        </div>
        <div>
          <div className="max-w-lg">
            <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
              {tableHeaders?.releasedReq}
            </h3>
          </div>
          <Table
            tableHeaders={reqTableHeader}
            tableItems={releasedRequsition}
            tableColumns={reqTableColumns}
            getActions={renderActions}
          />
        </div>
      </div>
    </>
  );
};

export default ShopkeeperDashboard;
