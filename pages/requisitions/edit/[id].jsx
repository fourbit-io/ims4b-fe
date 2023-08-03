import EditRequisition from "@/components/pages/requisition/Edit";
import withStorekeeper from "@/lib/hoc/withStorekeeper";

const EditPage = () => {
  return <EditRequisition />;
};

export default withStorekeeper(EditPage);
