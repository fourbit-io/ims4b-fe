import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Component } from "./Component";
import { buttons } from "@/contents/bengali/global";

const FormTemplate = ({ id, date, userName, items, remark }) => {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div className="w-a4 mx-auto">
      <Component ref={componentRef} id={id} date={date} userName={userName} items={items} remark={remark} />

      <div className="my-10 flex justify-center">
        <button
          className="text-center bg-primary-600 text-white hover:bg-primary-500 rounded-md px-2 py-1"
          onClick={handlePrint}>
          {buttons?.print}
        </button>
      </div>
    </div>
  );
};

export default FormTemplate;
