import TableRow from "./TableRow";
import TableHeader from "./TableHeader";
import { dummyData } from "./dummy";

const Table = () => {
  return (
    <section className="mt-10">
      <TableHeader />
      <div className="w-full h-[70vh] overflow-scroll">
        {/* Product List Data */}
        {dummyData?.length > 0 ? (
          dummyData?.map((product, index) => {
            return <TableRow key={index} orderId={index} {...product} />;
          })
        ) : (
          <div className="text-gray-600 text-center p-10">
            <p>
              You haven't created any product yet !! <br /> please add product first !!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Table;
