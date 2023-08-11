import { tableText } from "@/contents/bengali";
import { useEffect, useRef, useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
const Table = ({ tableHeaders, tableItems, tableColumns, getActions, hScroll }) => {
  const { footer } = tableText;
  const tableRef = useRef(null);

  const scrollRight = () => {
    tableRef.current.scrollLeft += tableRef.current.scrollWidth;
  };

  const scrollLeft = () => {
    tableRef.current.scrollLeft -= tableRef.current.scrollWidth;
  };

  return (
    <div
      className="mt-12 relative h-max overflow-auto scroll-smooth"
      ref={tableRef}>
      <table className="w-full table-auto text-sm text-left">
        <thead className="text-gray-600 font-medium border-b">
          <tr>
            {tableHeaders?.map((item, idx) => (
              <th className="py-3 pr-6" key={idx}>
                {item}
              </th>
            ))}
            <th className="py-3 pr-6"></th>
          </tr>
        </thead>
        <tbody className="text-gray-600 divide-y">
          {tableItems?.map((item, idx) => (
            <tr key={idx}>
              {tableColumns?.map((colItem, colIdx) =>
                colItem !== "actions" ? (
                  <td
                    className="pr-6 py-4 whitespace-nowrap text-ellipsis max-w-[200px] overflow-hidden"
                    key={colIdx}>
                    {item[colItem] ?? "-"}
                  </td>
                ) : (
                  <td
                    key={colIdx}
                    className="whitespace-nowrap text-ellipsis max-w-auto overflow-hidden">
                    {getActions && getActions?.(item)}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
        {hScroll && (
          <div className="w-full">
            <BsFillArrowLeftCircleFill
              className="px-4 fixed w-[80px] h-screen bottom-0 top-0 left-auto text-gray-600 opacity-60 hover:opacity-100"
              onClick={scrollLeft}
            />
            <BsFillArrowRightCircleFill
              className="px-4 fixed w-[80px] h-screen bottom-0 top-0 right-0 text-gray-600 opacity-60 hover:opacity-100"
              onClick={scrollRight}
            />
          </div>
        )}
      </table>
      {tableItems?.length === 0 && (
        <div className="w-full h-[350px] flex justify-center items-center">
          <h1 className="text-xl text-secondary-main">{footer}</h1>
        </div>
      )}
    </div>
  );
};

export default Table;
