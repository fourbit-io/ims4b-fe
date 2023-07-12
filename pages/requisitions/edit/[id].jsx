import EditRequisition from "@/components/pages/requisition/Edit";
import withUser from "@/lib/hoc/withUser";

const EditPage = () => {
  return <EditRequisition />;
};

export default withUser(EditPage);
