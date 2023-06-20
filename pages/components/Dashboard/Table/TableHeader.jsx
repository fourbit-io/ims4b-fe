// Table Header contents
const headerContent = [
  "Requisition ID",
  "Description",
  "Total QTY",
  "Total Item",
  "Requested date",
  "Recieved date",
  "Status",
];

// Table Header component
const TableHeader = () => {
  return (
    <section className="">
      <div className="p-4 grid grid-cols-9 bg-gray-100 justify-between text-gray-400 w-full border-b border-gray-300">
        <p className="w-full text-center col-span-1">Requisition ID</p>
        <p className="w-full text-center col-span-1">Total QTY</p>
        <p className="w-full text-center col-span-1">Total Item</p>
        <p className="w-full text-center col-span-1">Requested Date</p>
        <p className="w-full text-center col-span-1">Recieved Date</p>
        <p className="w-full text-center col-span-1">Status</p>
      </div>
    </section>
  );
};

export default TableHeader;
