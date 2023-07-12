import NewStock from "@/components/pages/stock/New";
import withStorekeeper from "@/lib/hoc/withStoreKeeper";


const New = () => {
  return (
    <NewStock/>
  );
};

export default withStorekeeper(New);
