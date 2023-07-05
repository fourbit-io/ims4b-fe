import TableRow from "./TableRow";
import TableHeader from "./TableHeader";
import { dummyData } from "./dummy";
import { newProduct } from "@/contents/bengali";
import { useRouter } from "next/router";

const ProductTable = () => {
  const { pageTitle } = newProduct;
  const router = useRouter();
  return (
    <div className="max-w-screen-xl mx-auto p-4 md:p-8">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            Product Lists
          </h3>
        </div>
        <div className="mt-3 md:mt-0">
          <button
            onClick={() => router.push("/products/new")}
            className="inline-block px-4 py-2 text-white duration-150 font-medium bg-primary-600 rounded-lg hover:bg-primary-500 active:bg-primary-700 md:text-sm">
            {pageTitle}
          </button>
        </div>
      </div>
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
                You haven't created any product yet !! <br /> please add product
                first !!
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductTable;
