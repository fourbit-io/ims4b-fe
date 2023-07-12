import DamagedStock from "@/components/pages/stock/Damaged";
import withStorekeeper from "@/lib/hoc/withStoreKeeper";


const Damaged = () => {
  return (
    <DamagedStock/>
  );
};

export default withStorekeeper(Damaged);
