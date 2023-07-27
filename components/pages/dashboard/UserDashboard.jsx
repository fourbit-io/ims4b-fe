import React from "react";

const UserDashboard = ({ dashboard, dashboardContent }) => {
  return (
    <div className="mt-10">
      <ul className="grid grid-cols-4 gap-4 items-center">
        <li className="w-full text-center bg-primary-500 px-12 py-4 rounded-lg sm:w-auto">
          <h4 className="text-4xl text-white font-semibold">
            {dashboard?.pendingRequisitionCount ?? 0}
          </h4>
          <p className="mt-3 text-gray-100 font-medium">
            {dashboardContent?.pendingReq}
          </p>
        </li>
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
            {dashboard?.approvedRequisitionCount ?? 0}
          </h4>
          <p className="mt-3 text-gray-100 font-medium">
            {dashboardContent?.approvedReq}
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
      </ul>
    </div>
  );
};

export default UserDashboard;
