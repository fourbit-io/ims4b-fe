import PurchaseShow from "@/components/pages/purchase/Show";
import withStorekeeper from "@/lib/hoc/withStoreKeeper";

const PurchaseShowPage = () => {
  return <PurchaseShow />;
};

export default withStorekeeper(PurchaseShowPage);
