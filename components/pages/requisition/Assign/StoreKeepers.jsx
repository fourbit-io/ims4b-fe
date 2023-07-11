import React, { useEffect, useState } from "react";
import StatusHandler from "@/components/reusable/StatusHandler";
import {
  useAssignRequisitionData,
  useStoreKeepers,
} from "./useAssignRequisition";
import Select from "react-select";

const StoreKeepers = ({ id, assignRequisition }) => {
  const { data, isLoading, error } = useStoreKeepers();
  const [users, setUsers] = useState([]);
  const [option, setOption] = useState(null);
  const {
    storeKeepers,
    placeholder,
    noOptionsMessage,
    submitBtn,
    loadingSubmitBtn,
  } = assignRequisition;

  const { mutate, isLoading: assignLoading } = useAssignRequisitionData();

  const handleSubmit = () => {
    if (option) {
      const { value: assignedId } = option;
      mutate({ id, assignedId });
    }
  };

  useEffect(() => {
    const dataValues = data?.data?.data?.map((dataValue) => {
      const values = {
        value: dataValue?.id,
        label: dataValue?.userName,
      };
      return values;
    });
    setUsers(dataValues);
  }, [data]);
  return (
    <div>
      <div>
        <h3 className="text-gray-600 text-lg font-semibold px-4">
          {storeKeepers}
        </h3>
      </div>
      <Select
        defaultValue={option}
        onChange={setOption}
        options={users}
        isLoading={isLoading}
        placeholder={placeholder}
        noOptionsMessage={() => noOptionsMessage}
        styles={{
          control: (base, state) => ({
            ...base,
            boxShadow: "none",
            "&:hover": {
              border: "1px solid gray",
            },
            border: "1px solid gray",
          }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? "#11b981 " : "inherit",
            "&:hover": {
              backgroundColor: state.isSelected
                ? "#11b981"
                : "rgb(222, 235, 255)",
            },
          }),
        }}
      />
      <button
        disabled={assignLoading}
        className={`${
          assignLoading
            ? "bg-gray-600  hover:bg-gray-500"
            : "bg-primary-600  hover:bg-primary-500"
        } text-white px-2 py-1 rounded-md w-full my-10`}
        onClick={handleSubmit}>
        {assignLoading ? loadingSubmitBtn : submitBtn}
      </button>
    </div>
  );
};

export default StoreKeepers;
