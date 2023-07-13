import List from "@/components/pages/stock/List";
import withStorekeeper from "@/lib/hoc/withStoreKeeper";

const StockPage = () => {
  return (
      <List />
  );
};

export default withStorekeeper(StockPage);
