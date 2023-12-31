import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { selectedProductsContent } from "@/contents/bengali";
import { remove, qtyCount, removeAll, setRemark } from "@/slices/productSlice";
import { useUpdateRequisitionData } from "./useEditRequisition";
import Loader from "@/components/reusable/Loader";

const SelectedProduct = ({ id }) => {
  const {
    pageTitle,
    emptyProdContent,
    productName,
    productCode,
    productQty,
    totalItm,
    totalQt,
    note,
    optional,
    submitBtn,
    submitBtnLoading,
    cancelBtn,
  } = selectedProductsContent;

  const selectedProducts = useSelector((state) => state.product.productData);
  const remark = useSelector((state) => state.product.remark);

  const totalItem = useSelector((state) => state.product.totalItem);
  const totalQty = useSelector((state) => state.product.totalQty);
  const dispatch = useDispatch();

  const { mutate, isLoading, isError, error } = useUpdateRequisitionData();
  const removeProduct = (id) => {
    dispatch(remove(id));
  };

  const handleProductCount = (id, type) => {
    dispatch(qtyCount({ id, type }));
  };

  const handleCancelAll = () => {
    dispatch(removeAll());
  };

  const handleSubmit = () => {
    mutate({ id, requisitionProducts: selectedProducts, remark });
  };
  return (
    <div className="px-4">
      <div className="bg-gray-50 p-2 rounded-md">
        <h3 className="p-3 text-gray-600">{pageTitle}</h3>
        {selectedProducts?.length > 0 ? (
          <div>
            <div className="grid grid-cols-3 gap-2 px-2 text-gray-400">
              <div>{productName}</div>
              <div>{productCode}</div>
              <div>{productQty}</div>
            </div>
            <hr className="text-gray-600" />
            {selectedProducts?.map((item, id) => (
              <div
                key={id}
                className="grid grid-cols-3 gap-2 items-center my-2 px-2">
                <div>{item?.name}</div>
                <div>{item?.code}</div>
                <div className="flex gap-4 items-center">
                  <div className="flex-1 flex items-center justify-between border px-2 py-1 rounded-md">
                    <AiOutlineMinus
                      onClick={() => handleProductCount(item?.productId, "dec")}
                      className="cursor-pointer"
                    />
                    <span>{item?.quantity}</span>
                    <AiOutlinePlus
                      onClick={() => handleProductCount(item?.productId, "inc")}
                      className="cursor-pointer"
                    />
                  </div>
                  {/* <AiOutlineClose
                    onClick={() => removeProduct(item?.productId)}
                    className="text-red-500 cursor-pointer"
                  /> */}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Loader className="w-full h-[400px] flex justify-center items-center" />
        )}

        <hr className="text-gray-600" />
        <div className="ml-4 flex justify-start gap-8 items-center text-gray-400">
          <p>
            {totalQt}: {totalQty}
          </p>
          <p>
            {totalItm}: {totalItem}
          </p>
        </div>
      </div>
      <div>
        <h4 className="p-1 text-gray-600">
          {note} ({optional})
        </h4>
        <textarea
          rows={4}
          placeholder={note}
          onChange={(e) => dispatch(setRemark(e.target.value))}
          value={remark}
          className="w-full bg-gray-50 border-2 border-gray-200 rounded-sm px-3 py-2"></textarea>
      </div>
      <div className="flex items-center gap-4 py-2">
        <button
          onClick={handleCancelAll}
          className="px-2 py-1 bg-red-400 text-white rounded-md">
          {cancelBtn}
        </button>
        <button
          disabled={isLoading}
          onClick={handleSubmit}
          className={`px-2 py-1 ${
            isLoading ? "bg-gray-400" : "bg-primary-600"
          }  text-white rounded-md`}>
          {isLoading ? submitBtnLoading : submitBtn}
        </button>
      </div>
    </div>
  );
};

export default SelectedProduct;
