import { BsFillCircleFill } from "react-icons/bs";
import { requisitionStatus } from "@/contents/bengali";
import { convertDate } from "@/lib";

const RequisitionDetails = ({ data, showRequisition }) => {
  const statusToBengali = (param) => {
    return requisitionStatus[param];
  };
  const { requisitionActivity, assginedUser } = data;

  const { pageTitle } = showRequisition;
  return (
    <div>
      <div className="mt-10 space-y-4">
        <h3 className="text-gray-600 text-2xl font-semibold px-4">
          {pageTitle}
        </h3>
      </div>
      <div>
        <ul className="space-y-4">
          {requisitionActivity?.map((item, idx) => (
            <li key={idx} className="px-5 py-2 bg-white rounded-md shadow-sm">
              <div>
                <div className="justify-between sm:flex">
                  <div className="flex-1 flex gap-2 items-center">
                    <BsFillCircleFill className="text-primary-600" />
                    <p className="flex gap-2 items-center">
                      <span className="font-bold">{item?.updatedUser?.name ?? item?.updatedUser?.userName }</span>
                      {" "}
                      <span className="font-bold">{convertDate(item?.createdAt)}</span>
                      
                      {" "}
                      {statusToBengali(item?.status)}
                      <span className="font-bold">{item?.status == "ASSIGNED" && (assginedUser?.name ?? assginedUser?.userName)}</span>
                      
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RequisitionDetails;
