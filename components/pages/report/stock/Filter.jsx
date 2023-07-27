import { buttons } from "@/contents/bengali/global";
import { useForm } from "react-hook-form";

const Filter = ({ stockFilter, filter, setFilter, refetch }) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    if (Object.keys(data).length === 5) {
      setFilter(data);
      refetch();
    }
  };
  const onReset = () => {
    setFilter({
      pid: "",
      pName: "",
      qtyOrder: "desc",
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
            <label className="font-medium">{stockFilter?.id}</label>
            <input
              type="text"
              {...register("pid")}
              placeholder={stockFilter?.id}
              defaultValue={filter?.pid}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">{stockFilter?.productName}</label>
            <input
              type="text"
              {...register("pName")}
              defaultValue={filter?.pName}
              placeholder={stockFilter?.productName}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">{stockFilter?.quantity}</label>
            <select
              {...register("qtyOrder")}
              defaultValue={filter?.qtyOrder}
              onChange={(e) => handleChange("qtyOrder", e.target.value)}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-600 shadow-sm rounded-lg">
              <option value="desc">{stockFilter?.stockQtyDsc}</option>
              <option value="asc">{stockFilter?.stockQtyAsc}</option>
            </select>
          </div>
          <div>
            <label className="font-medium">{stockFilter?.startDate}</label>
            <input
              {...register("startDate")}
              type="date"
              defaultValue={filter?.startDate}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">{stockFilter?.endDate}</label>
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
