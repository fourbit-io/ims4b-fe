import { buttons } from "@/contents/bengali/global";
import { useForm } from "react-hook-form";

const Filter = ({ requisitionFilter, filter, setFilter, refetch }) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    if (Object.keys(data).length === 5) {
      setFilter(data);
      refetch();
    }
  };
  const onReset = () => {
    setFilter({
      eId: "",
      eName: "",
      reqStatus: "",
      startDate: "",
      endDate: "",
    });
    reset();
    refetch();
  };
  return (
    <div className="mt-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-2 justify-between items-center">
          <div>
            <label className="font-medium">{requisitionFilter?.eId}</label>
            <input
              type="text"
              {...register("eId")}
              placeholder={requisitionFilter?.eId}
              defaultValue={filter?.eId}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">{requisitionFilter?.eName}</label>
            <input
              type="text"
              {...register("eName")}
              defaultValue={filter?.eName}
              placeholder={requisitionFilter?.eName}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">
              {requisitionFilter?.reqStatus}
            </label>
            <select
              {...register("reqStatus")}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-600 shadow-sm rounded-lg">
              <option value="">{requisitionFilter?.filterOptionDefault}</option>
              <option value="PENDING">PENDING</option>
              <option value="ASSIGNED">ASSIGNED</option>
              <option value="MODIFIED">MODIFIED</option>\
              <option value="APPROVED">APPROVED</option>
              <option value="RELEASED">RELEASED</option>
              <option value="DELIVERED">DELIVERED</option>
            </select>
          </div>
          <div>
            <label className="font-medium">
              {requisitionFilter?.startDate}
            </label>
            <input
              {...register("startDate")}
              type="date"
              defaultValue={filter?.startDate}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">{requisitionFilter?.endDate}</label>
            <input
              {...register("endDate")}
              type="date"
              defaultValue={filter?.endDate}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-600 shadow-sm rounded-lg"
            />
          </div>
        </div>
        <div className="mt-5 flex justify-center gap-4 items-center">
          <button className="w-full md:w-[300px] inline-block px-4 py-2 text-white duration-150 font-medium bg-primary-600 rounded-lg hover:bg-primary-500 active:bg-primary-700 md:text-sm">
            {buttons?.search}
          </button>
          <button
            onClick={onReset}
            className="w-full md:w-[300px] inline-block px-4 py-2 text-white duration-150 font-medium bg-red-600 rounded-lg hover:bg-red-500 active:bg-red-700 md:text-sm">
            {buttons?.reset}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filter;
