import NewPurchase from "@/components/pages/purchase/New";
import withStorekeeper from "@/lib/hoc/withStoreKeeper";

const New = () => {
  return <NewPurchase />;
};

export default withStorekeeper(New);
