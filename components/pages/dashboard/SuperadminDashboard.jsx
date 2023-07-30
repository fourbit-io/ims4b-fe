import { convertNumber, convertDate } from "@/lib";

const ManagerDashboard = ({ dashboard, dashboardContent }) => {
  return (
    <>
      <div className="my-10">
        <ul className="grid grid-cols-4 gap-4 items-center">
          <li className="w-full text-center bg-primary-500 px-12 py-4 rounded-lg sm:w-auto">
            <h4 className="text-4xl text-white font-semibold">
              {convertNumber(dashboard?.requisitionCount) ?? convertNumber(0)}
            </h4>
            <p className="mt-3 text-gray-100 font-medium">
              {dashboardContent?.totalReq}
            </p>
          </li>
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
              {convertNumber(dashboard?.releasedRequisitionCount) ??
                convertNumber(0)}
            </h4>
            <p className="mt-3 text-gray-100 font-medium">
              {dashboardContent?.releasedReq}
            </p>
          </li>
          <li className="w-full text-center bg-primary-500 px-12 py-4 rounded-lg sm:w-auto">
            <h4 className="text-4xl text-white font-semibold">
              {convertNumber(dashboard?.deliveredRequistionCount) ??
                convertNumber(0)}
            </h4>
            <p className="mt-3 text-gray-100 font-medium">
              {dashboardContent?.delivereddReq}
            </p>
          </li>
          <li className="w-full text-center bg-primary-500 px-12 py-4 rounded-lg sm:w-auto">
            <h4 className="text-4xl text-white font-semibold">
              {convertNumber(dashboard?.stockCount) ?? convertNumber(0)}
            </h4>
            <p className="mt-3 text-gray-100 font-medium">
              {dashboardContent?.stockCreated}
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
              {convertNumber(dashboard?.purchaseOrderCount) ?? convertNumber(0)}
            </h4>
            <p className="mt-3 text-gray-100 font-medium">
              {dashboardContent?.noOfPO}
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ManagerDashboard;
