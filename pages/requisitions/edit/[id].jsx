import EditRequisition from "@/components/pages/requisition/Edit";
import withManager from "@/lib/hoc/withUser";

const EditPage = () => {
  return <EditRequisition />;
};

export default withManager(EditPage);
