import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import {Component} from "./Component";

const ReportPage = () => {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <Component ref={componentRef}/>
      {/* <div ref={componentRef}>hello</div> */}

      <div className="my-10 flex justify-center">
      <button className="text-center bg-primary-600 text-white hover:bg-primary-500 rounded-md px-2 py-1" onClick={handlePrint}>Print this out!</button>
      </div>
      
    </div>
  );
};

export default ReportPage;
