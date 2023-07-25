import { useState } from "react";

const Filter = ({ stockFilter, filter, setFilter, refetch }) => {
  const handleChange = (keyType, val) => {
    filter[keyType] = val;
    setFilter(filter);
  };
  const onSubmit = () => {
    // refetch();
    console.log({ filter });
  };
  return (
    <div className="mt-5">
      <div className="flex gap-2 justify-between items-center">
        <div>
          <label className="font-medium">{stockFilter?.id}</label>
          <input
            type="text"
            placeholder={stockFilter?.id}
            defaultValue={filter?.pid}
            onChange={(e) => handleChange("pid", e.target.value)}
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-600 shadow-sm rounded-lg"
          />
        </div>
        <div>
          <label className="font-medium">{stockFilter?.productName}</label>
          <input
            type="text"
            defaultValue={filter?.pName}
            placeholder={stockFilter?.productName}
            onChange={(e) => handleChange("pName", e.target.value)}
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-600 shadow-sm rounded-lg"
          />
        </div>
        <div>
          <label className="font-medium">{stockFilter?.quantity}</label>
          <select
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
            type="date"
            defaultValue={filter?.startDate}
            onChange={(e) =>
              handleChange("startDate", new Date(e.target.value).toISOString())
            }
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-600 shadow-sm rounded-lg"
          />
        </div>
        <div>
          <label className="font-medium">{stockFilter?.endDate}</label>
          <input
            type="date"
            defaultValue={filter?.endDate}
            onChange={(e) =>
              handleChange("endDate", new Date(e.target.value).toISOString())
            }
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-600 shadow-sm rounded-lg"
          />
        </div>
      </div>
      <div className="mt-5 flex justify-center">
        <button
          onClick={onSubmit}
          className="w-full md:w-[300px] inline-block px-4 py-2 text-white duration-150 font-medium bg-primary-600 rounded-lg hover:bg-primary-500 active:bg-primary-700 md:text-sm">
          {stockFilter?.search}
        </button>
      </div>
    </div>
  );
};

export default Filter;
