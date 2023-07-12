import EditStock from "@/components/pages/stock/Edit";
import withManager from "@/lib/hoc/withManager";

const EditPage = () => {
  return <EditStock />;
};

export default withManager(EditPage);
