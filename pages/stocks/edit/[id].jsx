import EditStock from "@/components/pages/stock/Edit";
import withStorekeeper from "@/lib/hoc/withStoreKeeper";

const EditPage = () => {
  return <EditStock />;
};

export default withStorekeeper(EditPage);
