import Table from "@/components/reusable/Table";
import { useEffect } from "react";
import { requisitions } from "./utils/dashboard";
import { convertNumber, convertDate } from "@/lib";
import { tableHeaders } from "@/contents/bengali";
const ManagerDashboard = ({ dashboard, dashboardContent }) => {
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
    const pendingValues = dashboard?.pendingRequisition?.map((dataValue) => {
      const pendingval = {
        id: dataValue?.id,
        reqId: convertNumber(dataValue?.id),
        date: convertDate(dataValue?.createdAt),
        status: dataValue?.status,
      };
      return pendingval;
    });

    const modifiedValues = dashboard?.modifiedRequisition?.map((dataValue) => {
      const values = {
        id: dataValue?.id,
        reqId: convertNumber(dataValue?.id),
        date: convertDate(dataValue?.createdAt),
        status: dataValue?.status,
      };
      return values;
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
    if (
      pendingValues !== undefined &&
      modifiedValues !== undefined &&
      releasedValues !== undefined
    ) {
      setRequisitionLists([...pendingValues, ...modifiedValues]);
      setReleasedRequisition(releasedValues);
    }
  }, [dashboard]);
  return (
    <>
      <div className="my-10">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
          <li className="w-full text-center bg-primary-500 px-12 py-4 rounded-lg sm:w-auto">
            <h4 className="text-4xl text-white font-semibold">
              {convertNumber(dashboard?.pendingRequisitionCount) ??
                convertNumber(0)}
            </h4>
            <p className="mt-3 text-gray-100 font-medium">
              {dashboardContent?.pendingReq}
            </p>
          </li>
          <li className="w-full text-center bg-primary-500 px-12 py-4 rounded-lg sm:w-auto">
            <h4 className="text-4xl text-white font-semibold">
              {convertNumber(dashboard?.assignedRequisitionCount) ??
                convertNumber(0)}
            </h4>
            <p className="mt-3 text-gray-100 font-medium">
              {dashboardContent?.assignedReq}
            </p>
          </li>
          <li className="w-full text-center bg-primary-500 px-12 py-4 rounded-lg sm:w-auto">
            <h4 className="text-4xl text-white font-semibold">
              {convertNumber(dashboard?.approvedRequisitionCount) ??
                convertNumber(0)}
            </h4>
            <p className="mt-3 text-gray-100 font-medium">
              {dashboardContent?.approvedReq}
            </p>
          </li>
          <li className="w-full text-center bg-primary-500 px-12 py-4 rounded-lg sm:w-auto">
            <h4 className="text-4xl text-white font-semibold">
              {convertNumber(dashboard?.releasedRequisitionCount) ??
                convertNumber(0)}
            </h4>
            <p className="mt-3 text-gray-100 font-medium">
              {dashboardContent?.releasedReq}
            </p>
          </li>
          <li className="w-full text-center bg-primary-500 px-12 py-4 rounded-lg sm:w-auto">
            <h4 className="text-4xl text-white font-semibold">
              {convertNumber(dashboard?.createdStockCount) ?? convertNumber(0)}
            </h4>
            <p className="mt-3 text-gray-100 font-medium">
              {dashboardContent?.stockCreated}
            </p>
          </li>
          <li className="w-full text-center bg-primary-500 px-12 py-4 rounded-lg sm:w-auto">
            <h4 className="text-4xl text-white font-semibold">
              {convertNumber(dashboard?.approvedStockCount) ?? convertNumber(0)}
            </h4>
            <p className="mt-3 text-gray-100 font-medium">
              {dashboardContent?.stockApproved}
            </p>
          </li>
          <li className="w-full text-center bg-primary-500 px-12 py-4 rounded-lg sm:w-auto">
            <h4 className="text-4xl text-white font-semibold">
              {convertNumber(dashboard?.userCount) ?? convertNumber(0)}
            </h4>
            <p className="mt-3 text-gray-100 font-medium">
              {dashboardContent?.noOfUsers}
            </p>
          </li>
          <li className="w-full text-center bg-primary-500 px-12 py-4 rounded-lg sm:w-auto">
            <h4 className="text-4xl text-white font-semibold">
              {convertNumber(dashboard?.storeKeeperCount) ?? convertNumber(0)}
            </h4>
            <p className="mt-3 text-gray-100 font-medium">
              {dashboardContent?.noOfStoreKeepers}
            </p>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="max-w-lg">
            <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
              {tableHeaders?.pendingReq}
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

export default ManagerDashboard;
