import EditRequisition from "@/components/pages/requisition/Edit";
import withStorekeeper from "@/lib/hoc/withStoreKeeper";

const EditPage = () => {
  return <EditRequisition />;
};

export default withStorekeeper(EditPage);
