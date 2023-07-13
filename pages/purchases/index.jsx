import List from "@/components/pages/purchase/List";
import withStorekeeper from "@/lib/hoc/withStoreKeeper";

const PurchasePage = () => {
  return <List />;
};

export default withStorekeeper(PurchasePage);
