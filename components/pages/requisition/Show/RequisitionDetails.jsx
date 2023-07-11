import { BsFillCircleFill } from "react-icons/bs";
import { requisitionStatus } from "@/contents/bengali";
import { convertDate } from '@/lib';

const RequisitionDetails = ({ data, showRequisition }) => {
  const statusToBengali = (param) => {
    return requisitionStatus[param];
  };
  const { requisitionActivity } = data;

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
                    <p>
                      {item?.updatedUser?.userName}{" "}
                      { convertDate(item?.createdAt) }
                      {" "}
                      {statusToBengali(item?.status)}
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
