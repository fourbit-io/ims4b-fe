import { requisitionTableHeader } from "../../../../contents/bengali";

// Table Header component
const TableHeader = () => {
  return (
    <section className="">
      <div className="p-4 grid grid-cols-9 bg-gray-100 justify-between text-gray-400 border-b border-gray-300">
        {requisitionTableHeader.map((title) => {
          return (
            <p className={`w-full text-center col-span-1`}>{title}</p>
          );
        })}
      </div>
    </section>
  );
};

export default TableHeader;
