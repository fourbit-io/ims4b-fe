
import Layout from "@/layout";
import NewProduct from "@/components/pages/product/New";
import withStorekeeper from "@/lib/hoc/withStoreKeeper";

const New = () => {
  return (
      <NewProduct />
  );
};

export default withStorekeeper(New);
